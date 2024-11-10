import React, { useEffect, useRef } from 'react';
import '../Style/Caraousel.css'; // Import the CSS for styling
import alternator from "../Assets/CaraouselImage/alternator.png";
import ac_compressor from "../Assets/CaraouselImage/ac_compressor.png";
import air_suspension from "../Assets/CaraouselImage/air_suspension.png";
import blower_motor from "../Assets/CaraouselImage/blower_motor.png";
import liquid_cooled from "../Assets/CaraouselImage/liquid_cooled.png";
import starter_motor from "../Assets/CaraouselImage/starter_motor.png";
import eps_column from "../Assets/CaraouselImage/eps_column.png";

const Carousel = () => {
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

  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1; // Controls scrolling speed
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0; // Reset scroll position for seamless looping
        }
      }
    }, 10); // Adjust for faster/slower scroll speed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel-slides">
        {[...slides, ...slides].map((slide, index) => (
          <div key={index} className="carousel-item">
            <img src={slide.src} alt={slide.name} className="carousel-image" />
            <h3 className="carousel-caption">{slide.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
