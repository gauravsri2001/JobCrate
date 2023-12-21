// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_E9nJuZBw7hC9_w2D7z2mAGPHVACsfmg",
  authDomain: "online-job-portal-27355.firebaseapp.com",
  projectId: "online-job-portal-27355",
  storageBucket: "online-job-portal-27355.appspot.com",
  messagingSenderId: "286980152171",
  appId: "1:286980152171:web:b13a787c990665b4ed8a2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db};