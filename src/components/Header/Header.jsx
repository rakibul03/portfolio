import React from "react";
import { useState } from "react";
import "./Header.css";
import resume from "../../assets/Resume.pdf";

const Header = () => {
  const [toggle, showToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Rakibul
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skilld" className="nav__link">
                <i className="uil uil-file nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

            <li className="nav__item">
              <a download="resume" href={resume} className="resume__btn">
                <i className="uil uil-message nav__icon"></i> Download Resume
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
