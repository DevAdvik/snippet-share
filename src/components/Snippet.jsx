import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faMagnifyingGlass,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Snippet.css";
import { Link } from "react-router-dom";

export default function SnippetList({ allSnippets, showSnippet }) {
    return (
        <>
            <div className="snippetWrapper">
                <Header addSnippet={12} />
                <div className="snippetList">
                    {allSnippets.map((snippet) => {
                        return (
                            <Link to={snippet.id} key={snippet.id}>
                                <div
                                    className="singleSnippet"
                                    key={snippet.id}
                                    onClick={() => showSnippet(snippet.id)}
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
