import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import "../style/sidebar.css";

<FontAwesomeIcon icon="fa-regular fa-circle-xmark" />;

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [icon, setIcon] = useState(faBars);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIcon(isSidebarOpen ? faBars : faCircleXmark);
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button
          className="close-button"
          onClick={toggleSidebar}
          style={{ color: "white" }}
        >
          <FontAwesomeIcon icon={icon} />
        </button>
        <ul>
          <h4>links For Your Search</h4>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
          <li>Link 6</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
