import React, { useContext } from "react";
import { ThemeContext } from "../contexts";
import logo from "../images/logo.png";
import logoDark from "../images/logo-dark.png";

function Logo(props) {
  const theme = useContext(ThemeContext);
  return (
    <div className="logo">
      {/* <img src={props.isDarkMode ? logoDark : logo} alt="Logo" /> */}
      <img src={theme.darkMode ? logoDark : logo} alt="Logo" />
    </div>
  );
}

export default Logo;
