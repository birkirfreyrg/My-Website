import React from "react";
import "../styles/Info.css";

function Info() {
  return (
    <div className="info-container">
      <div className="info">
        <p className="quick-links">Gorilla Water</p>
        <a href="url">
          <p>About</p>
        </a>
        <a href="url">
          <p>Privacy policy</p>
        </a>
        <a href="url">
          <p>Contact us</p>
        </a>
      </div>
    </div>
  );
}

export default Info;
