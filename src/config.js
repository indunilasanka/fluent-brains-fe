import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_opHa6a2G5XP3zciZjkdiWBCbQfrccgk",
  authDomain: "fluent-brain-test.firebaseapp.com",
  projectId: "fluent-brain-test",
  storageBucket: "fluent-brain-test.appspot.com",
  messagingSenderId: "909402625302",
  appId: "1:909402625302:web:6ed7ccdebac283f5cd2c37",
};

const app = Firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();
