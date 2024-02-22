import hljs from "./requiredHighlights";
import "./styles/CodeEditor.css";
import Editor from "react-simple-code-editor";
import { useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "highlight.js/styles/base16/material-darker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styled from "styled-components";

export default function CodeEditor({
    visibleSnippetObj,
    setVisibleSnippetObj,
    editSnippet,
}) {
    console.log(visibleSnippetObj);
    const [userCode, setUserCode] = useState("console.log('ok man!')");

    return (
        <>
            <div className="editor-wrapper">
                <div className="headerTop">
                    <FontAwesomeIcon icon={faChevronLeft} title="Go back" />
                    <input
                        type="text"
                        value={visibleSnippetObj.title}
                        onChange={(e) => {
                            setVisibleSnippetObj("title", e.target.value);
                        }}
                    />
                </div>
                <p>
                    Created On:{" "}
                    {new Date(visibleSnippetObj.createdAt).toLocaleString()}
                </p>
                <div className="editor">
                    <Editor
                        value={visibleSnippetObj.content}
                        onValueChange={(content) =>
                            setVisibleSnippetObj("content", content)
                        }
                        highlight={(userCode) =>
                            hljs.highlightAuto(userCode).value
                        }
                        padding={10}
                        tabSize={4}
                    />
                </div>
                <div className="btns">
                    <button
                        type="button"
                        className="cancel"
                        onClick={() => {
                            setVisibleSnippetObj("cancel", "");
                        }}
                    >
                        Cancel Changes
                    </button>
                    <button type="button" className="save">
                        Save Changes
                    </button>
                </div>
            </div>
        </>
    );
}
