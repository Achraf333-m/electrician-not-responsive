import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact({ isVisible, setContact }) {
  
  function setContactExit() {
    setContact(false)
  }
    const form = useRef()

  function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".loading")
    const success = document.querySelector(".success")
    loading.classList.add("form__sent")
    emailjs
      .sendForm(
        "service_nbeylcx",
        "template_wfj84kv",
        form.current,
        "y_XhrmXYGGx_cmSld"
      ).then(() => {
          event.target.reset()
          loading.classList.remove("form__sent")
          success.classList.add("form__sent")
        }).catch(() => {
          loading.classList.remove("form__sent")
          alert(
            "oops! our emailing system might be down, please message us at achrafdaimallah2003@gmail.com"
            );
          });
  }



  return (
    <div className={`contact ${isVisible && "contact__visible"}`}>
      <div className="contact__half contact__half--form">
        <div className="loading">
          <FontAwesomeIcon icon="spinner" className="loading-phase" />
        </div>
        <div className="success">
          <p className="success__para">Merci de nous contacter, on vous repondera le plus tot possible!</p>
          <FontAwesomeIcon icon="check" className="success-phase" />
        </div>
        <h3 className="contact__title">Contactez Nous!</h3>
        <form ref={form} onSubmit={contact} className="contact__input--container">
          <input
            className="contact__input"
            type="text"
            required
            placeholder="Votre Nom"
            name="user-name"
          />
          <input
            className="contact__input"
            type="email"
            required
            placeholder="Votre Courriel"
            name="user-email"
          />
          <textarea
            className="contact__input contact__text"
            type="text"
            required
            placeholder="Votre Mesaage"
            name="message"
          />
          <div className="contact__btn">
            <button className="btn">
              Contactez Nous
            </button>
          </div>
        </form>
      </div>
      <div className="contact__half contact__half--description">
        <FontAwesomeIcon icon="times" className="modal-exit" onClick={setContactExit}/>
        <h3 className="contact__title">On est la pour vous</h3>
        <p className="contact__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          blanditiis voluptatibus et cupiditate explicabo recusandae delectus,
          placeat neque consectetur quam aliquid aut quaerat laudantium ratione
          incidunt, deleniti exercitationem odio beatae.
        </p>
      </div>
    </div>
  );
}

export default Contact;
