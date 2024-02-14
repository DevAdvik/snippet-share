import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx';
import CodeInput from "./CodeHighlight.jsx";
import "./styles/index.css";
// import CodeBlock from './CodeHighlight.jsx';

const code = `
    const heyman = 'hi';
    function saySomething() {
        return "OK!OK!OK!";
    }
    `;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <CodeInput code={code} />
    </React.StrictMode>
);
