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
import EnquiryModal from "../EnquiryModal.js";
import PremiumService from "../PremiumSection";
import { useParams } from "react-router-dom";
import Service from "../Service.js"
import Footer from "../Footer";
import Logo from "../../Assets/logo.jpg";
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
  const [showEnquiry,setShowEnquiry]= useState(false);

    const handleEnquiry=()=>{
        setShowEnquiry(!showEnquiry);
    }
    const handleCallClick = () => {
        window.location.href = "tel:+91 8971137456"; // Replace with your phone number
      };
      const handleWhatsAppClick = () => {
        const phoneNumber = "+919731303030"; // Replace with your desired phone number
        const message = "Hello! I need some help."; // Optional pre-filled message
        window.open(
          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      };
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
        <div className="about us">
        <div className="first-heading">
         
          <h1 className="about-h1" style={{color:"#05456c"}}>
          Why Choose Genuine Serve for <span>OE-RECON 
          </span>
           ?
        </h1>
        
         
        </div>
       
        <p className="welcome det" style={{ marginTop: "20px" }}>
        Certified Technicians: Our team consists of certified, highly trained professionals with years of experience in automotive reconditioning.
        </p>
        <p className="welcome det" style={{ marginTop: "20px" }}>
        OE Standards Compliance: Every part reconditioned through OE-RECON is tested to meet or exceed OE performance standards.


        </p>
        <p className="welcome det" style={{ marginTop: "20px" }}>
        State-of-the-Art Equipment: We use advanced tools and OE-approved testing equipment to ensure precision, quality, and reliability in every OE-RECON part.


        </p>
        <p className="welcome det" style={{ marginTop: "20px" }}>
        Commitment to Excellence: GenuineServe is committed to providing solutions that enhance the longevity and reliability of your vehicle, ensuring satisfaction with every OE-RECON part.
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
              <h1 style={{color:"#05456c"}}>Alternator</h1>
              <p>
              Restoring power generation efficiency and correcting common design issues for dependable performance.
              </p>
              <p
              
                style={{
                  color: "#05456c",
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
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                style={{color:"#05456c"}}
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick} style={{color:"#05456c"}}>Call now</button>
              <div className="whatsapp-container2" onClick={handleWhatsAppClick}>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
              </div>

        {showEnquiry && <EnquiryModal onClose={handleEnquiry}/>}
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
              <h1 style={{color:"#05456c"}}>Starter Motor</h1>
              <p>
              Ensuring reliable ignition power with reconditioned parts designed to last.
            Air Suspension Compressors: Reconditioning compressors to ensure optimal air pressure and handling.

              </p>
              <p
                style={{
                  color: "#05456c",
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
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                style={{color:"#05456c"}}
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick} style={{color:"#05456c"}}>Call now</button>
              <div className="whatsapp-container2" onClick={handleWhatsAppClick}>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
              </div>

        {showEnquiry && <EnquiryModal onClose={handleEnquiry}/>}
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
              <h1 style={{color:"#05456c"}}>EPS Motor</h1>
              <p>
              Reconditioning for precise, smooth steering and enhanced control.
              </p>
              <p
                style={{
                  color: "#05456c",
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
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                style={{color:"#05456c"}}
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick} style={{color:"#05456c"}}>Call now</button>
              <div className="whatsapp-container2" onClick={handleWhatsAppClick}>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
              </div>

        {showEnquiry && <EnquiryModal onClose={handleEnquiry}/>}
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
              <h1 style={{color:"#05456c"}}>AC Compressors</h1>
              <p>
              Delivering cool air on demand with reconditioned parts for optimal cabin comfort.

              </p>
              <p
                style={{
                  color: "#05456c",
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
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
                style={{color:"#05456c"}}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick} style={{color:"#05456c"}}>Call now</button>
              <div className="whatsapp-container2" onClick={handleWhatsAppClick}>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
              </div>

        {showEnquiry && <EnquiryModal onClose={handleEnquiry}/>}
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
              <h1 style={{color:"#05456c"}}>Air Suspension Compressors</h1>
              <p>
              Reconditioning compressors to ensure optimal air pressure and handling.
              </p>
              <p
                style={{
                  color: "#05456c",
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
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                style={{color:"#05456c"}}
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick} style={{color:"#05456c"}}>Call now</button>
              <div className="whatsapp-container2" onClick={handleWhatsAppClick}>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
              </div>

        {showEnquiry && <EnquiryModal onClose={handleEnquiry}/>}
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
              <h1 style={{color:"#05456c"}}>Blower Motors</h1>
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
                  color: "#05456c",
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
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
                style={{color:"#05456c"}}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick} style={{color:"#05456c"}}>Call now</button>
              <div className="whatsapp-container2" onClick={handleWhatsAppClick}>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
              </div>

        {showEnquiry && <EnquiryModal onClose={handleEnquiry}/>}
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
              <h1 style={{color:"#05456c"}}>Liquid Cooled Alternators</h1>
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
                  color: "#05456c",
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
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
                style={{color:"#05456c"}}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick} style={{color:"#05456c"}}>Call now</button>
              <div className="whatsapp-container2" onClick={handleWhatsAppClick}>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
              </div>

        {showEnquiry && <EnquiryModal onClose={handleEnquiry}/>}
            </div>
          </div>
        </div>
      </div>
      <div className="premium-service">
        {/* <div> */}
        {isMobile ? (
          <>
            <h1 className="about-h1" style={{marginBottom:"20px",color:"#05456c"}}>
            A Premium Service Brand for
            <span> Multibrands</span>
          </h1>
          <PremiumService />
          </>
         
        ) : (
          <div className="premium-service">
              <h1 className="about-h1" style={{marginBottom:"20px",color:"#05456c"}}>
            A Premium Service Brand for
            <span> Multibrands</span>
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
