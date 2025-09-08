// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEG5KuSPQsTWzYoESxL3c4wahgc57hbj8",
  authDomain: "app-contact-9901c.firebaseapp.com",
  projectId: "app-contact-9901c",
  storageBucket: "app-contact-9901c.firebasestorage.app",
  messagingSenderId: "372135908971",
  appId: "1:372135908971:web:5088f91be8fcefa93d432e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);