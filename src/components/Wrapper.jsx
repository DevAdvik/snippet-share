import SnippetList from "./SnippetList";
import "../styles/Wrapper.css";
import { useEffect, useState } from "react";
import { auth, firestore } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function SnippetWrapper() {
    const [allSnippets, setAllSnippets] = useState([]);
    const [visibleSnippet, setVisibleSnippet] = useState({});
    const { uid } = auth.currentUser;

    useEffect(() => {
        document.title = "My Snippets: Snippet Sphere";
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await getSnippets(uid);
            setAllSnippets(response);
            setVisibleSnippet(response[0]);
        }
        fetchData();
    }, []);

    return (
        <>
            <SnippetList
                allSnippets={allSnippets}
                showSnippet={visibleSnippet}
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
            title: "Test Snippet",
            content: data.content,
            isPublic: true,
            createdAt: new Date(data.createdAt.seconds * 1000),
        });
    });
    return dummyArray;
}
