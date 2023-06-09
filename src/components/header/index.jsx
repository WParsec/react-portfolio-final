import React from "react";
import logo from "../../assets/logo.svg";

function Header() {
  const handleLinkClick = (event, elementId) => {
    event.preventDefault();
    const element = document.getElementById(elementId);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

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
                  <a
                    href="#about"
                    onClick={(event) => handleLinkClick(event, "about")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(event) => handleLinkClick(event, "projects")}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(event) => handleLinkClick(event, "contact")}
                  >
                    Contact
                  </a>
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
