import React, { useState, useEffect } from 'react';
import '../Style/Caraousel.css'; // Import the CSS for styling
import Image2 from "../Assets/CaraouselImage/alternator.png";
import Image3 from "../Assets/CaraouselImage/column.png";
import Image4 from "../Assets/CaraouselImage/crvstartermotor.png";
import Image5 from "../Assets/CaraouselImage/electricpower.png";
import Image6 from "../Assets/CaraouselImage/steeringcolumn.png";
import Image1 from "../Assets/ProductsWeDo/download 2-1.png";
import Image21 from "../Assets/ProductsWeDo/Group 484.png";
import Image41 from "../Assets/ProductsWeDo/download 4.png";
import Image51 from "../Assets/ProductsWeDo/download 5.png";
import Image7 from "../Assets/ProductsWeDo/images 2.png";

const Carousel = () => {
  // Array of objects holdin image paths and names
  const slides = [
    { src: Image4, name: "CRV Starter Motor" },
    { src: Image3, name: "Electric Steering Column" },
    { src: Image2, name: "Alternator" },
    { src: Image5, name: "Elecric Power Steering Column" },
    { src: Image6, name: "Steering Column & Shalt" },
    { src: Image1, name: "Starter Motor", },
    { src: Image41, name: "AC Compressor", },
    {
      src: Image51,
      name: "Air suspension compressor",
    },
    { src: Image21, name: "Blower Motor" },
    {
    src: Image7,
      name: "Liquid cooled alternator",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
            <h3 className="carousel-caption">{slide.name}</h3>
          </div>
        ))}
      </div>
      {/* Uncomment this block if you want navigation buttons */}
      {/* <div className="carousel-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === currentSlide ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
