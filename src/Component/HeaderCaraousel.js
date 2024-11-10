import React, { useState, useEffect } from "react";
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
    { src: Image7, name: "Blower Motor", key: "Efficient Climate Control" },
    { src: Image2, name: "Alternator", key: "Reliable Power for Vehicle" },
    { src: Image3, name: "Starter Motor", key: "Reliable Engine Ignition" },
    { src: Image4, name: "Air Suspension Compressor", key: "Smooth Rides" },
    { src: Image5, name: "EPS Motor", key: "Effortless Steering" },
    { src: Image6, name: "Liquid Cooled Alternator", key: "High Efficiency" },
    { src: Image1, name: "Wiper Motor", key: "Clear Visibility" },
    { src: Image8, name: "AC Compressor", key: "Comfortable Cooling" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        // If we are at the last image, we just stay at the last one
        if (prevSlide === slides.length - 1) {
          return 0;
        }
        return prevSlide + 1; // Otherwise, go to the next slide
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container222">
      <div
        className="carousel-slides112"
      >
      <div className="carousel-item112">
            <img
              src={Image7}
              className="carousel-image112"
            />
            <div className="carousel-caption112">
              <h1>Blower Motor</h1>
            </div>
          </div>
          <div className="carousel-item112">
            <img
              src={Image2}
              className="carousel-image112"
            />
            <div className="carousel-caption112">
              <h1>Alternator</h1>
            </div>
          </div>
          <div className="carousel-item112">
            <img
              src={Image3}
              className="carousel-image112"
            />
            <div className="carousel-caption112">
              <h1>Starter Motor</h1>
            </div>
          </div>

          <div className="carousel-item112">
            <img
              src={Image1}
              className="carousel-image112"
            />
            <div className="carousel-caption112">
              <h1>Wiper Motor</h1>
            </div>
          </div>


          <div className="carousel-item112">
            <img
              src={Image4}
              className="carousel-image112"
            />
            <div className="carousel-caption112">
              <h1>Air Suspension Compressor</h1>
            </div>
          </div>


          <div className="carousel-item112">
            <img
              src={Image5}
              className="carousel-image112"
            />
            <div className="carousel-caption112">
              <h1>EPS Motor</h1>
            </div>
          </div>


          <div className="carousel-item112">
            <img
              src={Image6}
              className="carousel-image112"
            />
            <div className="carousel-caption112">
              <h1>Liquid Cooled Alternator</h1>
            </div>
          </div>

          <div className="carousel-item112">
            <img
              src={Image8}
              className="carousel-image112"
            />
            <div className="carousel-caption112">
              <h1>AC Compressor</h1>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Carousel;
