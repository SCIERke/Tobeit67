
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
//    

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzTMrDk0uBKVHP_K2ntweZbSfBbLYyZQQ",
    authDomain: "tobe-f2afc.firebaseapp.com",
    projectId: "tobe-f2afc",
    storageBucket: "tobe-f2afc.appspot.com",
    messagingSenderId: "155536749020",
    appId: "1:155536749020:web:d9285947c53fef43b7df19",
    measurementId: "G-KLYCLFZXSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
