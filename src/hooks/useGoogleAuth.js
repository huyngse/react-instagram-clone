import { auth } from "../firebase/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import useShowToast from "../hooks/useShowToast";
import useAuthStore from "../store/authStore";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
const useGoogleAuth = () => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);
  const signIn = async () => {
    try {
      const newUser = await signInWithGoogle();
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      if (newUser) {
        const userDocument = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split("@")[0],
          fullName: newUser.user.displayName,
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDocument);
        localStorage.setItem("userInfo", JSON.stringify(userDocument));
        loginUser(userDocument);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { signIn, error };
};

export default useGoogleAuth;
