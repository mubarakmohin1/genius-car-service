// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL0gi0GTnM1VWim9TX_8aTecLQwCdNTUo",
  authDomain: "genius-car-service-e3357.firebaseapp.com",
  projectId: "genius-car-service-e3357",
  storageBucket: "genius-car-service-e3357.appspot.com",
  messagingSenderId: "550561683533",
  appId: "1:550561683533:web:7d91a50b3ead4a9b91a404"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;