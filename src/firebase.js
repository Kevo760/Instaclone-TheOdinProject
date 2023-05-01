import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6r_4w_84T1ndbpAgbpBfnAGh7mM49y7A",
  authDomain: "instaclone-67a93.firebaseapp.com",
  projectId: "instaclone-67a93",
  storageBucket: "instaclone-67a93.appspot.com",
  messagingSenderId: "498726185474",
  appId: "1:498726185474:web:a2ca8e933cd9bbf9fb951b",
  measurementId: "G-5ETPPNB21W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
