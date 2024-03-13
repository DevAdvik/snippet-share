import styles from "../styles/Snippet.module.css";
import logo from "../assets/SnippetSphere-vector.svg";
import { Alert } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMagnifyingGlass, faUser, faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import firebaseConfig from "../firebase";
import Login from "./login";
import { useEffect, useState } from "react";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SnippetList({ allSnippets, searchValue, setSearchValue }) {
    const [user] = useAuthState(auth);
    const [showCopySuccess, setShowCopySuccess] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            setShowCopySuccess(false);
        }, 2500);
    }, [showCopySuccess]);

    if (!user) {
        console.log("brother log in brother");
        return navigate("/login");
    }

    const copyShareLink = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        console.log(ev.target.closest("a"));
        navigator.clipboard.writeText(ev.target.closest("a"));
        setShowCopySuccess(true);
    };

    return (
        <>
            {user ? (
                <div className={styles.snippetBg}>
                    <div className={styles.snippetWrapper}>
                        {showCopySuccess && (
                            <Alert
                                message="Link copied!"
                                type="success"
                                showIcon
                                closable
                                className={styles.linkCopyMessage}
                            />
                        )}

                        <Header
                            addSnippet={() => {
                                navigate("/newSnippet");
                            }}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                        />
                        <div className={styles.snippetList}>
                            {allSnippets.map((snippet) => {
                                return (
                                    <Tilt
                                        key={snippet.id}
                                        className={styles.parallaxTilt}
                                        glareEnable={true}
                                        glareMaxOpacity={0.4}
                                        glareBorderRadius="10px"
                                        tiltMaxAngleX={10}
                                        tiltMaxAngleY={10}
                                        glareColor="lightblue"
                                        tiltReverse={true}
                                    >
                                        <Link to={snippet.id} key={snippet.id}>
                                            <div className={styles.singleSnippet} key={snippet.id}>
                                                <h2
                                                    className={`${styles.limitLines} ${styles.limit2}`}
                                                >
                                                    {snippet.title}
                                                    <FontAwesomeIcon
                                                        icon={faLink}
                                                        className={styles.copyLink}
                                                        onClick={copyShareLink}
                                                        title="Copy share link"
                                                    />
                                                </h2>
                                                <p
                                                    className={`${styles.limitLines} ${styles.limit3}`}
                                                >
                                                    {snippet.content}
                                                </p>
                                                <p>
                                                    Created on:{" "}
                                                    {new Date(snippet.createdAt).toLocaleString()}
                                                </p>
                                            </div>
                                        </Link>
                                    </Tilt>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <Login />
            )}
        </>
    );
}

function Header({ addSnippet, searchValue, setSearchValue }) {
    if (!addSnippet) {
        return <h1>My Snippets V2.</h1>;
    }
    return (
        <>
            <div className={styles.topHeader}>
                <h1 title="Sharing Brilliance, One Snippet at a time!">
                    <img src={logo} alt="Logo " width="80px" />
                    <span>Snippet Sphere</span>
                </h1>
                <div className={styles.reactIcons}>
                    <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                    <FontAwesomeIcon icon={faPlus} title="Add new snippet!" onClick={addSnippet} />
                </div>
            </div>
        </>
    );
}

function Search({ searchValue, setSearchValue }) {
    const handleUserInput = (ev) => {
        setSearchValue(ev.target.value);
    };
    return (
        <div className={styles.searchBox}>
            <button className={styles.btnSearch} tabIndex={1}>
                <FontAwesomeIcon icon={faMagnifyingGlass} title="Search Snippets" />
            </button>
            <input
                type="text"
                name="search"
                className={styles.inputSearch}
                placeholder="Search snippets"
                value={searchValue}
                onChange={handleUserInput}
            />
        </div>
    );
}
