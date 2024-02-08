import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState("");
  const [markdownpreview, setMarkdownPreview] = useState("");

  const handleInput = ev => {
    const newUserInput = (ev.target.value);
    setUserInput(newUserInput)
    setMarkdownPreview(newUserInput.replace(/#{3}\s([^\n]+)?/g, "<h3>$1</h3>"));
  }

  return (
    <>
      <label htmlFor="userInput">Enter markdown headers: </label>
      <input type="text" id='userInput' onChange={handleInput} value={userInput} />
      <br />
      <div>Output: <br /> {markdownpreview}</div>
    </>
  )
}

export default App;
