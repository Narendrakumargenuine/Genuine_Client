import React, { useEffect, useRef } from "react";
import "../Style/HeaderCara.css";
import Image1 from "../Assets/HeaderCaraousel/a_cfanmotor.png";
import Image2 from "../Assets/HeaderCaraousel/ac_blower.png";
import Image3 from "../Assets/HeaderCaraousel/ac_compressor.png";
import Image4 from "../Assets/HeaderCaraousel/air_suspension_compressor.png";
import Image5 from "../Assets/HeaderCaraousel/alternator.png";
import Image6 from "../Assets/HeaderCaraousel/eps_column.png";
import Image7 from "../Assets/HeaderCaraousel/image1.jpg";
import Image8 from "../Assets/HeaderCaraousel/starter_motor.png";

const Carousel = () => {
  const slides = [
    { src: Image7, name: "Blower Motor", key: "Efficient Climate Control for a Comfortable Ride" },
    { src: Image2, name: "Alternator", key: "Reliable Power for Your Vehicle" },
    { src: Image3, name: "Starter Motor", key: "Reliable Engine Ignition for Every Drive" },
    { src: Image4, name: "Air Suspension Compressor", key: "Smooth Rides with Precision Control" },
    { src: Image5, name: "EPS Motor", key: "Precision Control for Effortless Steering" },
    { src: Image6, name: "Liquid Cooled Alternator", key: "High Efficiency for High-Performance Vehicle" },
    { src: Image1, name: "Wiper Motor", key: "Clear Visibility, No Matter the Weather" },
    { src: Image8, name: "AC Compressor", key: "Keeping Your Vehicle Cool and Comfortable" },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        // Move to the right
        carouselRef.current.scrollLeft += 1;
        // Check if it's at the end
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 10); // Adjust speed here (smaller = faster)

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="carousel-container222" ref={carouselRef}>
      <div className="carousel-slides112">
        {[...slides, ...slides].map((slide, index) => (
          <div key={index} className="carousel-item112">
            <img src={slide.src} alt={slide.name} className="carousel-image112" />
            <div className="carousel-caption112">
              <h1>{slide.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
