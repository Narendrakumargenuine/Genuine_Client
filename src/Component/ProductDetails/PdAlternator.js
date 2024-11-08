import React, { useState, useEffect } from "react";
import Service0 from "../../Assets/ServiceImage/download 6.png";
import Service1 from "../../Assets/ServiceImage/download 8.png";
import Service2 from "../../Assets/ServiceImage/download 9.png";
import Service3 from "../../Assets/ServiceImage/download 10.png";
import Service4 from "../../Assets/ServiceImage/download 11.png";
import Service5 from "../../Assets/ServiceImage/Group 95.png";
import Service6 from "../../Assets/ServiceImage/IMG-20240813-WA0038.png";
import Service7 from "../../Assets/ServiceImage/pngegg (11) 1.png";
import Service8 from "../../Assets/ServiceImage/pngegg (12) 1.png";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
import PremiumSection from '../PremiumSection';
import PdContact from "../PdContact";
import Logo from "../../Assets/logo.jpg";
import "../../Style/ProductDetails.css";
import { useParams } from "react-router-dom";
import FAQs from "../Faqs";
import Navbar from "../Navbar";
import Footer from "../Footer";
import alter1 from "../../Assets/Alternator/download 1.png";
import alter2 from "../../Assets/Alternator/download 17.png";
import alter3 from "../../Assets/Alternator/images 8.png";
import frame from "../../Assets/Alternator/Frame 563.png";
import frame1 from "../../Assets/Alternator/section2.png";
import frame2 from "../../Assets/Alternator/section3.png";
import Service9 from "../../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
import { MdOutlineAttachFile } from "react-icons/md";
import PdSlider from './PdSlider';
const ProductDetails = () => {
  const { productId } = useParams();
  const isMobile = window.innerWidth <= 768;
  const slides = [
    { src: Service0, src1: Service1, src2: Service2 },
    { src: Service3, src1: Service4, src2: Service6 },
    { src: Service7, src1: Service8, src2: Service9 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [slides.length]);
  const imageData = { alter1, alter2, alter3 };
  return (
    <div className="product-details-container">
      {/* Heading Section */}
      <div className="aboutus-border"></div>
      <h2 className="product-details-heading">Product <span className="stroke">Details</span></h2>

      {/* Main Content Section */}
      {
        isMobile? <div className="product-details-content">
           <h1 className='vertical-text stroke'>Alternator</h1>
           <PdSlider images={imageData}/>
           <h1 style={{textAlign:"center",fontSize:"16px"}}>Reliable Power for Your Vehicle</h1>
          </div>:
        <div className="product-details-content">
        <div>
           <h1 className='vertical-text stroke'>Alternator</h1>
           <div>
            <img src={alter1}/>
           </div>
           <div>
            <img src={alter2}/>
           </div>
           <div>
            <img src={alter3}/>
           </div>
          
           </div>
           <h1 className="head-desc">Reliable Power for Your Vehicle</h1>
      </div>}
      <div className="product-details-text">
        <p className="product-para">
          At GenuineServe, we specialize in providing high-quality alternator
          repair, maintenance, and re-engineering services for all types of
          vehicles. Your vehicle’s alternator is crucial for generating
          electrical power and maintaining battery life, ensuring your car’s
          smooth operation. Our team of experts has extensive experience
          diagnosing and repairing alternator issues, ensuring that your vehicle
          remains reliable on the road.
        </p>
      </div>

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">Our Alternator Services</h1>
            <p
              style={{
                textAlign: "center",
                color: "#8f8989",
                fontSize: "10px",
                marginBottom: "10px",
              }}
            >
              We offer a full range of alternator services to keep your vehicle
              powered up:
            </p>
          </div>
        </div>
      </div>

      <div className="first-second-section1">
        <div className="first-second-aboutus1">
          <div>
            <p>
              {" "}
             
                Alternator Diagnostics
                <span>
              : Our advanced diagnostic equipment accurately identifies faults
              in your alternator, whether it's voltage irregularities,
              insufficient power generation, or physical wear.</span>
            </p>
            <p>
              {" "}
              
                Alternator Repair and Reconditioning
                <span>
              : Whether it’s replacing damaged components or re-engineering the
              alternator for optimal performance, we provide tailored solutions
              based on the specific needs of your vehicle.</span>
            </p>
            <p>
              {" "}
             
                Alternator Replacement
                <span>
              : If your alternator is beyond repair, we offer high-quality
              replacements from leading brands like Bosch, Denso, Valeo, and
              Delco Remy. </span>{" "}
            </p>
            <p>
              {" "}
              
                Preventive Maintenance
                <span>
              :We provide preventive maintenance services to extend the lifespan
              of your alternator, helping to avoid costly breakdowns.</span>
            </p>
          </div>
        </div>
        <div className="imga-aboutus11">
          <img src={frame} />
        </div>
      </div>

      <div>
        <div className="first-second-aboutus11" id="advance">
          <div>
            <h1 className="first-h31">
              Advanced Alternator Testing and Repair Technology
            </h1>
            <p
              style={{
                width: "80%",
                margin: "auto",
                textAlign: "center",
                marginTop: "20px",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "#064c1b", fontWeight: "bold" }}>
                At GenuineServe
              </span>
              , we are committed to using state-of-the-art technology to deliver
              precision and reliability in every service. Our alternators
              undergo rigorous computerized testing on advanced digital test
              benches to ensure they meet or exceed Original Equipment
              Manufacturer (OEM) standards.
            </p>
          </div>
        </div>
      </div>

      <div className="first-second-section1">
        <div className="imga-aboutus11" id="img-2">
          <img src={frame1} />
        </div>
        <div className="first-second-aboutus1">
          <div>
            <p>
              {" "}
              
                Digital Test Benches
                <span >
             : We simulate real-world conditions to assess
              the performance of your alternator, measuring voltage output,
              current stability, and load-handling capacity.  </span>{" "}
            </p>
            <p>
              {" "}
             
                High-Quality Replacement Parts
                <span>
               : We use only certified
              replacement parts, ensuring your alternator is restored to peak
              performance. </span>
            </p>
            <p>
              {" "}
             
                Eco-Friendly Reconditioning
                <span>
              : For those looking to minimize waste, our reconditioning process
              offers an eco-friendly alternative that rejuvenates your existing
              alternator without compromising performance. </span>{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Section Divide */}

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">Signs of Alternator Failure</h1>
            <p
              style={{
                width: "80%",
                margin: "auto",
                textAlign: "center",
                marginTop: "20px",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              Recognizing the early signs of alternator failure can save you
              from unexpected vehicle breakdowns. If you notice any of the
              following, it may be time to have your alternator checked:
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="first-second-section1">
       
        <div className="first-second-aboutus1">
          <div>
            <p>
              {" "}
            
                Dim or Flickering Headlights
                <span>
              : A failing alternator can’t provide consistent power to your
              vehicle’s electrical system, leading to dim or inconsistent
              lighting. </span>{" "}
            </p>
            <p>
              {" "}
           
                Battery Warning Light
                <span>
              : If the battery warning light appears on your dashboard, it could
              indicate an issue with the alternator, not just the battery.  </span>
            </p>
            <p>
              {" "}
           
                Unusual Noises
                <span>
              : A grinding or whining sound could signal a worn-out bearing
              inside the alternator. </span>{" "}
            </p>
            <p>
              {" "}
             
                Electrical Failures
                <span>
              : If your radio, power windows, or other electrical components
              start malfunctioning, your alternator may not be providing
              sufficient power. </span>{" "}
            </p>
          </div>
        </div>
        <div className="imga-aboutus11" id="img-3">
          <img src={frame2} />
        </div>
      </div>

      {/* SectionClose */}
      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">Multi-Brand Compatibility</h1>
            <p
              style={{
                width: "80%",
                margin: "auto",
                textAlign: "center",
                marginTop: "20px",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              We service alternators from a wide range of automotive brands,
              ensuring you receive the right solution no matter your vehicle
              make or model. Brands we service include:
            </p>
          </div>
        </div>
      </div>
      <div className="premium-service11">
        <PremiumSection/>
      </div>
      <div>
        <div className="first-second-aboutus11">
          <div>
            <p
              style={{
                width: "80%",
                margin: "auto",
                textAlign: "center",
                marginTop: "-10px",
                fontSize: "14px",
              }}
            >
              and many more...
            </p>
            <p
              style={{
                width: "80%",
                margin: "auto",
                textAlign: "center",
                marginTop: "0px",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              Additionally, as an authorized service center for Bosch, you can
              trust us for genuine parts and factory-standard repairs.
            </p>
          </div>
        </div>
      </div>
      <div className="contact-container1">
      <PdContact/>
        </div>
      <FAQs />
      <Footer />
    </div>
  );
};

export default ProductDetails;
