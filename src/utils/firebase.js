// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZwr3tafuOmiYTkVEYx9zqX0qyt2ppu5M",
  authDomain: "netflix-gpt-d06b3.firebaseapp.com",
  projectId: "netflix-gpt-d06b3",
  storageBucket: "netflix-gpt-d06b3.firebasestorage.app",
  messagingSenderId: "424903445789",
  appId: "1:424903445789:web:d3c4aad553d661f486a5f4",
  measurementId: "G-89MEL8453R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();