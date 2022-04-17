// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoYh91Q5SGyd3Bt4tLUrqCGsljq7mcY-0",
    authDomain: "hrx-photography.firebaseapp.com",
    projectId: "hrx-photography",
    storageBucket: "hrx-photography.appspot.com",
    messagingSenderId: "873386107413",
    appId: "1:873386107413:web:43b854c6ca7a09f31f641c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;