import { React, useState, useEffect } from "react";
import motor from "../Assets/motor.jpg";
import Contact from "./Contact";
import Service from "./Service";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Carousel from "./Caraousel";
import PremiumService from "./PremiumSection";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Home.css";
import Image3 from "../Assets/CaraouselImage/electricpower.png";
import Logo from "../Assets/logo.jpg";
import HeaderImage from "../Assets/headerImage.png";
import Image from "../Assets/ProductsWeDo/download 1.png";
import Image1 from "../Assets/ProductsWeDo/download 2-1.png";
import Image2 from "../Assets/ProductsWeDo/Group 484.png";

import Image4 from "../Assets/ProductsWeDo/download 4.png";
import Image5 from "../Assets/ProductsWeDo/download 5.png";
import Image7 from "../Assets/ProductsWeDo/images 2.png";
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
import HeaderCaraousel from "./HeaderCaraousel";
import PremiumSection from "./PremiumSection";
const Home = () => {
  const imageData2 = [
    Service0,
    Service1,
    Service2,
    Service3,
    Service4,
    Service5,
    Service6,
    Service7,
    Service8,
    Service9,
  ];
  const imageData = [
    { images: [Service0, Service1] },
    { images: [Service2, Service3] },
    { images: [Service4, Service5] },
    { images: [Service6, Service7] },
    { images: [Service8, Service9] },
  ];
  const imageData1 = [
    { images: [Service0, Service1, Service2] },
    { images: [Service3, Service4, Service5] },
    { images: [Service6, Service7, Service8] },
    { images: [Service9] },
  ];
  const total = imageData1.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const totalGroups = imageData.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % total);
    }, 10000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [total]);
  // Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalGroups);
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [totalGroups]);
  const data = [
    { url: Image, name: "Alternator", route: "/product/alternator" },
    { url: Image1, name: "Starter Motor", route: "/product/starter" },
    { url: Image3, name: "EPS Motor", route: "/product/eps" },
    { url: Image4, name: "AC Compressor", route: "/product/accompressor" },
    {
      url: Image5,
      name: "Air suspension compressor",
      route: "/product/airsuspension",
    },
    { url: Image2, name: "Blower Motor", route: "/product/blowermotor" },
    {
      url: Image7,
      name: "Liquid cooled alternator",
      route: "/product/liquidcooled",
    },
  ];
  const navigate = useNavigate();
  const handleProductClick = (route) => {
    navigate(`${route}`); // Navigate to ProductDetail page with the product ID
  };
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="main-container">
       <div className="aboutus-border244"></div>
      <HeaderCaraousel/>
  
      <div className="about us">
        <div>
        <h1 className="about-h1">
          About <span className="stroke">Genuine Serve</span>
        </h1>
        <div className="welcome-serve">
        <h3 className="about-h1">Welcome to Genuine Serve</h3>
        <div className="welcome-image"><img src={Logo}/></div>
        
        </div>
       
        </div>
      
        <p className="welcome det" style={{ marginTop: "20px" }}>
        Genuineserve is a Premium Service Company Specialized in diagnosing & servicing of Starter Motors, Alternators, A/C Compressors, A/C Blower Motors, Fan Motors, Wiper Motors,
         Air Suspension Compressors, EPS Steering Columns etc..
        With over 35 years of experience in the industry, we have established a strong reputation for delivering exceptional customer satisfaction and reliable automotive solutions.
        </p>
      </div>

      <div className="about us">
        <div className="first-heading">
         
          <h1 className="about-h1">
          Why Choose Genuine <span>Serve</span>
        </h1>
         
      
        <div className="heading-logo">
        <img src={Logo}/>
        <p>?</p>
        </div>
         
        </div>
       
        <p className="welcome det" style={{ marginTop: "20px" }}>
        Expertise in Auto Electricals: Our team of professionals are highly skilled in diagnosing & Servicing, of all automotive motors.
We offer a comprehensive range of services tailored to meet the specific needs of your vehicle. 
You’ll be hard-pressed to find the same level of expertise that our Service company provide! We have years of experience working on both domestic and import vehicle’s Automotive Motors of all makes and models and can work with you to find cost-effective repair and maintenance alternatives.

        </p>
        <p className="welcome det" style={{ marginTop: "20px" }}>
        Certified Quality Assurance: We adhere to ISO 9001:2015 standards, ensuring that all our services meet the highest levels of quality and reliability.

        </p>
        <p className="welcome det" style={{ marginTop: "20px" }}>
        State-of-the-Art Facilities: Our in-house facilities are equipped with advanced technology to provide complete service and OE-recon for all automotive parts. Each product undergoes rigorous computerized testing on digital test bench to ensure optimal performance.

        </p>
        <p className="welcome det" style={{ marginTop: "20px" }}>
        Multi-Brand Compatibility: We service and provide parts for a wide range of automotive brands, including Bosch, SEG, Valeo, Lucas-TVS, Delco Remy, Denso, Mitsubishi  and more. 
We are also an authorized service center for Bosch, 
guaranteeing quality and trust.
        </p>
      </div>
      {/* Product Image Appended */}
      <h1 className="about-h1">
        Products <span className="stroke">we </span>
        <span className="stroke">do</span>
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#999999",
          padding: "0px 10px",
        }}
      >
        We offer a variety of services for different automotive components
      </p>
      <div className="product-sample">
        <div className="product-append">
          {data.map((data, index) => {
            return (
              <div
                className="pro-con"
                key={index}
                onClick={() => handleProductClick(data.route)}
              >
                <div className="prod">
                  <img className="pro-img" src={data.url} />
                </div>
                <p className='vertical-text1 stroke1'>{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* A Premium Service Brands for Multibrands */}
      <div className="premium-service">
        {/* <div> */}
        {isMobile ? (
          <>
           <h1 className="about-h1"  style={{marginBottom:"20px"}}>
           A Premium Service Brand for
           <span className="stroke"> Multibrands</span>
         </h1>
          <PremiumService />
          </>
        ) : (
          <div className="premium-service">
            <h1 className="about-h1">
              A Premium Service Brand for
              <span className="stroke"> Multibrands</span>
            </h1>
            <div className="pre-section">
            <PremiumSection/>
             </div>
             </div>
        )}
        {/* </div> */}
      </div>

      {/* Service Process */}

      <Service />

      {/* Caraousel */}
      <Carousel />
      {/* Contact Us */}

      <Contact />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;