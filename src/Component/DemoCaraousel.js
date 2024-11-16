import React, { useState, useEffect } from "react";
import "../Style/Demo.css";
import Image1 from "../Assets/HeaderCaraousel/a_cfanmotor.png";
import Image2 from "../Assets/HeaderCaraousel/ac_blower.png";
import Image3 from "../Assets/HeaderCaraousel/ac_compressor.png";
import Image4 from "../Assets/HeaderCaraousel/air_suspension_compressor.png";
import Image5 from "../Assets/HeaderCaraousel/alternator.png";
import Image6 from "../Assets/HeaderCaraousel/eps_column.png";
import Image8 from "../Assets/HeaderCaraousel/starter_motor.png";

const Carousel = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showText, setShowText] = useState(false);

  const slides = [
    { src: Image2, name: "A/C Blower Motor", key: "Blowing air, Boosting comfort", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image3, name: "A/C Compressor", key: "Cooling your ride, One compression at a time", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image4, name: "Air Suspension Compressor", key: "Suspension perfection, Compressed. Elevate your ride, effortlessly", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image5, name: "Alternator", key: "Charging your battery, Powering your drive", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image6, name: "EPS Column", key: "Steer smart Steer smooth, Easy turn every time", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image1, name: "AC Fan Motor", key: "Cooling your ride, One spin at a time", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image8, name: "Starter Motor", key: "Starts your engine, Starts your day", key1: "Experience top-notch service & repair with Genuineserve." },
  ];

  const carouselItems = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setShowText(false); // Hide text before the next image transition
        setCurrentItemIndex((prevIndex) => prevIndex - 1);
        setIsTransitioning(true);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    setTimeout(() => setShowText(true), 2000); // Immediately show text with animation
    if (currentItemIndex === 0) {
      setCurrentItemIndex(carouselItems.length - 2);
    } else if (currentItemIndex === carouselItems.length - 1) {
      setCurrentItemIndex(1);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carouselInner"
        style={{
          transform: `translateX(-${currentItemIndex * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="carouselSlide">
            <img src={item.src} alt={`carousel-${index}`} className="carouselImage" />
            {index === currentItemIndex && showText && ( // Conditional rendering for text
              <div className={`carousel-caption show-text`}>
                <p className="cara-name">
                  {item.name} :- "<span className="cara-key">{item.key}</span>"
                </p>
                <p className="cara-key1">{item.key1}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
