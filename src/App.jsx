import firebaseConfig from "./firebase";
import "./styles/index.css";
import SnippetPage from "./components/SnippetTest";
import SnippetWrapper from "./components/Wrapper";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";

function App() {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <>
            <div className="wrapper">
                {user ? <SnippetWrapper /> : <SignIn />}
                {user && <button onClick={logout}>Log out</button>}
            </div>
        </>
    );
}

function SignIn() {
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

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            const user = result.user;
            addToUsersCollection(user);
        });
    };
    return (
        <>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </>
    );
}

function Snippet() {
    const [newSnippet, setNewSnippet] = useState("");
    const [allSnippets, setAllSnippets] = useState([]);
    const [visibleSnippet, setVisibleSnippet] = useState({});
    const { uid } = auth.currentUser;

    // const addToDOM = async () => {
    //     if (!newSnippet.trim()) {
    //         return;
    //     }
    //     const docRef = await addDoc(collection(firestore, "snippets"), {
    //         uid,
    //         title: "Test Snippet",
    //         content: newSnippet.trim(),
    //         createdAt: serverTimestamp(),
    //         isPublic: true,
    //     });
    //     setAllSnippets([
    //         ...allSnippets,
    //         {
    //             id: docRef.id,
    //             title: "Test Snippet",
    //             content: newSnippet.trim(),
    //             createdAt: new Date(),
    //             isPublic: true,
    //         },
    //     ]);
    //     setNewSnippet("");
    // };

    const getSnippets = async () => {
        const q = query(
            collection(firestore, "snippets"),
            where("uid", "==", uid)
        );
        const querySnapshot = await getDocs(q);
        const dummyArray = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            dummyArray.push({
                id: doc.id,
                title: "Test Snippet",
                content: data.content,
                isPublic: true,
                createdAt: new Date(data.createdAt.seconds * 1000),
            });
        });
        setAllSnippets(dummyArray);
    };

    useEffect(() => {
        console.log("Getting data from firebase");
        getSnippets();
        setVisibleSnippet(allSnippets[0]);
    }, []);

    const showSnippetById = (id) => {
        const snippetObj = allSnippets.find((obj) => {
            return obj.id == id;
        });
        setVisibleSnippet(snippetObj);
    };

    return (
        <>
            {/* <input
                type="text"
                placeholder="snippet"
                value={newSnippet}
                onChange={(ev) => {
                    setNewSnippet(ev.target.value);
                }}
            />
            <button onClick={addToDOM}>Add snippet</button>
            <ul>
                {allSnippets.map((snippet) => {
                    return <li key={snippet.id}>{snippet.title}</li>;
                })}
            </ul> */}
            <SnippetPage
                allSnippets={allSnippets}
                showSnippet={showSnippetById}
                currentObj={visibleSnippet}
            />
        </>
    );
}

export default App;
