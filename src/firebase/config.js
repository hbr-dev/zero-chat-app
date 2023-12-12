import app from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAFdbK7esnhlkjAqGArSnXS8RPtOVobLpM",
    authDomain: "tp-mobile-whats.firebaseapp.com",
    projectId: "tp-mobile-whats",
    storageBucket: "tp-mobile-whats.appspot.com",
    messagingSenderId: "1003000952098",
    appId: "1:1003000952098:web:3b3de815d295ccdc2f617b"
};

const firebaseApp = app.initializeApp(firebaseConfig);
export default firebaseApp;