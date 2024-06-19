import { initializeApp } from "firebase/app";

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

export { app };