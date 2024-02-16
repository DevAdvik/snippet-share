import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CodeInput from "./CodePreview.jsx";
import "./styles/index.css";
import App from "./App.jsx";
import Homepage from "./Home.jsx";
import Wrapper from "./body/Wrapper.jsx";

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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/code",
        element: <CodeInput code={code} />,
    },
    {
        path: '/app',
        element: <App />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <CodeInput code={code} /> */}
        <Wrapper></Wrapper>

        <RouterProvider router={router} />
    </React.StrictMode>
);
