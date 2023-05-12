import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <h2 className="section__title">Notre <span className="colored">Mission</span></h2>
          <div className="about__images">
          <figure className="about__image--wrapper">
            <img src="https://www.electricitevoltcom.com/Qui_sommes-nous_files/shapeimage_1.png" alt="" className="about__image" />
          </figure>
          <figure className="about__image--wrapper">
            <img src="https://www.electricitevoltcom.com/Qui_sommes-nous_files/shapeimage_2.png" alt="" className="about__image" />
          </figure>
          <figure className="about__image--wrapper">
            <img src="https://www.electricitevoltcom.com/Qui_sommes-nous_files/shapeimage_3.png" alt="" className="about__image" />
          </figure>
          </div>
          <p className="about__para">
            La compagnie <span className="colored">VOLTCOM INC.</span> vous offre un service <span className="colored">professionnel</span>  et
            <span className="colored">courtois</span>. En effet, nous tenons à coeur de penser à long terme pour
            chacun des projets entamés, et ce, pour votre plus grande
            <span className="colored">satisfaction</span>! De plus, <span className="colored">VOLTCOM INC.</span> vous donne de nombreux conseils
            avant, pendant et après les travaux. Ces conseils vous permettent de
            <span className="colored"></span>maximiser votre investissement et de vous assurer une meilleure
            compréhension de votre système électrique. Le service à la clientèle
            est une <span className="colored">priorité</span> chez <span className="colored">VOLTCOM INC.</span>
          </p>
          <p className="about__para--client">
            Nous savons que sans vous, notre compagnie ne peut pas exister,
            c'est pourquoi nous mettons tout en oeuvre pour vous assurer une
            expérience de qualité et à la hauteur de vos attentes. Ainsi, nous
            serons heureux de vous compter parmi nos nouveaux clients. Si vous
            êtes satisfaits, parlez-en à vos amis, dans le domaine de la
            construction, le bouche à oreille demeure encore le meilleur moyen
            d'obtenir de bonnes références
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
