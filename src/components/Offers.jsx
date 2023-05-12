import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./ui/Imageslider";

function Offers() {

  return (
    <section id="offers" >
      <div className="container">
        <div className="row">
          <div className="section__title">Ce qu'on peut <span className="colored">faire</span></div>
          <div className="offers__list--container">
            <div className="slider__images">
            <ImageSlider image="https://www.electricitevoltcom.com/Accueil_files/shapeimage_2.png" />
            <ImageSlider image="https://caltrac.ca/wp-content/uploads/2019/09/electrician-wiring-lights.jpg" />
            <ImageSlider image="https://www.electricitevoltcom.com/Accueil_files/shapeimage_1.png" />
            </div>
            <ul className="offers__lists">
              <li className="offers__list A">
                Changement de <span className="colored">panneau électrique</span> (fusibles à disjoncteurs).
              </li>

              <li className="offers__list B">
                Remplacement <span className="colored">entrée électrique</span> (100A, 200A, 400A, aérien ou
                souterrain).
              </li>

              <li className="offers__list C">
                <span className="colored">Rénovations</span> mineures (éclairage/prises sous-sol, nouvelle pièce,
                etc.)
              </li>

              <li className="offers__list D">
              <span className="colored">Rénovations</span> majeures (filage entier d'un logement, nettoyage du
                câblage)
              </li>

              <li className="offers__list E"><span className="colored">Fichage</span> de tous genres</li>

              <li className="offers__list F">
              <span className="colored">Branchement</span> des électriques
              </li>

              <li className="offers__list G">
                Conversion du système de <span className="colored">chauffage</span> (plinthes et convecteurs)
              </li>

              <li className="offers__list H">Appel de <span className="colored">service</span>/ <span className="colored">Urgence</span></li>

              <li className="offers__list I">Feu/ Inondations</li>

              <li className="offers__list J">Vérification pour fins</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
