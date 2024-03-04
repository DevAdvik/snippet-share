import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faMagnifyingGlass,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Snippet.css";
import logo from "../assets/SnippetSphere-white.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import firebaseConfig from "../firebase";
import Login from "./login";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SnippetList({ allSnippets }) {
    console.log(allSnippets);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    if (!user) {
        console.log("brother log in brother");
        return navigate("/login");
    }
    return (
        <>
            {user ? (
                <div className="snippetWrapper">
                    <Header addSnippet={12} />
                    <div className="snippetList">
                        {allSnippets.map((snippet) => {
                            return (
                                <Tilt
                                    key={snippet.id}
                                    className="parallax-tilt"
                                    glareEnable={true}
                                    glareMaxOpacity={0.4}
                                    glareBorderRadius="10px"
                                    tiltMaxAngleX={10}
                                    tiltMaxAngleY={10}
                                    glareColor="lightblue"
                                >
                                    <Link to={snippet.id} key={snippet.id}>
                                        <div
                                            className="singleSnippet"
                                            key={snippet.id}
                                        >
                                            <h2 className="limit-lines limit2">
                                                {snippet.title}
                                            </h2>
                                            <p className="limit-lines limit3">
                                                {snippet.content}
                                            </p>
                                            <p>
                                                Created on:{" "}
                                                {new Date(
                                                    snippet.createdAt
                                                ).toLocaleString()}
                                            </p>
                                        </div>
                                    </Link>
                                </Tilt>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <Login />
            )}
        </>
    );
}

function Header({ addSnippet }) {
    if (!addSnippet) {
        return <h1>My Snippets V2.</h1>;
    }
    return (
        <>
            <div className="topHeader">
                <h1 title="Sharing Brilliance, One Snippet at a time!">
                    <img src={logo} alt="Logo " width="50px" />
                    Snippet Sphere
                </h1>
                <div className="reactIcons">
                    <Search />
                    <FontAwesomeIcon icon={faPlus} title="Add new snippet!" />
                    <FontAwesomeIcon icon={faUser} title="Your Account" />
                </div>
            </div>
        </>
    );
}

function Search() {
    return (
        <div className="search-box">
            <button className="btn-search" tabIndex={1}>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    title="Search Snippets"
                    className="searchIcon"
                />
            </button>
            <input
                type="text"
                name="search"
                className="input-search"
                placeholder="Search snippets"
            />
        </div>
    );
}
