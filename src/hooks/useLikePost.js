import { firestore } from "../firebase/firebase";
import useShowToast from "../hooks/useShowToast";
import { useState } from "react";
import useAuthStore from "../store/authStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const useLikePost = (post) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid));
  const showToast = useShowToast();

  const handleLikePost = async () => {
    if (isUpdating) return;
    if (!authUser)
      return showToast(
        "Error",
        "You must be logged in to be able to like the post",
        "error"
      );
    setIsUpdating(true);
    try {
        const postRef = doc(firestore, 'posts', post.id);
        await updateDoc(postRef, {
            likes: isLiked 
            ? arrayRemove(authUser.uid)
            : arrayUnion(authUser.uid)
        });
        isLiked ? setLikes(isLiked - 1) : setLikes(isLiked + 1);
        setIsLiked(!isLiked);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  return { isUpdating, likes, isLiked, handleLikePost};
};

export default useLikePost;
