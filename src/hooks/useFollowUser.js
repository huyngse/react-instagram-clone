import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "../hooks/useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
const useFollowUser = (userId) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const { userProfile, setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  useEffect(() => {
    if (authUser) {
      setIsFollowing(authUser.following.includes(userId));
    }
  }, [authUser, userId]);

  const handleFollowUser = async () => {
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const targetFollowRef = doc(firestore, "users", userId);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });
      await updateDoc(targetFollowRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });

      if (isFollowing) {
        //UNFOLLOW
        setAuthUser({
          ...authUser,
          following: authUser.following.filter((uid) => uid !== userId),
        });
        if (userProfile) {
          if (userProfile.uid === authUser.uid) {
            setUserProfile({
              ...userProfile,
              following: authUser.following.filter((uid) => uid !== userId),
            });
          } else {
            setUserProfile({
              ...userProfile,
              followers: userProfile.followers.filter(
                (uid) => uid !== authUser.uid
              ),
            });
          }
        }
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            ...authUser,
            following: authUser.following.filter((uid) => uid !== userId),
          })
        );
        setIsFollowing(false);
      } else {
        //FOLLOW
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userId],
        });
        if (userProfile) {
          if (userProfile.uid === authUser.uid) {
            setUserProfile({
              ...userProfile,
              following: [...userProfile.following, userId],
            });
          } else {
            setUserProfile({
              ...userProfile,
              followers: [...userProfile.followers, authUser.uid],
            });
          }
        }
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            ...authUser,
            following: [...authUser.following, userId],
          })
        );
        setIsFollowing(true);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;
