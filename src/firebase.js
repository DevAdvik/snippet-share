import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
