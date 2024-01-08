// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDvPW8MwmiFsU2fQVxX-Ugy9W4_IKpeUo",
    authDomain: "lore-chatapp.firebaseapp.com",
    projectId: "lore-chatapp",
    storageBucket: "lore-chatapp.appspot.com",
    messagingSenderId: "482981012667",
    appId: "1:482981012667:web:dd6e39e6ddf6f598aaf59e",
    measurementId: "G-MQMN7DQ36P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }