import React from "react";
import Project from "../components/ui/Project";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h2 className="section__title">Nos <span className="colored">Projets</span></h2>
          <div className="projects__container">
            <Project
              title="Eclairage"
              subtitle="Spécialiste de l'éclairage de tous genres!"
              image="https://www.electricitevoltcom.com/Projets/Pages/Eclairage_files/Media/_MG_6923_imp/thumb.jpg"
              image2="https://www.electricitevoltcom.com/Projets/Pages/Eclairage_files/Media/_MG_6896_mod/thumb.jpg"
              paragraph="VOLTCOM INC. tente de créer la parfaite ambiance pour votre décor. À l'intérieur comme à l'extérieur, l'éclairage peut définir l'essence d'un lieu. Par l'utilisation d'un éclairage adéquat, notamment en respectant la température de couleur ou la puissance des lampes choisies, on peut arriver à suggérer toutes les atmosphères. Blanc chaud, blanc froid, incandescentes, D.E.L., halogènes, il existe de nombreuses façons d'éclairer pour mettre en valeur une pièce ou un immeuble, c'est pourquoi il est important de bien choisir votre système d'éclairage. Voilà exactement ce que nous nous proposons de faire pour vous et avec vous!"
            />
            <Project
              title="Chauffage"
              subtitle="De la chaleur efficace!"
              image="https://www.electricitevoltcom.com/Projets/Pages/Chauffage_files/Media/aeroconveceur_1/thumb.jpg"
              className="no-image"
              paragraph="Quand vient le temps de parler chauffage, il faut penser efficacité, confort et économie d'énergie. Effectivement, VOLTCOM INC. tente de proposer des solutions en matière de chauffage pour vous procurer une chaleur réconfortante au meilleur prix. C'est pourquoi nous utilisons les produits de chauffage Stelpro. Fabriqués au Québec, ces produits aux lignes contemporaines vous offrent le look et l'efficacité que vous recherchez. Par conséquent, nous sommes toujours disposés à trouver la solution la plus avantageuse pour vous."
            />
            <Project
              title="Residentiel"
              subtitle="Peu importe le projet!"
              image="https://www.electricitevoltcom.com/Projets/Pages/Residentiel_files/Media/IMG_0414/thumb.jpg"
              image2="https://www.electricitevoltcom.com/Projets/Pages/Residentiel_files/Media/entree_300/thumb.jpg"
              paragraph="énovations, fichage, ajouts ou modifications de prises, d'éclairage ou de chauffage, VOLTCOM INC. peut vous accompagner dans vos projets de rénovations, et ce, à toutes les étapes de réalisation. Spécialisé en remplacement de panneaux électriques, VOLTCOM INC. effectue des travaux majeurs en lien avec votre alimentation électrique principale. Comme il s'agit de travaux importants, il importe de bien planifier ce type de travail pour assurer la pérennité de l'installation, tout en respectant l'architecture de l'immeuble!"
            />
            <Project
              title="Commerciel"
              subtitle="Pour faire avancer votre projet d'entreprise!"
              image="https://www.electricitevoltcom.com/Projets/Pages/Commercial_files/Media/_MG_9700/thumb.jpg"
              image2="https://www.electricitevoltcom.com/Projets/Pages/Commercial_files/Media/int_pann/thumb.jpg"
              paragraph="VOLTCOM INC. peut vous aider à concrétiser votre projet d'entreprise au niveau de l'électricité. Que ce soit un restaurant, un petit bistro, ou encore, une boutique, nous pouvons vous aider à réaliser l'ambiance désirée, le confort voulu ainsi que le look que vous recherchez. À partir de plans d'ingénieurs ou avec un mandat clé en main, nous serons aptes à surpasser vos attentes!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
