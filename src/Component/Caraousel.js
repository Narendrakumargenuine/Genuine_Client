import React from 'react';
import '../Style/Caraousel.css'; // Import the CSS for styling
import alternator from "../Assets/CaraouselImage/alternator.png";
import ac_compressor from "../Assets/CaraouselImage/ac_compressor.png";
import air_suspension from "../Assets/CaraouselImage/air_suspension.png";
import blower_motor from "../Assets/CaraouselImage/blower_motor.png";
import liquid_cooled from "../Assets/CaraouselImage/liquid_cooled.png";
import starter_motor from "../Assets/CaraouselImage/starter_motor.png";
import eps_column from "../Assets/CaraouselImage/eps_column.png";

// Array of images
const slides = [
  { src: alternator, name: "Alternator" },
  { src: starter_motor, name: "Starter Motor" },
  { src: ac_compressor, name: "AC Compressor" },
  { src: air_suspension, name: "Air Suspension Compressor" },
  { src: blower_motor, name: "Blower Motor" },
  { src: liquid_cooled, name: "Liquid Cooled Alternator" },
  { src: eps_column, name: "EPS Column" }
];

const Carousel = () => {
  return (
    <div className="carousel-container2223">
      <div className="carousel-slides1123">
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item1123">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="carousel-image1123"
            />
            <div className="carousel-caption1123">
              <h1>{slide.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
