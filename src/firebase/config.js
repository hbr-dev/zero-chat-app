import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFdbK7esnhlkjAqGArSnXS8RPtOVobLpM",
    authDomain: "tp-mobile-whats.firebaseapp.com",
    projectId: "tp-mobile-whats",
    storageBucket: "tp-mobile-whats.appspot.com",
    messagingSenderId: "1003000952098",
    appId: "1:1003000952098:web:3b3de815d295ccdc2f617b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };