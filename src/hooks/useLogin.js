import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";
const useLogin = () => {
  const loginUser = useAuthStore((state) => state.login);
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      // GET DOCUMENT FROM FIRESTORE
      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("userInfo", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      } else {
        showToast("Error", error.message, "error");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { login, loading, error };
};

export default useLogin;
