import React, { useState, useEffect } from "react";
import "../Style/HeaderCara.css"; // Import the CSS for styling
import Image1 from "../Assets/HeaderCaraousel/image1.png";
import Image2 from "../Assets/HeaderCaraousel/image2.png";
import Image3 from "../Assets/HeaderCaraousel/image3.png";
import Image4 from "../Assets/HeaderCaraousel/image4.png";
import Image5 from "../Assets/HeaderCaraousel/image5.png";
import Image6 from "../Assets/HeaderCaraousel/image6.png";
import Image7 from "../Assets/HeaderCaraousel/image7.png";
import Image8 from "../Assets/HeaderCaraousel/image8.png";

const Carousel = () => {
  // Array of objects holding image paths and names
  const slides = [
    {
      src: Image1,
      name: "Blower Motor",
      key: "Efficient Climate Control for a Comfortable Ride",
    },
    { src: Image2, name: "Alternator", key: "Reliable Power for Your Vehicle" },
    {
      src: Image3,
      name: "Starter Motor",
      key: "Reliable Engine Ignition for Every Drive",
    },
    {
      src: Image4,
      name: "Air Suspension Compressor",
      key: "Smooth Rides with Precision Control",
    },
    {
      src: Image5,
      name: "EPS Motor",
      key: "Precision Control for Effortless Steering",
    },
    {
      src: Image6,
      name: "Liquid Cooled Alternator",
      key: "High Efficiency for High-Performance Vehicle",
    },
    {
      src: Image7,
      name: "Wiper Motor",
      key: "Clear Visibility, No Matter the Weather",
    },
    {
      src: Image8,
      name: "AC Compressor",
      key: "Keeping Your Vehicle Cool and Comfortable",
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
    <div className="carousel-container222">
      <div
        className="carousel-slides112"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item112">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="carousel-image112"
            />
            <div className="carousel-caption112">
              <h1>{slide.name}</h1>
              {/* <h3>{slide.key}</h3> */}
            </div>
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
