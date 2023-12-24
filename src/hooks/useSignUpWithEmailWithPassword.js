import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
const useSignUpWithEmailWithPassword = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);
  // CHECK IF ALL FIELDS IS FILLED
  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      showToast("Error", "Please fill all the fields", "error");
      console.log("Please fill all the fields");
      return;
    }
    // VALIDATE USERNAME USING FIRESTORE QUERY
    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("username", "==", inputs.username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      showToast("Error", "Username already exists", "error");
      return;
    }
    // TRY TO CREATE USER USING CUSTOM HOOK
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      if (newUser) {
        const userDocument = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
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

  return { loading, error, signup };
};

export default useSignUpWithEmailWithPassword;
