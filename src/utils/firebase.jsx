// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVeBgA3HxgEDEbc2RQ5IZQKhXzRIx3BK4",
  authDomain: "moviegpt-8235d.firebaseapp.com",
  projectId: "moviegpt-8235d",
  storageBucket: "moviegpt-8235d.firebasestorage.app",
  messagingSenderId: "539638044045",
  appId: "1:539638044045:web:543dddb3fdf388fd1599c4",
  measurementId: "G-NR7F06Y9C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 export const auth =getAuth();