import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiX7TsdY9m9AULHSVrvVp4MVX9VoH9j-U",
    authDomain: "fluent-brains.firebaseapp.com",
    databaseURL: "https://fluent-brains-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fluent-brains",
    storageBucket: "fluent-brains.appspot.com",
    messagingSenderId: "954494391499",
    appId: "1:954494391499:web:3daf9991c44c31a9bb774e",
    measurementId: "G-0R29NGWJKR"
};

const app = Firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();
