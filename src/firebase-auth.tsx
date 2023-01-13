// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBDYg2I2FpdVLofCt1TeUeFQm7sDG_maOQ",
  authDomain: "wadi-api.firebaseapp.com",
  projectId: "wadi-api",
  storageBucket: "wadi-api.appspot.com",
  messagingSenderId: "76602649751",
  appId: "1:76602649751:web:dcbea43c2db4ff52950dd2",
  measurementId: "G-117BQE19C4"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
