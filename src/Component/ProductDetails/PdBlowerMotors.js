import React, { useState, useEffect } from 'react';
import Service0 from "../../Assets/ServiceImage/download 6.png";
import Service1 from "../../Assets/ServiceImage/download 8.png";
import Service2 from "../../Assets/ServiceImage/download 9.png";
import Service3 from "../../Assets/ServiceImage/download 10.png";
import Service4 from "../../Assets/ServiceImage/download 11.png";
// import Service5 from "../../Assets/ServiceImage/Group 95.png";
import Service6 from "../../Assets/ServiceImage/IMG-20240813-WA0038.png";
import Service7 from "../../Assets/ServiceImage/pngegg (11) 1.png";
import Service8 from "../../Assets/ServiceImage/pngegg (12) 1.png";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.jpg"
import '../../Style/ProductDetails.css';
import { useParams } from 'react-router-dom';
import FAQs from "../Faqs";
import Navbar  from "../Navbar";
import Footer from "../Footer";
import alter1 from "../../Assets/BlowMotor/image3.png"
import alter3 from "../../Assets/BlowMotor/image1.png"
import alter2 from "../../Assets/BlowMotor/image2.png"
import { MdOutlineAttachFile } from "react-icons/md";
import section1 from "../../Assets/BlowMotor/section1.png"
import section2 from "../../Assets/BlowMotor/section2.png"
import section3 from "../../Assets/BlowMotor/section3.png"
import section4 from "../../Assets/BlowMotor/section4.png"
import frame from "../../Assets/Alternator/Frame 563.png"
import Service9 from "../../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
import PdSlider from './PdSlider';
const PdAcComp = () => {
   
    const isMobile = window.innerWidth <= 768;
    const slides = [
        { src: Service0, src1: Service1, src2: Service2 },
        { src: Service3, src1: Service4, src2: Service6 },
        { src: Service7, src1: Service8,  src2: Service9}
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
           <h1 className='vertical-text stroke'>Blower Motors</h1>
           <PdSlider images={imageData}/>
           <h1 style={{textAlign:"center",fontSize:"16px"}}>Efficient Climate Control for a Comfortable Ride</h1>
          </div>:
        <div className="product-details-content">
        <div>
           <h1 className='vertical-text stroke'>Blower Motors</h1>
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
           <h1 className="head-desc">Efficient Climate Control for a Comfortable Ride</h1>
      </div>}
     <div className='product-details-text'>
        <p className="product-para">
        At GenuineServe, we specialize in the repair, maintenance, and replacement of blower motors, an essential component of your vehicle's heating, ventilation, and air conditioning (HVAC) system. Blower motors control the airflow in your vehicle’s cabin, ensuring that warm or cool air is distributed evenly throughout. Whether your blower motor is failing to function or making unusual noises, our team of experts is equipped to diagnose and resolve any issues quickly and efficiently.
       </p>
     </div>

     <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Our Blower Motor Services</h1>
                    <p style={{textAlign:"center",color:"#8f8989",fontSize:"10px",marginBottom:"10px"}}>We provide a full range of services to keep your blower motor running smoothly, ensuring a comfortable driving experience regardless of the weather:
                    </p>
                    </div>
                    </div>
     </div>

     <div className="first-second-section1">
              <div className="first-second-aboutus1">
                  <div>
                    <p> Blower Motor Diagnostics <span>:Our technicians use advanced diagnostic tools to identify problems with your blower motor, including electrical faults, mechanical wear, and issues with motor speed control.</span>
                      </p>
                    <p> Blower Motor Repair and Reconditioning <span>: We offer expert repair services for blower motors, addressing common issues like faulty bearings, worn-out brushes, or malfunctioning resistors. Where applicable, we also provide reconditioning services to extend the lifespan of your blower motor.</span>
                     </p>
                    <p> Blower Motor Replacement <span>:If your blower motor is beyond repair, we provide high-quality replacements from leading brands such as Bosch, Valeo, and Denso, ensuring optimal performance and longevity.</span>
                    </p>
                    <p>Preventive Maintenance <span> :Routine maintenance services include cleaning, lubrication, and inspection of the blower motor and associated components to ensure efficient operation and avoid future failures.</span>
                   </p>
                  </div>
              </div>
            <div className="imga-aboutus11">
                <img src={section1}/>
              </div>
            </div>

            
     <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">State-of-the-Art Blower Motor Testing and Repair
                    </h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}><span style={{color:"#064c1b",fontWeight:"bold"}}>At GenuineServe</span>, we combine technical expertise with the latest technology to ensure precise blower motor diagnostics and repairs. Our goal is to restore your vehicle's climate control system to peak performance as quickly and reliably as possible.
                    </p>
                    </div>
                    </div>
     </div>

     <div className="first-second-section1">
     <div className="imga-aboutus11">
                <img src={section2}/>
              </div>
              <div className="first-second-aboutus1">
            
                  <div>
                    <p> Advanced Diagnostics <span>: Using computerized equipment, we simulate various fan speeds and environmental conditions to identify any issues affecting your blower motor’s performance.</span>
                  </p>
                  <p> High-Quality Repairs <span>: We use OEM-approved parts to repair damaged components, such as motor resistors, brushes, or control modules, ensuring long-term reliability.</span>
                    </p>
                   <p> Complete Testing <span>: After repairs or replacements, we thoroughly test the blower motor to ensure it delivers consistent airflow and maintains proper speed control under various operating conditions.</span>
                   </p>
                  </div>
              </div>
          
            </div>
        {/* Section Divide */}

        <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Common Signs of Blower Motor Problems
                    </h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>A malfunctioning blower motor can affect your vehicle's comfort by disrupting airflow and climate control. Here are some common symptoms to watch for:
                    </p>
                    </div>
                    </div>
     </div>

