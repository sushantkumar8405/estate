// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e22c5.firebaseapp.com",
  projectId: "mern-estate-e22c5",
  storageBucket: "mern-estate-e22c5.appspot.com",
  messagingSenderId: "28254438348",
  appId: "1:28254438348:web:72997152519a878c835369"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);