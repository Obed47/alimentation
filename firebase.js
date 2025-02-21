import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9plqYZdVB9z31PcY_tp3gonbulNFgUow",
  authDomain: "authentication-c0a6b.firebaseapp.com",
  projectId: "authentication-c0a6b",
  storageBucket: "authentication-c0a6b.firebasestorage.app",
  messagingSenderId: "222663317966",
  appId: "1:222663317966:web:27528c78d567646d3cf39f",
  measurementId: "G-5FRV1L52XD",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
