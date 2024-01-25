// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJmSODkOwKehKNjMT8yZExddPgiB64JCk",
  authDomain: "mineart-d6a87.firebaseapp.com",
  projectId: "mineart-d6a87",
  storageBucket: "mineart-d6a87.appspot.com",
  messagingSenderId: "625327163561",
  appId: "1:625327163561:web:9116d293bb6f84a5aa41b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const fireStorage = getStorage(app);