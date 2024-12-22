import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebaseConf from "../conf/firebase-conf.jsx"; // Import the firebaseConf

// Use the firebaseConf for configuration
const firebaseConfig = {
  apiKey: firebaseConf.FIREBASE_APIKEY,
  authDomain: firebaseConf.FIREBASE_AUTHDOMAIN,
  projectId: firebaseConf.FIREBASE_PROJECTID,
  storageBucket: firebaseConf.FIREBASE_STORAGEBUCKET,
  messagingSenderId: firebaseConf.FIREBASE_MESSAGINGSENDERID,
  appId: firebaseConf.FIREBASE_APPID,
  measurementId: firebaseConf.FIREBASE_MEASUREMENTID,
};
// console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Create an instance of GoogleAuthProvider
export const googleProvider = new GoogleAuthProvider();
