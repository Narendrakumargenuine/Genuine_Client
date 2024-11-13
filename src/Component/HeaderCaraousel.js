import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Image1 from "../Assets/HeaderCaraousel/a_cfanmotor.png";
import Image2 from "../Assets/HeaderCaraousel/ac_blower.png";
import Image3 from "../Assets/HeaderCaraousel/ac_compressor.png";
import Image4 from "../Assets/HeaderCaraousel/air_suspension_compressor.png";
import Image5 from "../Assets/HeaderCaraousel/alternator.png";
import Image6 from "../Assets/HeaderCaraousel/eps_column.png";
import Image7 from "../Assets/HeaderCaraousel/image1.png";
import Image8 from "../Assets/HeaderCaraousel/starter_motor.png";

import '../Style/HeaderCara.css';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  
  const slides = [
    // { src: Image7, name: "", key: "", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image2, name: "A/C Blower Motor", key: "Blowing air, Boosting comfort", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image3, name: "A/C Compressor", key: "Cooling your ride, One compression at a time", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image4, name: "Air Suspension Compressor", key: "Suspension perfection, Compressed. Elevate your ride, effortlessly", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image5, name: "Alternator", key: "Charging your battery, Powering your drive", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image6, name: "EPS Column", key: "Steer smart Steer smooth, Easy turn every time", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image1, name: "AC Fan Motor", key: "Cooling your ride, One spin at a time", key1: "Experience top-notch service & repair with Genuineserve." },
    { src: Image8, name: "Starter Motor", key: "Starts your engine, Starts your day", key1: "Experience top-notch service & repair with Genuineserve." },
  ];

  // Set interval for slide transition (5 seconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setShowText(false);  // Hide text initially
      setTimeout(() => setShowText(true), 2000); // Show text after 2 seconds
    }, 10000);

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
            <img className="d-block w-100" src={image.src} alt={`Slide ${idx + 1}`} />
            {showText && (
              <div className="carousel-caption112">
                <h1 style={{ color: "#064869" }} className="caraousel-h1">{`${image.name}: ${image.key}`}</h1>
                <h1 style={{ color: "#df222d" }} className="caraousel-h1">{image.key1}</h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
