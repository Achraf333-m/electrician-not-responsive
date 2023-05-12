import React from "react";
import Slider from "react-slick";

const ImageSlider = ({image}) => {
  const images = [
    "",
    "",
    "",
  ];
  return (
    <figure className="slider__image--wrapper">
      <img className="slider__image" src={image} />
    </figure>
  );
};

export default ImageSlider;
