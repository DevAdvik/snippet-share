import firebaseConfig from "../firebase";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import {
    doc,
    getDoc,
    getFirestore,
    serverTimestamp,
    setDoc,
    updateDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

export function SignInWithGoogle() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            const user = result.user;
            addToUsersCollection(user);
        });
    };
    return (
        <button className="googleBtn" onClick={signInWithGoogle}>
            Sign In With Google
        </button>
    );
}

export function SignInWithEmail() {
    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                const user = result.user;
                addToUsersCollection(user);
            }
        );
    };
    return (
        <button type="button" onClick={signInWithEmail}>
            Log In
        </button>
    );
}

export function SignUpWithEmail() {
    const signUpWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                const user = result.user;
                addToUsersCollection(user);
            }
        );
    };
    return (
        <button type="button" onClick={signUpWithEmail}>
            Sign Up
        </button>
    );
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
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
