import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx';
import CodeInput from "./CodePreview.jsx";
import "./styles/index.css";

const code = `
import hljs from "./requiredHighlights";
import "highlight.js/styles/base16/material-darker.css";
import "./styles/CodePreview.css";

function CodeInput({ code }) {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("pre code").forEach((el) => {
            hljs.highlightElement(el);
        });
    });

    // console.log(hljs.listLanguages());

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
    `;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <CodeInput code={code} />
    </React.StrictMode>
);
