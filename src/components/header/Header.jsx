import React from "react";
import "./header.css";
import ME from "../../assets/meheader.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Uardem Junior</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
          <HeaderSocials/>
        <div className="me">
          <img src={ME} alt = "me"/>
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
