import { useState } from 'react';

import './App.css';
import rules from './rules';

const applyMarkdownRules = (input) => {
    rules.forEach(rule => {
        input = input.replace(rule[0], rule[1]);
    });
    return input;
}

function App() {
    const [userInput, setUserInput] = useState("");
    const [markdownpreview, setMarkdownPreview] = useState("");

    const handleInput = ev => {
        const newUserInput = (ev.target.value);
        setUserInput(newUserInput);
        setMarkdownPreview(applyMarkdownRules(newUserInput));
    }

    return (
        <>
            <label htmlFor="userInput">Enter markdown headers: </label>
            <textarea type="text" id='userInput' onChange={handleInput} value={userInput}> </textarea>
            <br />
            <div>Output: </div>
            <div dangerouslySetInnerHTML={{ __html: markdownpreview }}></div>
        </>
    )
}

export default App;
