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
import PdContact from "../PdContact";
import PremiumSection from '../PremiumSection';
import Logo from "../../Assets/logo.jpg";
import "../../Style/ProductDetails.css";
import { useParams } from "react-router-dom";
import FAQs from "../Faqs";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { MdOutlineAttachFile } from "react-icons/md";
import alter1 from "../../Assets/Wiper/image1.png";
import alter2 from "../../Assets/Wiper/image2.png";
import alter3 from "../../Assets/Wiper/image3.png";
import section1 from "../../Assets/Wiper/section4.png"
import section2 from "../../Assets/Wiper/section3.png"
import section3 from "../../Assets/Wiper/section2.png"
import section4 from "../../Assets/Wiper/section1.png"
import Service9 from "../../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
import Contact from "../Contact";
import PdSlider from './PdSlider';
const WiperMotor = () => {
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
           <h1 className='vertical-text stroke'>Wiper Motors</h1>
           <PdSlider images={imageData}/>
           <h1 className="head-desc">Clear Visibility, No Matter the Weather</h1>
          </div>:
        <div className="product-details-content">
        <div>
           <h1 className='vertical-text stroke'>Wiper Motors</h1>
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
           <h1 style={{textAlign:"center",fontSize:"16px"}}>Clear Visibility, No Matter the Weather</h1>
      </div>}
      <div className="product-details-text">
        <p className="product-para">
          At GenuineServe, we understand how critical a functioning wiper motor
          is for maintaining clear visibility, especially during harsh weather
          conditions. Your wiper motor ensures the smooth operation of your
          windshield wipers, making sure you can safely navigate the road in
          rain, snow, or dust. With over 30 years of experience, we offer expert
          diagnosis, repair, and replacement services for wiper motors, ensuring
          they run flawlessly when you need them most.
        </p>
      </div>

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">Our Wiper Motor Services</h1>
            <p
              style={{
                textAlign: "center",
                color: "#8f8989",
                fontSize: "10px",
                marginBottom: "10px",
              }}
            >
              We provide a full suite of services for wiper motors to keep your
              vehicle’s visibility clear in all conditions:
            </p>
          </div>
        </div>
      </div>
      <div className="first-second-section1">
        <div className="first-second-aboutus1">
          <div>
            <p>
              {" "}
           
                Wiper Motor Diagnostics
                <span>
              : Our technicians use advanced diagnostic tools to identify the
              root cause of wiper motor issues, whether it’s electrical failure,
              motor burnout, or mechanical wear. </span>{" "}
            </p>
            <p>
              {" "}
             
                Wiper Motor Repair
                <span>
              : From fixing broken wiring to replacing faulty components, we
              ensure that your wiper motor functions smoothly without needing a
              complete replacement.  </span>{" "}
            </p>
            <p>
              {" "}
             
                Wiper Motor Replacement
                <span>
              : In cases where repair isn’t an option, we provide high-quality
              wiper motor replacements from trusted brands like Bosch, Denso,
              Valeo, and more.</span>{" "}
            </p>
            <p>
              {" "}
             
                Preventive Maintenance
                <span>
              : We offer regular maintenance services, including lubrication,
              cleaning, and system checks to keep your wiper motor in optimal
              working condition. </span>{" "}
            </p>
          </div>
        </div>
        <div className="imga-aboutus11">
          <img src={section1} />
        </div>
      </div>

      <div>
        <div className="first-second-aboutus11" id="advance">
          <div>
            <h1 className="first-h31">
              High-Quality Testing and Repair for Wiper Motors
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
              , we combine technical expertise with state-of-the-art facilities
              to deliver accurate and reliable wiper motor repairs. We ensure
              every motor we service meets stringent quality standards before
              returning it to you.
            </p>
          </div>
        </div>
      </div>

      <div className="first-second-section1">
        <div className="imga-aboutus11" id="img-2">
          <img src={section2} />
        </div>
        <div className="first-second-aboutus1">
          <div>
            <p>
              {" "}
             
                Advanced Diagnostics
                <span>
              We use computerized testing to simulate real-world conditions and
              identify any underlying issues affecting your wiper motor's
              performance. </span>{" "}
            </p>
            <p>
              {" "}
             
                OEM-Grade Parts
                <span>
              : We use certified replacement parts to restore your wiper motor’s
              functionality, ensuring durability and long-lasting performance. </span>{" "}
            </p>
            <p>
              {" "}
            
                Sustainable Solutions
                <span>
              : Our reconditioning services offer an eco-friendly alternative by
              refurbishing your existing wiper motor, extending its life while
              reducing waste. </span>{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Section Divide */}

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">Common Signs of Wiper Motor Problems</h1>
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
              A malfunctioning wiper motor can compromise your safety on the
              road, especially in adverse weather conditions. Watch out for
              these signs of wiper motor failure:
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
             
                Slow or Inconsistent Wiper Movement
                <span>
              : If your windshield wipers are moving slower than usual or
              stuttering, it may indicate a weakening or failing wiper motor.  </span>{" "}
            </p>
            <p>
              {" "}
           
                Non-Responsive Wipers
                <span>
              : If the wipers do not respond when activated, there could be an
              issue with the motor, electrical wiring, or control systems. </span>{" "}
            </p>
            <p>
              {" "}
              
                Unusual Noises
                <span>
              : Grinding, squealing, or buzzing noises coming from the wiper
              area can point to a problem with the wiper motor or its mechanical
              components. </span>{" "}
            </p>
            <p>
              {" "}
              
                Wipers Stop Mid-Way
                <span>
              :If your wipers stop mid-cycle or fail to complete their motion,
              it’s a clear indication that the wiper motor might be failing or
              obstructed.</span>{" "}
            </p>
            <p>
              {" "}
             
                Wipers Won’t Park
                <span>
              :If your wipers do not return to their resting position after
              being switched off, the motor’s park switch or control system
              could be malfunctioning. </span>{" "}
            </p>
          </div>
        </div>
        <div className="imga-aboutus11" id="img-3">
          <img src={section3} />
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
              At GenuineServe, We service wiper motors from a wide range of
              automotive brands, ensuring that your vehicle gets the best
              possible care, regardless of its make or model. Brands we work
              with include:
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
              As an authorized Bosch service center, we also offer genuine parts
              and factory-recommended repair practices, ensuring your wiper
              motor’s optimal performance.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">
              Why Choose GenuineServe for Wiper Motor Services?
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="first-second-section1">
        <div
          className="imga-aboutus11"
          id="img-3"
          style={{ marginBottom: "30px" }}
        >
          <img src={section4} />
        </div>
        <div className="first-second-aboutus1">
          <div>
            <p>
              {" "}
            
                Expert Technicians
                <span>
              : Our highly trained technicians have extensive experience in
              diagnosing and repairing all types of wiper motor issues.  </span>{" "}
            </p>
            <p>
              {" "}
            
                ISO 9001:2015 Certified
                <span>
              : Our services are backed by international quality standards,
              ensuring reliability and consistency in every repair or
              replacement. </span>{" "}
            </p>
            <p>
              {" "}
              
                Cutting-Edge Technology
                <span>
              : We use the latest diagnostic and repair equipment to ensure your
              wiper motor functions smoothly and reliably. </span>{" "}
            </p>
            <p>
              {" "}
              
                Quick Turnaround
                <span>
              : We prioritize fast and efficient service so you can get back on
              the road with full visibility as soon as possible. </span>{" "}
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

export default WiperMotor;
