import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

function Nav(props) {
  const theme = useContext(ThemeContext);
  return (
    // <nav className={`nav${props.isDarkMode ? "_dark" : ""}`}>
    <nav className={`nav${theme.darkMode ? "_dark" : ""}`}>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
    </nav>
  );
}

export default Nav;
