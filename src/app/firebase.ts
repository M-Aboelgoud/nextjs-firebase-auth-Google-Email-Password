import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpBZx8GvYIAHbNPatVr5wcjceSuW-q6G8",
  authDomain: "nancy-web-app.firebaseapp.com",
  projectId: "nancy-web-app",
  storageBucket: "nancy-web-app.appspot.com",
  messagingSenderId: "169927366342",
  appId: "1:169927366342:web:4bf468ddca45fb955429c7",
  measurementId: "G-J7NDY9MWBX"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }