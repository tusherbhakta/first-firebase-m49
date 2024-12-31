// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3-cT6h-3dYBu1Pbf2mGk02mVcmuVdgAg",
  authDomain: "first-firebase-m49.firebaseapp.com",
  projectId: "first-firebase-m49",
  storageBucket: "first-firebase-m49.firebasestorage.app",
  messagingSenderId: "221052165153",
  appId: "1:221052165153:web:42cdba717c5e3086f69760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;