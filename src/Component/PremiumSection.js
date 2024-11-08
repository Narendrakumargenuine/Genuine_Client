// import React, { useState, useEffect } from 'react';
// import Service0 from "../Assets/ServiceImage/download 6.png";
// import Service1 from "../Assets/ServiceImage/download 8.png";
// import Service2 from "../Assets/ServiceImage/download 9.png";
// import Service3 from "../Assets/ServiceImage/download 10.png";
// import Service4 from "../Assets/ServiceImage/download 11.png";
// import Service5 from "../Assets/ServiceImage/Group 95.png";
// import Service6 from "../Assets/ServiceImage/IMG-20240813-WA0038.png";
// import Service7 from "../Assets/ServiceImage/pngegg (11) 1.png";
// import Service8 from "../Assets/ServiceImage/pngegg (12) 1.png";
// import Service9 from "../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
// import '../Style/Premium.css'; // CSS for styling

// const PremiumSection = () => {
//     const slides = [
//         { src: Service0, src1: Service1, src2: Service2 },
//         { src: Service3, src1: Service4, src2: Service5 },
//         { src: Service6, src1: Service7, src2: Service8 }
//     ];

//     const [currentSlide, setCurrentSlide] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//         }, 3000); // 3 seconds interval

//         return () => clearInterval(interval);
//     }, [slides.length]);

//     return (
//         <div className="carousel-container1">
//               <h1 className="about-h1">
//                  A Premium Service Brands for Multibrands 
//                  </h1>
//             <div
//                 className="carousel-slides1"
//                 style={{ transform: `translateX(${-currentSlide * 100}%)` }}
//             >
//                 {slides.map((slide, index) => (
//                     <div key={index} className="carousel-item1">
//                         <img
//                             src={slide.src}
//                             alt={`Slide ${index + 1} Image 1`}
//                             className="carousel-image1"
//                         />
//                         <img
//                             src={slide.src1}
//                             alt={`Slide ${index + 1} Image 2`}
//                             className="carousel-image1"
//                         />
//                         <img
//                             src={slide.src2}
//                             alt={`Slide ${index + 1} Image 3`}
//                             className="carousel-image1"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PremiumSection;


import React from "react";
import Service0 from "../Assets/ServiceImage/download 6.png";
import Service1 from "../Assets/ServiceImage/download 8.png";
import Service2 from "../Assets/ServiceImage/download 9.png";
import Service3 from "../Assets/ServiceImage/download 10.png";
import Service4 from "../Assets/ServiceImage/download 11.png";
import Service5 from "../Assets/ServiceImage/Group 95.png";
import Service6 from "../Assets/ServiceImage/IMG-20240813-WA0038.png";
import Service7 from "../Assets/ServiceImage/pngegg (11) 1.png";
import Service8 from "../Assets/ServiceImage/pngegg (12) 1.png";
import Service9 from "../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
import "../Style/Premium.css"; // Make sure to create this CSS file

const images = [Service0, Service1, Service2, Service3, Service4, Service5, Service6, Service7, Service8, Service9];

function PremiumSection() {
  return (
    <div className="carousel-container2">
      <div className="carousel-slider2">
        <div className="carousel-track2">
          {images.map((image, index) => (
            <div key={index} className="carousel-item2">
              <img src={image} alt={`Service ${index}`} className="carousel-image2" />
            </div>
          ))}
          {/* Duplicate images for smooth infinite effect */}
          {images.map((image, index) => (
            <div key={`duplicate-${index}`} className="carousel-item2">
              <img src={image} alt={`Service ${index}`} className="carousel-image2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PremiumSection;



