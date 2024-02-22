import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CodeInput from "./CodeEditor.jsx";
// import "./styles/index.css";
import Homepage from "./Home.jsx";
import Login from "./components/login.jsx";
import SnippetWrapper from "./components/Wrapper.jsx";
import CodeEditor from "./CodeEditor.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/code",
        element: <CodeInput />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/snippets",
        element: <SnippetWrapper />,
    },
    {
        path: "/snippets/:snippetId",
        element: <CodeEditor />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
