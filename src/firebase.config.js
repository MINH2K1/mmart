import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA-dpAncHQavoFWvNy1X1bLtkHAmDeHkbg",
  authDomain: "maltimart-aaed0.firebaseapp.com",
  projectId: "maltimart-aaed0",
  storageBucket: "maltimart-aaed0.appspot.com",
  messagingSenderId: "406962794847",
  appId: "1:406962794847:web:c8f1f3744650ad1bcd46ea",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { app, db, storage, auth };
