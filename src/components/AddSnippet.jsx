import hljs from "../requiredHighlights";
import styles from "../styles/codeEditor.module.css";
import "highlight.js/styles/base16/material-darker.css";
import firebaseConfig from "../firebase";
import { Loading } from "./Wrapper";
import { SelectLanguage, TogglePublic, SaveBtns } from "./CodeEditor";

import { Alert } from "antd";
import Editor from "react-simple-code-editor";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronLeft, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AddSnippet() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("Untitled Snippet");
    const [userCode, setUserCode] = useState("");
    const createdAt = new Date().toLocaleString();
    const [isPublic, setIsPublic] = useState(true);
    const [language, setLanguage] = useState("auto");
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [copyIcon, setCopyIcon] = useState(faCopy);

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [user] = useAuthState(auth);

    function highlightWithLanguage(code) {
        if (language === "auto") {
            return hljs.highlightAuto(code).value;
        } else {
            return hljs.highlight(code, { language: language }).value;
        }
    }

    async function addNewSnippet() {
        try {
            const docRef = await addDoc(collection(db, "snippets"), {
                title: title,
                createdAt: serverTimestamp(),
                isPublic: isPublic,
                language: language,
                content: userCode,
                uid: user.uid,
            });
            navigator.clipboard.writeText(document.location.origin +"/" + docRef.id);
            setShowSuccess(true);
            navigate("/snippets");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {loading && <Loading />}
            {showSuccess && <Alert message="Saved Successfully!" type="success" showIcon />}
            {user ? (
                <div className={styles.editorWrapper}>
                    <div className={styles.headerTop}>
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            title="Go back"
                            onClick={() => {
                                navigate(-1);
                            }}
                        />
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <p>Created On: {createdAt}</p>
                    {user !== null && (
                        <TogglePublic
                            isPublic={isPublic}
                            setIsPublic={() => {
                                setIsPublic(!isPublic);
                            }}
                        />
                    )}
                    <div className={styles.configs}>
                        {user !== null && (
                            <SelectLanguage
                                setLanguage={(value) => {
                                    setLanguage(value);
                                }}
                                lang={language}
                            />
                        )}
                        <FontAwesomeIcon
                            icon={copyIcon}
                            className={styles.copyIcon}
                            title="Copy snippet to clipboard"
                            onClick={() => {
                                navigator.clipboard.writeText(userCode);
                                setCopyIcon(faCheck);
                                setTimeout(() => {
                                    setCopyIcon(faCopy);
                                }, 1500);
                            }}
                        />
                    </div>
                    <div className={styles.editor}>
                        <Editor
                            disabled={user === null}
                            value={userCode}
                            onValueChange={(code) => setUserCode(code)}
                            highlight={highlightWithLanguage}
                            padding={10}
                            tabSize={4}
                        />
                    </div>
                    {user && (
                        <SaveBtns
                            setSnippet={() => {
                                setLoading(true);
                                addNewSnippet();
                            }}
                            goBack={() => {
                                navigate(-1);
                            }}
                        />
                    )}
                </div>
            ) : (
                navigate("/login")
            )}
        </>
    );
}
