// Import the functions you need from the SDKs you need

import { initializeApp } from "@firebase/app";
// import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBCZ_pfb9KrnJ1e_7iYi_XvvFlQbh5bBcI",
    authDomain: "my-first-app-js.firebaseapp.com",
    databaseURL: "https://my-first-app-js-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-first-app-js",
    storageBucket: "my-first-app-js.appspot.com",
    messagingSenderId: "813259151791",
    appId: "1:813259151791:web:291167bd3c5759c426775a"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

