import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../images/DevG_Logo_Light.png";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="home">
      <div className="navbar-container">
        <a href="/" onClick={closeMobileMenu}>
          <img className="navbar-logo" src={logo} alt="my-logo" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">Contact</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
