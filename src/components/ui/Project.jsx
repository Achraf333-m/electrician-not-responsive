import React, { useEffect, useRef } from "react";

function Project({ title, subtitle, image, image2, paragraph, className }) {


  return (
    <div className="project">
      <h3 className="project__title colored">{title}</h3>
      <div className="proj__info--container">
        <div className="project__image--container">
          <figure className="project__image--wrapper">
            <img src={image} alt="" className="project__image" />
          </figure>
          <figure className="project__image--wrapper project__image--wrapper2">
            <img
              src={image2}
              alt=""
              className={`${className} project__image project__image2`}
            />
          </figure>
          <span className="info-hover">Survolez pour agrandir</span>
        </div>
        <div className="project__description">
          <h4 className="project__para--title">{subtitle}</h4>
          <p className="project__para">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
