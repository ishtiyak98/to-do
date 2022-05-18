// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArTuzTPPdb4TB1fcAhPSignRUqmHIT0us",
  authDomain: "to-do-54ee9.firebaseapp.com",
  projectId: "to-do-54ee9",
  storageBucket: "to-do-54ee9.appspot.com",
  messagingSenderId: "904185970805",
  appId: "1:904185970805:web:9e4a292e895faceef0b83c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;