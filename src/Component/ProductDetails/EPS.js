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
import { MdOutlineAttachFile } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.jpg";
import "../../Style/ProductDetails.css";
import { useParams } from "react-router-dom";
import FAQs from "../Faqs";
import Navbar from "../Navbar";
import Footer from "../Footer";
import alter1 from "../../Assets/EPS/image1.png";
import alter2 from "../../Assets/EPS/image2.png";
import alter3 from "../../Assets/EPS/image3.png";
import section1 from "../../Assets/EPS/section4.png"
import section2 from "../../Assets/EPS/section3.png"
import section3 from "../../Assets/EPS/section2.png"
import section4 from "../../Assets/EPS/section1.png"
import Service9 from "../../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
import PdSlider from './PdSlider';

const EPS = () => {
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
           <h1 className='vertical-text stroke'>EPS Motors</h1>
           <PdSlider images={imageData}/>
           <h1 style={{textAlign:"center",fontSize:"16px"}}>Precision Control for Effortless Steering</h1>
          </div>:
        <div className="product-details-content">
        <div>
           <h1 className="vertical-text stroke">EPS Motors</h1>
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
           <h1 className="head-desc">Precision Control for Effortless Steering</h1>
      </div>}
      <div className="product-details-text">
        <p className="product-para">
          At GenuineServe, we specialize in the repair and replacement of
          Electric Power Steering (EPS) motors, ensuring smooth, effortless
          steering for your vehicle. EPS motors play a critical role in modern
          vehicles by providing precise control over steering without relying on
          traditional hydraulic systems. Whether you are experiencing increased
          steering effort or abnormal steering behavior, our expert team is here
          to diagnose and resolve any issues with your EPS motor
        </p>
      </div>

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">Our EPS Motor Services</h1>
            <p
              style={{
                textAlign: "center",
                color: "#8f8989",
                fontSize: "10px",
                marginBottom: "10px",
              }}
            >
              We offer a comprehensive range of services designed to keep your
              electric power steering system running at its best:
            </p>
          </div>
        </div>
      </div>
      <div className="first-second-section1">
      <div className="first-second-aboutus1">
          <div>
            <p>
              EPS Motor Diagnostics
              <span>
                {" "}
                : Using advanced diagnostic equipment, we quickly identify any
                issues with the EPS motor, such as electrical faults, sensor
                problems, or motor wear.
              </span>
            </p>
            <p>
              EPS Motor Repair and Reconditioning
              <span>
                : Whether it’s worn-out brushes, faulty bearings, or electrical
                issues, we provide expert repair services. In cases where the
                motor can be reconditioned, we restore it to optimal working
                condition, ensuring smooth steering assistance.
              </span>
            </p>
            <p>
              EPS Motor Replacement
              <span>
                : If the motor is beyond repair, we offer replacement EPS motors
                from leading brands like Bosch, Valeo, and Denso. Our
                replacements meet or exceed OEM standards, ensuring a
                long-lasting solution.
              </span>
            </p>
            <p>
              Preventive Maintenance
              <span>
                : To avoid sudden steering problems, we offer regular
                maintenance services, checking and servicing key components of
                your EPS motor and related systems.
              </span>
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
              Advanced Technology for EPS Motor Repairs
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
              , we understand the importance of precision and reliability in
              steering systems. That's why we employ cutting-edge technology to
              diagnose and repair EPS motors:
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
              Computerized Testing
              <span>
                : We use advanced diagnostic tools to measure the performance of
                the EPS motor under various driving conditions, ensuring precise
                fault detection.
              </span>
            </p>
            <p>
              High-Precision Repairs
              <span>
                : Our technicians are trained to handle the intricate components
                of EPS motors, ensuring accurate repairs and recalibration for
                perfect steering alignment.
              </span>
            </p>
            <p>
              OEM-Approved Parts
              <span>
                : For repairs and replacements, we use only certified,
                high-quality parts from trusted manufacturers, ensuring the
                longevity and reliability of your EPS motor.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Section Divide */}

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">Common Signs of EPS Motor Issues</h1>
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
              If your EPS motor begins to malfunction, it can significantly
              affect your ability to steer safely. Watch out for these warning
              signs:
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="first-second-section1">
       
      <div className="first-second-aboutus1">
          <div>
            <p>
              Increased Steering Effort
              <span>
                : If steering becomes difficult, especially at low speeds, it
                may indicate that the EPS motor is not providing enough
                assistance.
              </span>
            </p>
            <p>
              Steering Warning Light
              <span>
                : If the EPS warning light appears on your dashboard, it could
                indicate a fault in the power steering motor or related sensors.
              </span>
            </p>
            <p>
              Intermittent Loss of Power Steering
              <span>
                : If the power steering assistance cuts out intermittently or
                suddenly, there may be an issue with the EPS motor or the
                electrical system.
              </span>
            </p>
            <p>
              Steering Feels Unstable or Jerky
              <span>
                : A faulty EPS motor can cause the steering wheel to feel
                erratic, with jerky or inconsistent movements, especially during
                turns.
              </span>
            </p>
            <p>
              Strange Noises During Steering
              <span>
                : If you hear clicking, whining, or grinding noises when turning
                the wheel, it could be a sign of internal motor damage or wear.
              </span>
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
              At GenuineServe, we service EPS motors from a wide range of
              vehicle brands, ensuring seamless compatibility and expert repairs
              no matter the make or model. Some of the brands we work with
              include:
            </p>
          </div>
        </div>
      </div>
      <div className="premium-service11">
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
                <img
                  src={slide.src1}
                  alt={`Slide ${index + 1} Image 2`}
                  className="carousel-image1"
                />
                <img
                  src={slide.src2}
                  alt={`Slide ${index + 1} Image 3`}
                  className="carousel-image1"
                />
              </div>
            ))}
          </div>
        </div>
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
              of genuine parts and industry-leading repair standards for
              Bosch-related EPS systems.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">
              Why Choose GenuineServe for EPS Motor Services?
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
              Expert Technicians
              <span>
                : Our team consists of highly trained professionals with
                specialized knowledge in EPS motors and vehicle steering
                systems.
              </span>
            </p>
            <p>
              ISO 9001:2015 Certified
              <span>
                : We adhere to international quality standards, ensuring all our
                services meet or exceed customer expectations.
              </span>
            </p>
            <p>
              State-of-the-Art Facilities
              <span>
                : Our workshop is equipped with the latest diagnostic tools and
                technology, allowing us to deliver precise and reliable EPS
                motor repairs.
              </span>
            </p>
            <p>
              Fast Turnaround Times
              <span>
                : We know how essential steering is to your vehicle’s operation,
                so we prioritize quick, efficient service without compromising
                on quality.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="contact-container1">
            <div className="contact-first-section">
                <div className="first-div1">
                    <div className="input-group">
                        {/* <label htmlFor="fullName">Enter Your Full Name *</label> */}
                        <input id="fullName" placeholder="Enter Your Full Name" required />
                    </div>

                    <div className="input-group">
                        {/* <label htmlFor="contactNumber">Enter Your Contact Number *</label> */}
                        <input id="contactNumber" placeholder="Enter Your Contact Number" required />
                    </div>

                    <div className="input-group">
                        {/* <label htmlFor="email">Enter Your Email *</label> */}
                        <input id="email" placeholder="Enter Your Email" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="description">Queries if any (optional)</label>
                        <textarea id="description" placeholder="Description" rows="4" required></textarea>
                    </div>

                    <div className="input-group">
            {/* Hidden file input */}
            <input
              id="fileUpload"
              type="file"
              accept="image/*"
              style={{ display: "none" }} // Hide the default file input
              onChange={(e) => console.log(e.target.files[0])} // Handle the file selection here
              required
            />

            {/* Custom button to trigger file upload */}
            <button
              type="button"
              onClick={() => document.getElementById("fileUpload").click()}
              className="upload-button"
            >
              <MdOutlineAttachFile size={25} />
              Attach Product Image
            </button>
          </div>

                    <button type="submit">Submit</button>
                </div>
                {/* <div className="second-div">
                    <div className="map-here"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62204.23025164141!2d77.5593344!3d12.9869159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e716408af1%3A0x275f98002bf46061!2sB.%20W.%20Lions%20Super%20Speciality%20Eye%20Hospital!5e0!3m2!1sen!2sin!4v1729772137325!5m2!1sen!2sin"  style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div> */}
            </div>
        </div>

      <FAQs />
      <Footer />
    </div>
  );
};

export default EPS;
