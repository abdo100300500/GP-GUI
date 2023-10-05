import React, { useState } from "react";
import "./input.css";

function Input() {
  const [url, setUrl] = useState("");
  const [urlArray, setUrlArray] = useState([]); 


  const handleAddClick = () => {
    if (url.trim() !== "") {
      setUrlArray([...urlArray, url]);
      setUrl(""); 
    }
  };

  const handleFetchClick = () => {
    console.log(urlArray);
  };

  return (
    <>
      <div className="search-area">
        <div className="input">
          <label htmlFor="url-input">Enter Url : </label>
          <input
            type="url"
            id="url-input"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button className="add" onClick={handleAddClick}>
            Add More
          </button>
          <button className="fetch" onClick={handleFetchClick}>
            Fetch
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;

