import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage, firestore } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";
const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = useUserProfileStore((state) => state.setUserProfile);
  const showToast = useShowToast();
  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) return;
    setIsUpdating(true);
    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userdocRef = doc(firestore, "users", authUser.uid);
    let url = "";
    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        url = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }
      const updatedUser = {
        ...authUser,
        fullName: inputs.fullname || authUser.fullName,
        username: inputs.username || authUser.username,
        bio: inputs.bio || authUser.bio,
        profilePicURL: url || authUser.profilePicURL,
      };
      await updateDoc(userdocRef, updatedUser);
      localStorage.setItem("userInfo", JSON.stringify(updatedUser));
      setAuthUser(updatedUser);
      setUserProfile(updatedUser);
      showToast("Success", "Profile updated successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
    finally {
      setIsUpdating(false);
    }
  };
  return { editProfile, isUpdating };
};

export default useEditProfile;
