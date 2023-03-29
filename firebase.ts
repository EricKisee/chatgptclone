// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7ttFjWPtOYo6I0TrK5pclFfd8d8jm7pc",
  authDomain: "chatgpt-messenger-79a23.firebaseapp.com",
  projectId: "chatgpt-messenger-79a23",
  storageBucket: "chatgpt-messenger-79a23.appspot.com",
  messagingSenderId: "577275563061",
  appId: "1:577275563061:web:c1f84db61708f825e1357c",
  measurementId: "G-NPG1KSS81T"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export{ db }