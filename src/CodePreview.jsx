import hljs from "highlight.js/lib/common";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import "./styles/CodeHighlight.css";

function CodeInput({ code }) {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("pre code").forEach((el) => {
            hljs.highlightElement(el);
        });
    });
    console.log(hljs.listLanguages());

    // className="language-javascript"
    return (
        <>
            <div className="preview">
                <pre>
                    <code>{code}</code>
                </pre>
            </div>
        </>
    );
}

export default CodeInput;
