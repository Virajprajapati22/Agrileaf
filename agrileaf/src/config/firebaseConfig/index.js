// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvihAG0RFUCPLCJxdJm0keZhTMg1ubT4w",
    authDomain: "agrileaf-4adc8.firebaseapp.com",
    projectId: "agrileaf-4adc8",
    storageBucket: "agrileaf-4adc8.appspot.com",
    messagingSenderId: "642516571567",
    appId: "1:642516571567:web:3da6978084e585c9ab0b5a",
    measurementId: "G-B25MZY2MT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };