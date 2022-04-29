// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2cmvgC-mwMKp9g6_ryF17ObsNGgumu4U",
  authDomain: "my-asignment.firebaseapp.com",
  projectId: "my-asignment",
  storageBucket: "my-asignment.appspot.com",
  messagingSenderId: "969142526155",
  appId: "1:969142526155:web:a30535e2a48ec9b76cfb4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;