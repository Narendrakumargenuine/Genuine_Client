import React, { useState, useEffect } from 'react';
import '../Style/Caraousel.css'; // Import the CSS for styling
import Image2 from "../Assets/CaraouselImage/alternator.png";
import Image3 from "../Assets/CaraouselImage/column.png";
import Image4 from "../Assets/CaraouselImage/crvstartermotor.png";
import Image5 from "../Assets/CaraouselImage/electricpower.png";
import Image6 from "../Assets/CaraouselImage/steeringcolumn.png";


const Carousel = () => {
  // Array of objects holding image paths and names
  const slides = [
    { src: Image4, name: "CRV Starter Motor" },
    { src: Image3, name: "Electric Steering Column" },
    { src: Image2, name: "Alternator" },
    { src: Image5, name: "Elecric Power Steering Column" },
    { src: Image6, name: "Steering Column & Shalt" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3 seconds interval

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
