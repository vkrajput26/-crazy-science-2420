// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIBKeD56gEQK-jYZX6U6LYNfhDy0bQg-A",
  authDomain: "netmedsauth.firebaseapp.com",
  projectId: "netmedsauth",
  storageBucket: "netmedsauth.appspot.com",
  messagingSenderId: "495820235691",
  appId: "1:495820235691:web:99ea3aab1c9e2ec13668ee",
  measurementId: "G-CMZ2WFV63C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
