import React, { useEffect, useState } from 'react';
import '../Style/Caraousel.css'; // Import the CSS for styling
import alternator from "../Assets/CaraouselImage/alternator.png";
import ac_compressor from "../Assets/CaraouselImage/ac_compressor.png";
import air_suspension from "../Assets/CaraouselImage/air_suspension.png";
import blower_motor from "../Assets/CaraouselImage/blower_motor.png";
import liquid_cooled from "../Assets/CaraouselImage/liquid_cooled.png";
import starter_motor from "../Assets/CaraouselImage/starter_motor.png";
import eps_column from "../Assets/CaraouselImage/eps_column.png";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    { src: alternator, name: "Alternator" },
   
    { src: starter_motor, name: "Starter Motor", },
    { src: ac_compressor, name: "AC Compressor", },
    {
      src: air_suspension,
      name: "Air Suspension Compressor",
    },
    { src: blower_motor, name: "Blower Motor" },
    {
    src: liquid_cooled,
      name: "Liquid Cooled Alternator",
    },
    {
    src: eps_column,
    name: "EPS Column",
  },
  ];



  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % slides.length);
    },5000); // 5000 ms = 5 seconds
    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="custom-carousel">
    <div className="carousel-inner">
      {slides.map((image, idx) => (
        <div
          key={idx}
          className={`carousel-item ${idx === index ? "active" : ""} ${
            idx === index ? "slide-left-to-right" : ""
          }`}
        >
          <img className="d-block w-100" src={image.src} alt={`Slide ${idx + 1}`}  />
          <div className="carousel-caption112">
            <h1>{image.name}</h1>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Carousel;
