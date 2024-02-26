import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./styles/index.css";
import Homepage from "./Home.jsx";
import Login from "./components/login.jsx";
import SnippetWrapper from "./components/Wrapper.jsx";
import CodeEditor from "./components/CodeEditor.jsx";
import AddSnippet from "./components/AddSnippet.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
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
        errorElement: <ErrorPage />,
    },
    {
        path: "/newSnippet",
        element: <AddSnippet />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
