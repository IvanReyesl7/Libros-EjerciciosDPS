// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANsejNQsDFhoIR9JwyYLMqCTSoSM-Z-gw",
  authDomain: "libros-6e7f5.firebaseapp.com",
  projectId: "libros-6e7f5",
  storageBucket: "libros-6e7f5.appspot.com",
  messagingSenderId: "906109985833",
  appId: "1:906109985833:web:0602acd90cabbfd0c8e838",
  measurementId: "G-WHPB79G0RL"
};

// Initialize Firebase
export const Firebase_App = initializeApp(firebaseConfig);
export const Firebase_auth = getAuth(Firebase_App);
export const db = getFirestore(Firebase_App);