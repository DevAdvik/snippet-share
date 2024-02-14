import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx';
import CodeInput from "./CodePreview.jsx";
import "./styles/index.css";
// import CodeBlock from './CodeHighlight.jsx';

const code = `
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import "./styles/CodePreview.css";

function CodeInput({ code }) {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("pre code").forEach((el) => {
            hljs.highlightElement(el);
        });
    });
    console.log(hljs.listLanguages());

    // className="language-javascript";
	// Ok man, a comment
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
    `;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <CodeInput code={code} />
    </React.StrictMode>
);
