import Logo from "../assets/Logo.jpg";

import React from 'react'
import { Link } from 'react-router-dom'
function Nav({ contact }) {
  return (
    <nav>
        <figure className="nav__logo--wrapper">
            <img src={Logo} alt="" className="nav__logo" />
        </figure>
        <ul className="nav__socials--list">
            <li className="nav__social">
                <Link to="/" className="social__link">Acceuil</Link>
            </li>
            <li className="nav__social">
                <Link to="/projets" className="social__link">Projets</Link>
            </li>
            <li className="nav__social">
                <Link to="/contact" onClick={contact} className="social__link">Contactez Nous!</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav