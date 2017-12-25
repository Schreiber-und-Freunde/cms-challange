import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <h4 className="footer__column__headline">Kontakt</h4>
        <p>Du hast Fragen? Ruf uns einfach an:</p>
        <p>Telefon: 0800 7240914</p>
        <p>
          Mo - Fr: 08:00 - 20:00 Uhr<br />
          Sa: 08:00 - 18:00 Uhr
        </p>
        <p>
          Oder schicke eine E-Mail an:<br />
          <a
            href="mailto:support-de@kruu.com"
            className="nav__list__point__link nav__list__point__link--footer"
          >
            support-de@kruu.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
