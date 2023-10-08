import React, { useState } from "react";
import "./inputAdmin.css";
import "../../index.css";
import admin from "../../api/admin.ts";
import validator from 'validator'

function InputAdmin() {
  const [url, setUrl] = useState("");
  const [urlArray, setUrlArray] = useState([]);

  const handleAddClick = () => {
    if (url.trim() !== "") {
      if(validator.isURL(url) === false){
        alert("Please enter a valid url")
        return;
      }
      setUrlArray([...urlArray, url]);
      setUrl("");
    }
  };

  const handleFetchClick = async () => {
    const res = await admin.fetch(urlArray)
    if(res.status === 200){
      console.log(res)
      alert(res.data.message)
    }
  }

  return (
    <>
      <div className="search-area container">
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
            Add Url
          </button>
          <button className="fetch" onClick={handleFetchClick}>
            Fetch
          </button>
        </div>
        <div>
          {urlArray.length > 0 && (
            <UrlsContainer urls={urlArray} />
          )}
        </div>
          
      </div>
    </>
  );
}
const UrlsContainer = ({ urls }) => {
  const uniqueUrls = new Set(urls);
  const uniqueUrlsArray = Array.from(uniqueUrls);
  return (
    <div className="urls-container">
      <h2>Crowled URLs:</h2>
      <ul>
        {uniqueUrlsArray.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputAdmin;
