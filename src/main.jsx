import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login.jsx";
import SnippetWrapper from "./components/Wrapper.jsx";
import CodeEditor from "./components/CodeEditor.jsx";
import AddSnippet from "./components/AddSnippet.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Signup from "./components/signup.jsx";
import LandingPage from "./LandingPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
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
    {
        path: "*",
        element: <ErrorPage missingSnippet={false} />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
