import Snippet from "./Snippet";
import CodeEditor from "../CodeEditor";
import "../styles/Wrapper.css";
import { useEffect, useState } from "react";
// import { auth, firestore } from "../firebase";
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
const auth = getAuth(app);
const firestore = getFirestore(app);

export default function SnippetWrapper() {
    const [allSnippets, setAllSnippets] = useState([]);
    const [selectedSnippet, setSelectedSnippet] = useState({});
    const [currentSnippetObj, setCurrentSnippetObj] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        document.title = "My Snippets: Snippet Sphere";
    }, []);

    const showWhat = (data) => {
        console.log(data);
    };

    const editSnippetObjFromEditor = (dataType, data) => {
        console.log(dataType, data);
    };

    useEffect(() => {
        async function fetchData() {
            const response = await getSnippets(user.uid);
            console.log(response);
            setAllSnippets(response);
        }
        fetchData();
    }, [user]);

    useEffect(() => {
        if (selectedSnippet == {}) {
            console.log("I'm returning brother");
            return;
        }
        const selectedSnippetObj = allSnippets.find((snippet) => {
            return snippet.id === selectedSnippet;
        });
        setCurrentSnippetObj(selectedSnippetObj);
    }, [selectedSnippet, allSnippets]);

    return (
        <>
            {selectedSnippet === {} ? (
                <CodeEditor
                    visibleSnippetObj={currentSnippetObj}
                    setVisibleSnippetObj={editSnippetObjFromEditor}
                />
            ) : (
                <Snippet
                    allSnippets={allSnippets}
                    showSnippet={(id) => {
                        // setSelectedSnippet(id);
                        console.log("Selected changed!", id);
                    }}
                />
            )}
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
            title: "Test Snippet",
            content: data.content,
            isPublic: true,
            createdAt: new Date(data.createdAt.seconds * 1000),
        });
    });
    return dummyArray;
}
