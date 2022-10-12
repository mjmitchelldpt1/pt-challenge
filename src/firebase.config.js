import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD8Tk5prKhOUlVlr4_DvZDoOQlrTliRDrw",
  authDomain: "pt-30-day-challenge.firebaseapp.com",
  projectId: "pt-30-day-challenge",
  storageBucket: "pt-30-day-challenge.appspot.com",
  messagingSenderId: "817507319615",
  appId: "1:817507319615:web:c826121dd6b4989d569d8a",
  measurementId: "G-6Z9CQM69ZE"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()

getAnalytics(app);