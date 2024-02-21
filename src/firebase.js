import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCICXjK4sqoHl21q3Dpu4tSzJQq_Kb3hbQ",
    authDomain: "snippet-sphere.firebaseapp.com",
    projectId: "snippet-sphere",
    storageBucket: "snippet-sphere.appspot.com",
    messagingSenderId: "721094457461",
    appId: "1:721094457461:web:873fcdbc5c1c7c83a5a03c",
    measurementId: "G-X82RLXX6DC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
