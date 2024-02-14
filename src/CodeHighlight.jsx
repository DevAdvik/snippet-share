import hljs from "highlight.js/lib/common";
import "highlight.js/styles/base16/hardcore.css";
import "./styles/CodeHighlight.css";

function CodeInput({ code }) {
    // const [inputCode, setInputCode] = useState("");
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("pre code").forEach((el) => {
            hljs.highlightElement(el);
        });
    });

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
