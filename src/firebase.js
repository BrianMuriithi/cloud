// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage(app);