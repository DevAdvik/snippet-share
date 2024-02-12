import { useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/base16/hardcore.css';


function CodeInput() {
    const [inputCode, setInputCode] = useState("");
    const handleCodeInput = ev => {
        setInputCode(ev.target.value);
        const elements = document.querySelectorAll("pre code");
        elements.forEach(hljs.highlightBlock);
    }


    return (
        <>
            <div className="editCode">
                <textarea name="userCode" value={inputCode} onChange={handleCodeInput}></textarea>
                <button type='button'>Cancel</button>
                <button type="button">Save</button>
            </div>
            <div className="preview">
                <pre>
                    <code>
                        {inputCode}
                    </code>
                </pre>
            </div>
        </>
    )
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CodeInput />
    </StrictMode>
)