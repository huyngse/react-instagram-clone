import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {
  const [isLoading, SetIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();
  const getUserProfile = async (username) => {
    SetIsLoading(true);
    setUser(null);
    try {
      const q = query(
        collection(firestore, "users"),
        where("username", "==", username)
      );
      const querySnap = await getDocs(q);
      if (querySnap.empty) {
        showToast("Error", "User not found", "error");
        return;
      }
      querySnap.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      showToast("Error", error.message, "error");
      setUser(null);
    } finally {
      SetIsLoading(false);
    }
  };
  return { isLoading, getUserProfile, user, setUser };
};

export default useSearchUser;
