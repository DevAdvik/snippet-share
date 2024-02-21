export default function SnippetPage({ allSnippets, showSnippet, currentObj }) {
    return (
        <>
            <SnippetList allSnippets={allSnippets} showSnippet={showSnippet} />
            <SnippetContent snippetObj={currentObj} />
        </>
    );
}

function SnippetList({ allSnippets, showSnippet }) {
    return (
        <>
            <ul>
                {console.log(allSnippets)}
                {allSnippets.map((snippetObj) => {
                    return (
                        <li
                            key={snippetObj.id}
                            onClick={() => showSnippet(snippetObj.id)}
                        >
                            {snippetObj.title}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

function SnippetContent({ snippetObj }) {
    if (!snippetObj) {
        return;
    }
    return (
        <>
            <h1>{snippetObj.title}</h1>
            <p>Created on: {new Date(snippetObj.createdAt).toLocaleString()}</p>
            <p>Public Link: </p>
            <input type="checkbox" checked={snippetObj.isPublic} />
            <pre>
                <code>{snippetObj.content}</code>
            </pre>
        </>
    );
}
