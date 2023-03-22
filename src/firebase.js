import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC2j6lQ9z_v45DQYadvNmslmIaPMf8W5WQ",
  authDomain: "chat-4cb48.firebaseapp.com",
  projectId: "chat-4cb48",
  storageBucket: "chat-4cb48.appspot.com",
  messagingSenderId: "458110589750",
  appId: "1:458110589750:web:1e5c21214248b4ba8eb197"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =  getAuth()
export const storage = getStorage()
export const db = getFirestore(app)