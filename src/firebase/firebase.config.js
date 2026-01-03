// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcXVI1H52yf1Jk7cyY0QXlhb1xe9sFo4k",
  authDomain: "auth--github-email-pass.firebaseapp.com",
  projectId: "auth--github-email-pass",
  storageBucket: "auth--github-email-pass.firebasestorage.app",
  messagingSenderId: "192065277256",
  appId: "1:192065277256:web:7a1fe707e915ecdbb5377d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
