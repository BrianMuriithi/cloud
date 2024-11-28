import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBogWRF_7CfB15DestOdmRMogzqijhBEss",
  authDomain: "reminda-b0cf8.firebaseapp.com",
  projectId: "reminda-b0cf8",
  storageBucket: "reminda-b0cf8.appspot.com",
  messagingSenderId: "1093169509331",
  appId: "1:1093169509331:web:67cfc28fe245cc4c7db526",
  measurementId: "G-597TDHZ862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const signUp = (name, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        createdAt: new Date()
      });
    });
};

export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const forgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
