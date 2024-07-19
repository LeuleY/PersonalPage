// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-bACb-fE2RVqIARsh2FXAwwlkf816w_Q",
  authDomain: "personalresume-b4d29.firebaseapp.com",
  projectId: "personalresume-b4d29",
  storageBucket: "personalresume-b4d29.appspot.com",
  messagingSenderId: "855342086613",
  appId: "1:855342086613:web:cc207b5de13f53d76a255c",
  measurementId: "G-BNH18QZD4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);