import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleOnChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };

  const handleOnclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  };

  const handleOnlo = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  };

  const clearText = () => {
    setText("");
    props.showAlert("Cleared text", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success");
  };

  const handleSpaces = () => {
    let newText = text.trim().replace(/\s+/g, ' ');
    setText(newText);
    props.showAlert("Removed Extra Spaces", "success");
  };

  const words = text.trim().split(/\s+/);
  const filteredWords = words.filter(word => word.length > 0);
  const wordCount = filteredWords.length;

  return (
    <>
      <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h1 className='my-2'>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'light'} mx-2`} onClick={handleOnclick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'light'} mx-2`} onClick={handleOnlo}>
          Convert to LowerCase
        </button>
        <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'light'} mx-2`} onClick={clearText}>
          Clear Text
        </button>
        <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'light'} mx-2`} onClick={handleCopy}>
          Copy Text
        </button>
        <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'light'} mx-2`} onClick={handleSpaces}>
          Remove Extra Spaces
        </button>

        <div className="container">
          <h1>Your Summary here</h1>
          <p>{wordCount} words and {text.length} characters</p>
        </div>
      </div>
    </>
  );
}