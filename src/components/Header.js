import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";

function Header(props) {
  return (
    <header className="header">
      {/* <Logo isDarkMode={props.isDarkMode} /> */}
      <Logo />
      <Nav isDarkMode={props.isDarkMode} />
    </header>
  );
}

export default Header;