{/* Content Section */}
     <div className="first-second-section1">
    
              <div className="first-second-aboutus1">
            
                  <div>
                    <p>Weak or No Airflow  <span>: If the blower motor is failing, you may experience weak or inconsistent airflow, or in some cases, no air at all coming from the vents, even when the AC or heater is turned on.</span>
                   </p>

                  <p> Unusual Noises <span>: A noisy blower motor can be a sign of worn-out bearings, debris in the system, or a failing motor. Grinding, squeaking, or rattling sounds are common indicators of a problem.</span>
                  </p>
                 
                   <p> Inconsistent Fan Speeds<span> : If the blower motor only works at certain speeds or fails to adjust according to the settings, there may be an issue with the blower motor resistor or control module.</span>
                  </p>

                   <p> Burning Smell from Vents <span>:A burning smell coming from your vehicle's vents can indicate overheating or an electrical issue with the blower motor, requiring immediate attention.</span>
                   </p>
                   <p> Blower Motor Doesn't Turn Off<span> : If the blower motor continues running even after the vehicle is turned off, this may be due to an electrical fault or malfunction in the HVAC control system.</span>
                    </p>
                  </div>
              </div>
              <div className="imga-aboutus11">
                <img src={section3}/>
              </div>
            </div>


            <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>If you notice any of these symptoms, it's important to have your blower motor inspected and serviced promptly to prevent further damage and ensure your comfort on the road.
            </p>
            {/* SectionClose */}
            <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Multi-Brand Compatibility</h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>At GenuineServe, we service and replace blower motors for a wide range of vehicle brands, ensuring that no matter what you drive, we can provide the right solution for your climate control system. Brands we work with include:
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
                    <div >
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"-10px",fontSize:"14px"}}>and many more...

                   </p>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"0px",fontSize:"14px",marginBottom:"10px"}}>As an authorized Bosch service center, we also guarantee the use of genuine parts and manufacturer-approved repair techniques for all Bosch-related blower motor services.
               </p>
                    </div>
                    </div>
     </div>
     <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Why Choose GenuineServe for Blower Motor Services?                  </h1>
                   
                    </div>
                    </div>
     </div>
     <div className="first-second-section1">
     <div className="imga-aboutus11">
                <img src={section4}/>
              </div>
              <div className="first-second-aboutus1">
            
                  <div>
                    <p> Expert Technicians<span> : Our team consists of highly trained professionals with extensive experience in diagnosing and repairing blower motors and other HVAC components.</span>
                   
                 </p>
                  <p> ISO 9001:2015 Certified <span>: Our commitment to quality is reflected in our adherence to international standards, ensuring reliable, high-quality repairs.</span>
                  
                
                   </p>
                   <p> State-of-the-Art Facilities <span>: We use the latest diagnostic and repair tools to deliver precise and efficient blower motor services, restoring your vehicle’s climate control system in no time.</span>
                   
                    </p>
                     <p>Quick Turnaround Time  <span>: We understand the importance of maintaining a comfortable vehicle, which is why we prioritize fast, efficient service to get your blower motor back in working order.</span>
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
     <FAQs/>
     <Footer/>
    </div>
  );
};

export default PdAcComp;
