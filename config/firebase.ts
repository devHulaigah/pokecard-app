// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace these values with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO2QW6bK1KIB69rQdc7C_ZCI2aUcCoUFw",
  authDomain: "pokecard-994c6.firebaseapp.com",
  projectId: "pokecard-994c6",
  storageBucket: "pokecard-994c6.firebasestorage.app",
  messagingSenderId: "552512859105",
  appId: "1:552512859105:web:7089913f324abe3d1ac0a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
