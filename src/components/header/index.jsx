import React from "react";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-fixed">
          <div className="header-wrap">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <nav>
              <ul className="nav-ul">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#about">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
