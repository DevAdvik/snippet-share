import Snippet from "./Snippet";
import "../styles/Wrapper.css";
import { useEffect, useState } from "react";
import firebaseConfig from "../firebase";
import {
    collection,
    doc,
    getDocs,
    query,
    where,
    getFirestore,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export default function SnippetWrapper() {
    const [user] = useAuthState(auth);
    const [allSnippets, setAllSnippets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "My Snippets: Snippet Sphere";
    }, []);

    useEffect(() => {
        async function fetchData() {
            if (user) {
                const response = await getSnippets(user.uid);
                setAllSnippets(response);
                setLoading(false);
            }
        }
        fetchData();
    }, [user]);

    // useEffect(() => {
    //     console.log(visibleSnippetRef.current);
    //     if (visibleSnippetRef.current === "no-click") {
    //         console.log("visible snippet still 'no-click'");
    //         return;
    //     }
    //     const selectedSnippetObj = allSnippets.find((snippet) => {
    //         return snippet.id === visibleSnippetRef.current;
    //     });
    //     setCurrentSnippetObj(selectedSnippetObj);

    //     return () => {
    //         setCurrentSnippetObj({});
    //     };
    // }, [allSnippets]);

    return (
        <>
            {loading && <Loading />}
            <Snippet
                allSnippets={allSnippets}
                showSnippet={(id) => {
                    console.log("Snippet clicked");
                }}
            />
        </>
    );
}

async function getSnippets(uid) {
    const q = query(collection(firestore, "snippets"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const dummyArray = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        dummyArray.push({
            id: doc.id,
            title: data.title,
            content: data.content,
            isPublic: data.isPublic,
            createdAt: new Date(data.createdAt.seconds * 1000),
            uid: data.uid,
        });
    });
    return dummyArray;
}

export function Loading() {
    return (
        <>
            <div className="loadingIcon"></div>
        </>
    );
}
