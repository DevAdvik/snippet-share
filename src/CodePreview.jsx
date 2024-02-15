import hljs from "./requiredHighlights";
import "highlight.js/styles/base16/material-darker.css";
import "./styles/CodePreview.css";

function CodeInput({ code }) {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("pre code").forEach((el) => {
            hljs.highlightElement(el);
        });
    });

    const reRenderHighlight = (e) => {
        console.log(e.target.dataset.highlighted);
    };

    // console.log(hljs.listLanguages());

    return (
        <>
            <div className="preview">
                <pre>
                    <code
                        onClick={(e) => {
                            reRenderHighlight(e);
                        }}
                    >
                        {code}
                    </code>
                </pre>
            </div>
        </>
    );
}

export default CodeInput;
