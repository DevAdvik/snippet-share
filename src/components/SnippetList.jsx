import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/SnippetList.css";

export default function SnippetList({ allSnippets, showSnippet }) {
    return (
        <>
            <div className="leftWrapper">
                <Header addSnippet={12} />
                {allSnippets.map((snippet) => {
                    return (
                        <div
                            className="singleSnippet"
                            key={snippet.id}
                            onClick={showSnippet}
                        >
                            <h2 className="limit-lines limit2">
                                {snippet.title}
                            </h2>
                            <p className="limit-lines limit3">
                                {snippet.content}
                            </p>
                            <p>
                                Created on:{" "}
                                {new Date(snippet.createdAt).toLocaleString()}
                            </p>
                        </div>
                    );
                })}
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
            <h1>My Snippets</h1>
            <div className="addDiv">
                <h3>
                    <FontAwesomeIcon icon={faPlus} /> Add new snippet
                </h3>
            </div>
        </>
    );
}
