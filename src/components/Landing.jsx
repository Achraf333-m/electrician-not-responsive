import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LandingImage from "../assets/undraw_electricity_k2ft.png"

function Landing({ contact, isVisible }) {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__container">
            <header>
              <h3 className="section__title header__title">
                Bienvenu Chez <span className="colored">Voltcom Inc.</span>
              </h3>
            </header>
            <figure className="landing__image--wrapper">
              <img src={LandingImage} alt="" />
            </figure>
            <div className={`landing__description ${isVisible && "visible"}`}>
              <p className="landing__para">
                <span className="colored">Voltcom Inc.</span> est une entreprise 
                <span className="colored"> dynamique</span> qui oeuvre dans le domaine de l'<span className="colored">électricité</span> au Québec,
                plus particulièrement à Montréal. Membre en règle de la
                Corporation des Maîtres Électriciens du Québec, cette entreprise
                vous offre un service <span className="colored">efficace</span> et de <span className="colored">qualité</span>!
              </p>
              <p className="landing__para--quote">
                "Au Québec, seul un entrepreneur électricien membre de la CMEQ
                peut légalement entreprendre des travaux d'installations
                électriques. Ainsi, en faisant affaire avec un entrepreneur
                électricien en règle, vous protégez votre investissement et vous
                vous assurez la tranquillité d'esprit!" CMEQ
              </p>
              <button onClick={contact} className="button__mail">
                <FontAwesomeIcon icon="envelope" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
