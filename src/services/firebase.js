// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // digiudaan.appspot.com
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// TEMP debug (remove after verifying on production console)
console.log("[Firebase] apiKey:", firebaseConfig.apiKey);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Only run Analytics when supported + in browser
if (typeof window !== "undefined") {
  isSupported().then(ok => {
    if (ok && firebaseConfig.measurementId) getAnalytics(app);
  });
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };
