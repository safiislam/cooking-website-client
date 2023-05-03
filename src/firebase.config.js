// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_APIKEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_APIKEY,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID

// apiKey: "AIzaSyBk6shNdiJlRWc1hxxINIDJwpGO8THBi70",
// authDomain: "cook-website.firebaseapp.com",
// projectId: "cook-website",
// storageBucket: "cook-website.appspot.com",
// messagingSenderId: "986270356734",
// appId: "1:986270356734:web:90d2458d01069b684f01af",
