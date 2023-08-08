// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_F_NO6mRTXZnJXM0ec9GvmmO1VeKBigo",
  authDomain: "chat-dce30.firebaseapp.com",
  projectId: "chat-dce30",
  storageBucket: "chat-dce30.appspot.com",
  messagingSenderId: "37740736404",
  appId: "1:37740736404:web:40846f9ad2cf7a2abd2981"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
