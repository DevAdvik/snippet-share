import firebaseConfig from "../firebase";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, getFirestore, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        addToUsersCollection(user);
    } catch (error) {
        console.log("Oops!");
    }
};

export const signInWithEmail = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;
        addToUsersCollection(user);
    } catch (error) {
        console.log(error.code);
        throw error;
    }
};

export const signUpWithEmail = async (email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;
        addToUsersCollection(user);
    } catch (error) {
        console.log("Oops!");
    }
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const firestore = getFirestore(app);

const addToUsersCollection = async (user) => {
    const displayName = user.displayName;
    const email = user.email;
    const userid = user.reloadUserInfo.localId;
    const userImg = user.photoURL;
    const userDocRef = doc(firestore, "users", userid);
    const docSnapshot = await getDoc(userDocRef);
    if (!docSnapshot.exists()) {
        await setDoc(userDocRef, {
            displayName,
            email,
            userid,
            userImg,
            createdAt: serverTimestamp(),
        });
    } else {
        await updateDoc(userDocRef, { displayName, email, userImg });
    }
};
