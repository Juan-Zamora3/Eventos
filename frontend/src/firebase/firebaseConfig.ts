import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD5XYXktEXkXBc_bGheeLzaWDp9jYoIu_4",
  authDomain: "gestoreventositspp.firebaseapp.com",
  databaseURL: "https://gestoreventositspp-default-rtdb.firebaseio.com",
  projectId: "gestoreventositspp",
  storageBucket: "gestoreventositspp.firebasestorage.app",
  messagingSenderId: "836067423932",
  appId: "1:836067423932:web:a45900e8f890d6a9b482b9",
  measurementId: "G-RJWDDK3VVX",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export let analytics: ReturnType<typeof getAnalytics> | null = null;
isSupported().then((ok) => {
  if (ok) {
    analytics = getAnalytics(app);
  }
});
