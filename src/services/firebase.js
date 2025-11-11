// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNl9fBkoP6neOEsBX9lL624UNRlgunWkk",
  authDomain: "digiudaan.firebaseapp.com",
  projectId: "digiudaan",
  storageBucket: "digiudaan.firebasestorage.app",
  messagingSenderId: "308996783729",
  appId: "1:308996783729:web:44a933691699c29b5b25d0",
  measurementId: "G-8SE6ZQM60S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);