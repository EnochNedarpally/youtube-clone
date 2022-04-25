// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ1sJWcVoxa4LF7FTyk8FQDCd4eImAnDY",
  authDomain: "react-50a4c.firebaseapp.com",
  projectId: "react-50a4c",
  storageBucket: "react-50a4c.appspot.com",
  messagingSenderId: "889620186584",
  appId: "1:889620186584:web:61c12019a6c9acbbb21ead"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
