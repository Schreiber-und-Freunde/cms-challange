import React from "react";
import logo from "../images/kruu-logo@2x.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper__inner">
        <header className="header">
          <a className="header__logo">
            <img className="header__logo__image" src={logo} alt="KRUU Logo" />
          </a>
          <nav className="nav nav--primary">
            <ul className="nav__list nav__list--primary">
              <li className="nav__list__point">
                <a className="nav__list__point__link nav__list__point__link--active">
                  Home
                </a>
              </li>
              <li className="nav__list__point">
                <a className="nav__list__point__link">Leistungen</a>
              </li>
              <li className="nav__list__point">
                <a className="nav__list__point__link">Über uns</a>
              </li>
              <li className="nav__list__point">
                <a className="nav__list__point__link">Blog</a>
              </li>
              <li className="nav__list__point">
                <a className="nav__list__point__link">FAQ</a>
              </li>
              <li className="nav__list__point">
                <a className="nav__list__point__link">Kontakt</a>
              </li>
            </ul>
          </nav>
          <nav className="nav nav--secondary" />
        </header>
      </div>
    </div>
  );
};

export default Header;
