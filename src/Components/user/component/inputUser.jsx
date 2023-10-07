// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./inputUser.css";

// function InputUser() {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <>
//       <div className="search-area">
//         <div className="input">
//           <label htmlFor="url-input">Enter Query : </label>
//           <input
//             type="text"
//             id="url-input"
//             placeholder="anything you need"
//             value={inputValue}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="buttons">
//           <Link to={`/user/search/${inputValue}`}>
//             <button className="search">Search</button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default InputUser;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/inputUser.css";

function InputUser() {
  const [inputValue, setInputValue] = useState("");
  const [warning, setWarning] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setWarning("");
  };

  const searchLink =
    inputValue.trim() === "" ? "#" : `/user/search/${inputValue}`;

  return (
    <>
      <div className="search-area">
        <div className="input">
          <label htmlFor="url-input">Enter Query : </label>
          <input
            type="text"
            id="url-input"
            placeholder="anything you need"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="buttons">
          <Link to={searchLink}>
            <button className="search">Search</button>
          </Link>
          <p className="warning">{warning}</p>
        </div>
      </div>
    </>
  );
}

export default InputUser;
