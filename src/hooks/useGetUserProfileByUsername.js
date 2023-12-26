import { useEffect, useState } from "react";
import { collection, getDoc, query, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";
const useGetUserProfileByUsername = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();
  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", props.username)
        );
        const querySnap = await getDoc(q);
        if (querySnap.empty) {
          return setUserProfile(null);
        }
        let userDoc;
        querySnap.forEach((doc) => {
          userDoc = doc.data();
        });
        setUserProfile(userDoc);
      } catch (error) {
        showToast("Error", error.message, "error");
      }
    };
    getUserProfile();
  }, [props.username, setUserProfile, showToast]);
  return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
