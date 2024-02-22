import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faMagnifyingGlass,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Snippet.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../firebase";
import Login from "./login";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SnippetList({ allSnippets }) {
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
                <h1>Snippet Sphere</h1>
                <div className="reactIcons">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        title="Search Snippets"
                    />
                    <FontAwesomeIcon icon={faPlus} title="Add new snippet!" />
                    <FontAwesomeIcon icon={faUser} title="Your Account" />
                </div>
            </div>
        </>
    );
}
