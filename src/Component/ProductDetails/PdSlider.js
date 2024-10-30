import React, { useState, useEffect } from 'react';
import '../../Style/Premium.css'; // CSS for styling


const PdSlider = ({images}) => {
    const slides = Object.keys(images).map((key) => ({
        src: images[key]
    }));

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000); // 3 seconds interval

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="carousel-container1">
            <div
                className="carousel-slides1"
                style={{ transform: `translateX(${-currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-item1">
                        <img
                            src={slide.src}
                            alt={`Slide ${index + 1} Image 1`}
                            className="carousel-image1"
                        />
                        {/* <img
                            src={slide.src1}
                            alt={`Slide ${index + 1} Image 2`}
                            className="carousel-image1"
                        />
                        <img
                            src={slide.src2}
                            alt={`Slide ${index + 1} Image 3`}
                            className="carousel-image1"
                        /> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PdSlider;
