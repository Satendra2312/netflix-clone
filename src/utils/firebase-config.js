// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBXcidTK2EbvWhWZQvzc0z5Ln7mJUfNzU",
    authDomain: "netflix-clone-react-55568.firebaseapp.com",
    projectId: "netflix-clone-react-55568",
    storageBucket: "netflix-clone-react-55568.appspot.com",
    messagingSenderId: "531527636778",
    appId: "1:531527636778:web:568159bd8daf49ec463053",
    measurementId: "G-G2VLQ2LNKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
