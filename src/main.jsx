import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CodeInput from "./components/CodeEditor.jsx";
// import "./styles/index.css";
import Homepage from "./Home.jsx";
import Login from "./components/login.jsx";
import SnippetWrapper from "./components/Wrapper.jsx";
import CodeEditor from "./components/CodeEditor.jsx";
import AddSnippet from "./components/AddSnippet.jsx";

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
    {
        path: "/newSnippet",
        element: <AddSnippet />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
