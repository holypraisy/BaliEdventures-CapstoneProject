// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoGkv4l3QASYr5WDT8BfNVgzF_MBfxrlQ",
  authDomain: "baliedventures.firebaseapp.com",
  projectId: "baliedventures",
  storageBucket: "baliedventures.appspot.com",
  messagingSenderId: "395069594384",
  appId: "1:395069594384:web:1aeded4e452037e7942395",
  measurementId: "G-YF7R74H5C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);