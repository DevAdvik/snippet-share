import Snippet from "./Snippet";
import "../styles/Wrapper.css";
import { useEffect, useState } from "react";
import firebaseConfig from "../firebase";
import {
    collection,
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
    const [currentSnippets, setCurrentSnippets] = useState([]);
    const [userSearch, setUserSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "My Snippets: Snippet Sphere";
    }, []);

    useEffect(() => {
        async function fetchData() {
            if (user) {
                const response = await getSnippets(user.uid);
                setAllSnippets(response);
                setCurrentSnippets(response);
                setLoading(false);
            }
        }
        fetchData();
    }, [user]);

    useEffect(() => {
        if (!allSnippets.length) {
            return;
        }
        const filtered = allSnippets.filter((snippet) => {
            return (snippet.title.toLowerCase().includes(userSearch.toLowerCase()) ||
                snippet.content.toLowerCase().includes(userSearch.toLowerCase()));
        });
        setCurrentSnippets(filtered);

    }, [userSearch]);

    return (
        <>
            {loading && <Loading />}
            <Snippet allSnippets={currentSnippets} searchValue={userSearch} setSearchValue={setUserSearch} />
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
            <div className="loadingIcon">
                <div className="loadingSpinner"></div>
            </div>
        </>
    );
}
