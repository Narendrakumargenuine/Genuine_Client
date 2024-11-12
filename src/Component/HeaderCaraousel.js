// CarouselComponent.js
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

import '../Style/HeaderCara.css'; // Import custom CSS

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { src: Image7, name: "Blower Motor", key: "Efficient Climate Control" },
    { src: Image2, name: "Alternator", key: "Reliable Power for Vehicle" },
    { src: Image3, name: "AC Compressor", key: "Reliable Engine Ignition" },
    { src: Image4, name: "Air Suspension Compressor", key: "Smooth Rides" },
    { src: Image5, name: "Alternator", key: "Effortless Steering" },
    { src: Image6, name: "EPS Column", key: "High Efficiency" },
    { src: Image1, name: "AC Fan Motor", key: "Clear Visibility" },
    { src: Image8, name: "Starter Motor", key: "Comfortable Cooling" },
  ];
  // Set interval for slide transition (5 seconds)
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

export default CarouselComponent;
