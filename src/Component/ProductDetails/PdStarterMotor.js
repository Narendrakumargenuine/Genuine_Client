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
import { MdOutlineAttachFile } from "react-icons/md";
import "../../Style/ProductDetails.css";
import { useParams } from "react-router-dom";
import FAQs from "../Faqs";
import Navbar from "../Navbar";
import Footer from "../Footer";
import alter1 from "../../Assets/StarterMotor/image1.png";
import alter2 from "../../Assets/StarterMotor/image2.png";
import alter3 from "../../Assets/StarterMotor/image3.png";
import section1 from "../../Assets/StarterMotor/section1.png"
import section2 from "../../Assets/StarterMotor/section2.png"
import section3 from "../../Assets/StarterMotor/section3.png"
import section4 from "../../Assets/StarterMotor/section4.png"
import Service9 from "../../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
import Contact from "../Contact";
import PdSlider from './PdSlider';
const PdStarterMotor = () => {
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
      <h2 className="product-details-heading">Product <span>Details</span></h2>

      {/* Main Content Section */}
      {
        isMobile? <div className="product-details-content">
           <h1 className='vertical-text'>Starter Motors</h1>
           <PdSlider images={imageData}/>
           <h1 style={{textAlign:"center",fontSize:"16px"}}>Reliable Engine Ignition for Every Drive</h1>
          </div>:
        <div className="product-details-content">
        <div>
           <h1 className='vertical-text'>Starter Motors</h1>
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
           <h1 className="head-desc">Reliable Engine Ignition for Every Drive</h1>
      </div>}
      <div className="product-details-text">
        <p className="product-para">
          At GenuineServe, we offer top-notch starter motor repair, replacement,
          and reconditioning services to ensure your vehicle starts smoothly
          every time. The starter motor is critical in getting your engine
          running, and any malfunction can leave you stranded. With over 30
          years of experience, our team excels at diagnosing and resolving
          starter motor issues for a wide range of vehicle brands.
        </p>
      </div>

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">Our Starter Motor Services</h1>
            <p
              style={{
                textAlign: "center",
                color: "#8f8989",
                fontSize: "10px",
                marginBottom: "10px",
              }}
            >
              Our expert team provides a comprehensive range of services to
              ensure your starter motor functions efficiently:
            </p>
          </div>
        </div>
      </div>

      <div className="first-second-section1">
        <div className="first-second-aboutus1">
          <div>
            <p>
              {" "}
             
                Starter Motor Diagnostics
                <span>
              : Using advanced diagnostic tools, we identify the exact cause of
              starter motor failure, from faulty solenoids to worn-out brushes
              or mechanical issues. </span>{" "}
            </p>
            <p>
              {" "}
            
                Starter Motor Repair and Reconditioning
                <span>
              : We offer repair services for minor issues, as well as full
              reconditioning to restore the motor to its original working
              condition. Our re-engineering process ensures that your starter
              motor performs as good as new. </span>{" "}
            </p>
            <p>
              {" "}
             
                Starter Motor Replacement
                <span>
              : If repairs are not feasible, we provide high-quality starter
              motor replacements from trusted brands like Bosch, Valeo, Denso,
              and Lucas TVS, ensuring reliability and longevity. </span>{" "}
            </p>
            <p>
              {" "}
             
                Preventive Maintenance
                <span>
              : Regular maintenance can help extend the lifespan of your starter
              motor. We provide cleaning, lubrication, and part testing to catch
              issues early and avoid future breakdowns.  </span>{" "}
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
              Cutting-Edge Starter Motor Testing and Repair
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
              <span style={{ color: "#05456c", fontWeight: "bold" }}>
                At GenuineServe
              </span>
              , we use the latest technologies and equipment to deliver
              precision repairs that meet industry standards. Our team ensures
              every starter motor undergoes rigorous testing before it is
              returned to you, providing peace of mind and reliability on the
              road.
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
             
                Comprehensive Testing
                <span>
              We perform voltage and current testing under simulated real-world
              conditions, checking for optimal torque, rotation speed, and
              electrical output. </span>{" "}
            </p>
            <p>
              {" "}
            
                Precision Repairs
                <span>
              : Our skilled technicians use OEM-grade parts and advanced tools
              to ensure every repair is performed with accuracy. </span>{" "}
            </p>
            <p>
              {" "}
             
                Environmentally-Friendly Solutions
                <span>
              : In addition to repairs, our reconditioning services minimize
              waste by refurbishing existing motors, offering a sustainable
              alternative to full replacements. </span>{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Section Divide */}

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">
              Common Signs of Starter Motor Problems
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
              It's important to recognize the early warning signs of a failing
              starter motor so that you can avoid inconvenient breakdowns. Look
              out for these symptoms:
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
             
                Clicking or Grinding Noise
                <span>
              : If you hear a clicking sound or grinding noise when turning the
              key, it could indicate a problem with the starter motor’s solenoid
              or gears.  </span>{" "}
            </p>
            <p>
              {" "}
             
                Engine Cranks Slowly or Not at All
                <span>
              : If the engine turns over very slowly or doesn't crank at all,
              your starter motor may be struggling to provide the necessary
              power. </span>{" "}
            </p>
            <p>
              {" "}
              
                Intermittent Starting Issues
                <span>
              : If your car starts fine one day but struggles the next, this
              inconsistency could point to a worn or faulty starter motor. </span>{" "}
            </p>
            <p>
              {" "}
            
                Smoke or Burning Smell
                <span>
              : A burnt smell or visible smoke could indicate an overheated
              starter motor, often caused by electrical issues or excessive
              wear.</span>{" "}
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
              At GenuineServe, we service and provide replacement parts for
              starter motors across a wide range of automotive brands, ensuring
              seamless compatibility and top performance. Some of the brands we
              work with include:
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
              As an authorized Bosch service center, we also guarantee the use
              of genuine parts and manufacturer-recommended practices for all
              Bosch-related starter motor repairs and replacements
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">
              Why Choose GenuineServe for Starter Motor Services?
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
              : Our team consists of highly trained specialists with years of
              experience in automotive electrical systems, including complex
              starter motor repairs.  </span>{" "}
            </p>
            <p>
              {" "}
           
                ISO 9001:2015 Certified
                <span>
              : We adhere to stringent quality standards, ensuring all our
              services meet industry best practices.</span>{" "}
            </p>
            <p>
              {" "}
            
                State-of-the-Art Facilities
                <span>
              : Our workshop is equipped with the latest diagnostic and repair
              tools, allowing us to handle even the most complex starter motor
              issues efficiently. </span>{" "}
            </p>
            <p>
              {" "}
            
                Quick Turnaround Time
                <span>
              : We understand the importance of getting your vehicle back on the
              road, which is why we prioritize fast, reliable service without
              compromising quality. </span>{" "}
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

export default PdStarterMotor;
