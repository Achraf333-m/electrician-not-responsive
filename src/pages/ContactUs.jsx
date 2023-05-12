import React from "react";
import contactUsImg from "../assets/undraw_Contact_us_re_4qqt.png"

function ContactUs() {
  return (
    <section id="contact-us">
      <div className="container">
        <div className="row">
          <div className="contact-us__container">
            <figure className="contact-us__image">
                <img src={contactUsImg} alt="" />
            </figure>
            <p className="contact-us__para">
              Pour toute question, soit sur l'emploi ou les services qu'on
              offre, veuillez nous <span className="colored">appelez</span> sur: <br /> <span className="colored">(514) 507-6847</span>. <br /> 
              Vous pouvez aussi nous envoyer un <span className="colored">email</span> directement en utilisant l'icon
              envelope dans la page d'acceuil!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
