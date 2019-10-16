import React from "react";
import logo from "../images/logo.png";
import logoDark from "../images/logo-dark.png";

function Logo(props) {
  return (
    <div className="logo">
      <img src={props.isDarkMode ? logoDark : logo} alt="Logo" />
    </div>
  );
}

export default Logo;
