import React from "react";

function Nav(props) {
  return (
    <nav className={`nav${props.isDarkMode ? "_dark" : ""}`}>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
    </nav>
  );
}

export default Nav;
