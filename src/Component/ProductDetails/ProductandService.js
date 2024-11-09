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
import { Link, useNavigate } from "react-router-dom";
import "../../Style/ProductDetails.css";
import "../../Style/ProductAndService.css";
import PremiumService from "../PremiumSection";
import { useParams } from "react-router-dom";
import Service from "../Service.js"
import Footer from "../Footer";
import Image from "../../Assets/ProductsWeDo/download 1.png";
import Image1 from "../../Assets/ProductsWeDo/download 2-1.png";
import Image2 from "../../Assets/ProductsWeDo/Group 484.png";
import Image3 from "../../Assets/CaraouselImage/electricpower.png";
import Image4 from "../../Assets/ProductsWeDo/download 4.png";
import Image5 from "../../Assets/ProductsWeDo/download 5.png";
import Image7 from "../../Assets/ProductsWeDo/images 2.png";
import Service9 from "../../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
import Contact from "../Contact";
import PremiumSection from "../PremiumSection";

const ProductAndService = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const slides = [
    { src: Service0, src1: Service1, src2: Service2 },
    { src: Service3, src1: Service4, src2: Service6 },
    { src: Service7, src1: Service8, src2: Service9 },
  ];
  const imageData2 = [
    Service0,
    // Service2,
    Service3,
    // Service4,
    Service6,
    Service5,
    Service1,
    // Service7,
    // Service8,
    // Service9,
  ];

  const imageData = [
    { images: [Service0, Service1] },
    { images: [Service2, Service3] },
    { images: [Service4, Service5] },
    { images: [Service6, Service7] },
    { images: [Service8, Service9] },
  ];

  const serviceDetails = [{ image: "" }];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [slides.length]);
  const imageData3 = [
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
  return (
    <div className="product-details-container">
      {/* Heading Section */}
     
      <div className="aboutus-border"></div>

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">Products and Services</h1>
            <p
              style={{
                textAlign: "center",
                color: "#8f8989",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              We offer a variety of services for different
              automotive components:
            </p>
          </div>
        </div>
      </div>
      {/* Services details */}
      <div className="serviceContainer">
        <h4>Get the Right Part</h4>
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src={Image}
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Alternator</h1>
              <p>
                We specialize in providing high-quality alternator repair,
                maintenance, and re-engineering services for all types of
                vehicles. Your vehicle’s alternator is crucial for generating
                electrical power and maintaining battery life, ensuring your
                car’s smooth operation. Our team of experts has extensive
                experience diagnosing and repairing alternator issues, ensuring
                that your vehicle remains reliable on the road.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <button
                className="btn"
                onClick={() => navigate("/product/alternator")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src={Image1}
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Starter Motor</h1>
              <p>
                we offer top-notch starter motor repair, replacement, and
                reconditioning services to ensure your vehicle starts smoothly
                every time. The starter motor is critical in getting your engine
                running, and any malfunction can leave you stranded. With over
                30 years of experience, our team excels at diagnosing and
                resolving starter motor issues for a wide range of vehicle
                brands.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <button
                className="btn"
                onClick={() => navigate("/product/starter")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
       
        {/* Fourth*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src={Image3}
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>EPS Motor</h1>
              <p>
                we specialize in the repair and replacement of Electric Power
                Steering (EPS) motors, ensuring smooth, effortless steering for
                your vehicle. EPS motors play a critical role in modern vehicles
                by providing precise control over steering without relying on
                traditional hydraulic systems. Whether you are experiencing
                increased steering effort or abnormal steering behavior, our
                expert team is here to diagnose and resolve any issues with your
                EPS motor.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <button className="btn" onClick={() => navigate("/product/eps")}>
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* Fifth*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src={Image4}
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>AC Compressors</h1>
              <p>
                we offer specialized services for AC compressors, ensuring your
                vehicle’s air conditioning system runs efficiently, providing
                cool air during the hottest days. The AC compressor is the heart
                of your vehicle’s air conditioning system, responsible for
                circulating refrigerant and maintaining the cooling cycle.
                Whether you’re facing a complete AC breakdown or reduced cooling
                performance.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <button
                className="btn"
                onClick={() => navigate("/product/accompressor")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* sixth*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src={Image5}
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Air Suspension Compressors</h1>
              <p>
                we provide expert services for air suspension compressors, a
                critical component in maintaining the comfort and performance of
                your vehicle’s air suspension system. The air suspension
                compressor ensures the proper inflation of air springs, allowing
                for smooth rides, optimal ground clearance, and improved
                handling, especially in luxury and high-performance vehicles.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <button
                className="btn"
                onClick={() => navigate("/product/airsuspension")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* seventh*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src={Image2}
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Blower Motors</h1>
              <p>
                we specialize in the repair, maintenance, and replacement of
                blower motors, an essential component of your vehicle's heating,
                ventilation, and air conditioning (HVAC) system. Blower motors
                control the airflow in your vehicle’s cabin, ensuring that warm
                or cool air is distributed evenly throughout. Whether your
                blower motor is failing to function or making unusual noises,
                our team of experts is equipped to diagnose and resolve any
                issues quickly and efficiently.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <button
                className="btn"
                onClick={() => navigate("/product/blowermotor")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* eight*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src={Image7}
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Liquid Cooled Alternators</h1>
              <p>
                we provide expert repair, maintenance, and replacement services
                for liquid cooled alternators, a crucial component in modern
                high-performance and heavy-duty vehicles. Unlike traditional
                air-cooled alternators, liquid cooled alternators are designed
                to handle higher electrical loads while maintaining optimal
                temperatures, ensuring consistent performance in demanding
                conditions.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <button
                className="btn"
                onClick={() => navigate("/product/liquidcooled")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="premium-service">
        {/* <div> */}
        {isMobile ? (
          <>
             <h1 className="about-h1" style={{marginBottom:"20px"}}>
            A Premium Service Brand for
            <span className="stroke"> Multibrands</span>
          </h1>
          <PremiumService />
          </>
        ) : (
          <div className="premium-service">
             <h1 className="about-h1" style={{marginBottom:"20px"}}>
            A Premium Service Brand for
            <span className="stroke"> Multibrands</span>
          </h1>
           <PremiumSection/>
          </div>
        )}
        {/* </div> */}
      </div>
      <Service/>
      <Contact />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ProductAndService;
