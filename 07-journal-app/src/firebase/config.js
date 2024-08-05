// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN9ViUpNJtppqF3-OHxZbG1jUd23wE17Q",
  authDomain: "journal-app-6d550.firebaseapp.com",
  projectId: "journal-app-6d550",
  storageBucket: "journal-app-6d550.appspot.com",
  messagingSenderId: "1061554687811",
  appId: "1:1061554687811:web:c3d32e3e297ba9621aa9f6",
  measurementId: "G-WVS1WTWDFM",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
