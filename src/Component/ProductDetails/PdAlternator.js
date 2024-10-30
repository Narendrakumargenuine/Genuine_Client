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
              Additionally, as an authorized service center for Bosch, you can
              trust us for genuine parts and factory-standard repairs.
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

export default ProductDetails;
