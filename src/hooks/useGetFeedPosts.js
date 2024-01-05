import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import usePostStore from "../store/postStore";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import useAuthStore from "../store/authStore";
const useGetFeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const authUser = useAuthStore((state) => state.user);
  const { posts, setPosts } = usePostStore();
  const { setUserProfile } = useUserProfileStore(
    (state) => state.setUserProfile
  );
  useEffect(() => {
    async function getFeedPosts() {
      setIsLoading(true);
      if (authUser.following.length === 0) {
        setIsLoading(false);
        setPosts([]);
        return;
      }
      try {
        const postsCollection = collection(firestore, "posts");
        const q = query(
          postsCollection,
          where("createdBy", "in", authUser.following)
        );
        const querySnapshot = await getDocs(q);
        const feedPosts = [];
        querySnapshot.forEach((doc) => {
          feedPosts.push({ id: doc.id, ...doc.data() });
        });
        feedPosts.sort((a, b) => b.createdAt - a.createdAt);
        setPosts(feedPosts);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    }
    if (authUser) {
      getFeedPosts();
    }
  }, [authUser, setPosts, showToast, setUserProfile]);

  return { isLoading, posts };
};

export default useGetFeedPosts;
