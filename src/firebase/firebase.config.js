// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3gOzn0NjqZFHp0GvsHsTh4D_s_IVZDpk",
  authDomain: "assignment-11-3545c.firebaseapp.com",
  projectId: "assignment-11-3545c",
  storageBucket: "assignment-11-3545c.appspot.com",
  messagingSenderId: "668003698977",
  appId: "1:668003698977:web:60ec900e2d1f76f0475660",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
