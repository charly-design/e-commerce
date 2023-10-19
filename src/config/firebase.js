import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB3RuLnaamfRuTk0oPNmsqNypC2NNIjH20",
  authDomain: "bazaar-f294a.firebaseapp.com",
  projectId: "bazaar-f294a",
  storageBucket: "bazaar-f294a.appspot.com",
  messagingSenderId: "1072521785180",
  appId: "1:1072521785180:web:3875b0601767ea58a7db99",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
