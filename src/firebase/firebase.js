import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVPbV92DG6p6iFD9o6bVPzHC_6Gf8Kn-Q",
  authDomain: "insta-clone-3aef6.firebaseapp.com",
  projectId: "insta-clone-3aef6",
  storageBucket: "insta-clone-3aef6.appspot.com",
  messagingSenderId: "319991556813",
  appId: "1:319991556813:web:679cf1bf0466afdac61784",
  measurementId: "G-WSBZXKVMCS",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, auth, firestore, storage };
