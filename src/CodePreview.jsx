import hljs from "./requiredHighlights";
import "./styles/CodePreview.css";
import Editor from "react-simple-code-editor";
import { useState } from "react";
import "highlight.js/styles/base16/material-darker.css";

function CodeInput({ code }) {
    console.log(hljs.listLanguages());
    const [userCode, setUserCode] = useState("");

    return (
        <>
            <div className="editor">
                <Editor
                    value={userCode}
                    onValueChange={(userCode) => setUserCode(userCode)}
                    highlight={(userCode) => hljs.highlightAuto(userCode).value}
                    padding={10}
                    tabSize={4}
                />
            </div>
        </>
    );
}

export default CodeInput;
