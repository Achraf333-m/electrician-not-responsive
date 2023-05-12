import React from "react";
import Logo from "../assets/Logo.jpg";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer__container--big">
      <div className="footer__container footer__container--first">
        <figure className="nav__logo--wrapper footer__logo">
          <img src={Logo} alt="" className="nav__logo" />
        </figure>
        <div className="logo__info">CMEQ: 14026</div>
      </div>
      <ul className="footer__socials--list">
        <li className="footer__social">
          <Link to='/' className="footer__link social__link">
            Acceuil
          </Link>
        </li>
        <li className="footer__social">
          <a href="/contact" className="footer__link social__link">
            Contact
          </a>
        </li>
      </ul>
      <div className="footer__container footer__container--second">
        <figure className="nav__logo--wrapper footer__logo">
          <img src={Logo} alt="" className="nav__logo footer" />
        </figure>
        <div className="logo__info">RBQ: 5618-6505</div>
      </div>
      </div>

      <div className="footer__copyright">
        Tous droits réservés © VOLTCOM INC. 2023
      </div>
    </footer>
  );
}

export default Footer;
