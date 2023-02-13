// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa2Qr9kx8_L-PwPyXJfyXxfbKTwpOAf8o",
  authDomain: "flashcard-generator-af07e.firebaseapp.com",
  projectId: "flashcard-generator-af07e",
  storageBucket: "flashcard-generator-af07e.appspot.com",
  messagingSenderId: "986311566604",
  appId: "1:986311566604:web:63d7c4c1a5272bcbe21529",
  measurementId: "G-BJ602SNK3M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
