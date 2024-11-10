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
import PremiumSection from '../PremiumSection';
import PdContact from "../PdContact";
import Logo from "../../Assets/logo.jpg"
import '../../Style/ProductDetails.css';
import { useParams } from 'react-router-dom';
import FAQs from "../Faqs";
import Navbar  from "../Navbar";
import Footer from "../Footer";
import alter1 from "../../Assets/LiquidCooled/image3.png"
import alter3 from "../../Assets/LiquidCooled/image1.png"
import alter2 from "../../Assets/LiquidCooled/image2.png"
import section1 from "../../Assets/LiquidCooled/section1.png"
import { MdOutlineAttachFile } from "react-icons/md";
import section2 from "../../Assets/LiquidCooled/section2.png"
import section3 from "../../Assets/LiquidCooled/section3.png"
import section4 from "../../Assets/LiquidCooled/section4.png"
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
      <h2 className="product-details-heading">Product <span>Details</span></h2>
      
      {/* Main Content Section */}
      {
        isMobile? <div className="product-details-content">
           <h1 className='vertical-text' style={{height:"50%",margin:"auto",textAlign:"center"}}>Liquid Cooled Alternators</h1>
           <PdSlider images={imageData}/>
           <h1 style={{width:"98%",margin:"auto",textAlign:"center",fontSize:"16px"}}>High Efficiency for High Performance Vehicles</h1>
          </div>:
        <div className="product-details-content">
        <div>
           <h1 className='vertical-text' style={{height:"50%",margin:"auto",textAlign:"center"}}>Liquid Cooled Alternators</h1>
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
           <h1 className="head-desc">High Efficiency for High Performance Vehicles</h1>
      </div>}
     <div className='product-details-text'>
        <p className="product-para">
        At GenuineServe, we provide expert repair, maintenance, and replacement services for liquid cooled alternators, a crucial component in modern high-performance and heavy-duty vehicles. Unlike traditional air-cooled alternators, liquid cooled alternators are designed to handle higher electrical loads while maintaining optimal temperatures, ensuring consistent performance in demanding conditions. Whether your alternator is showing signs of failure or requires routine maintenance, our experienced team is here to provide fast, reliable solutions.
       </p>
     </div>

     <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Our Liquid Cooled Alternator Services</h1>
                    <p style={{textAlign:"center",color:"#8f8989",fontSize:"10px",marginBottom:"10px"}}>We offer a complete range of services to ensure your liquid cooled alternator operates efficiently, providing reliable power to your vehicle’s electrical systems:
                    </p>
                    </div>
                    </div>
     </div>

     <div className="first-second-section1">
              <div className="first-second-aboutus1">
                  <div>
                    <p> Liquid Cooled Alternator Diagnostics <span>: We use advanced diagnostic tools to identify issues with your liquid cooled alternator, including electrical faults, overheating, and coolant system problems.</span>
                     </p>

                    <p> Liquid Cooled Alternator Repair and Reconditioning <span>: Our skilled technicians can repair or recondition your alternator, addressing issues such as faulty bearings, worn brushes, or cooling system leaks, restoring the alternator to peak performance.</span>
                    </p>

                    <p> Liquid Cooled Alternator Replacement<span>: If repair is not feasible, we offer high-quality replacements from leading manufacturers like Bosch, Valeo, and Denso, ensuring that your vehicle continues to perform at its best.</span> 
                   </p>

                    <p> Preventive Maintenance <span>: We provide regular maintenance services for liquid cooled alternators, including coolant system checks, cleaning, and testing to prevent overheating and ensure long-term reliability.</span>
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
                    <h1 className="first-h31">Advanced Technology for Liquid Cooled Alternator Services
                    </h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}><span style={{color:"#064c1b",fontWeight:"bold"}}>At GenuineServe</span>, we combine cutting-edge technology with our deep expertise in automotive electrical systems to deliver precise, high-quality repairs for liquid cooled alternators. Our goal is to extend the life of your alternator while ensuring optimal performance.
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
                    <p>Comprehensive Testing <span> : We test alternators using computerized equipment that simulates real-world driving conditions, checking for voltage stability, current output, and cooling efficiency.</span>
                </p>


                  <p> OEM-Approved Parts <span>: For repairs and replacements, we use only certified, OEM-quality parts, ensuring that your liquid cooled alternator performs reliably under all conditions.</span>
                    </p>


                   <p> Expert Coolant System Diagnostics<span> : We also inspect and repair the cooling system associated with the alternator, including hoses, seals, and the radiator, to prevent overheating and ensure efficient temperature regulation.</span>
                   </p>
                  </div>
              </div>
          
            </div>
        {/* Section Divide */}

        <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Common Signs of Liquid Cooled Alternator Problems
                    </h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>A failing liquid cooled alternator can compromise your vehicle's performance and lead to more serious issues if not addressed promptly. Watch for these common signs that your alternator may need attention:
                    </p>
                    </div>
                    </div>
     </div>

{/* Content Section */}
     <div className="first-second-section1">
    
              <div className="first-second-aboutus1">
            
                  <div>
                    <p> Dimming or Flickering Lights <span>: If your headlights, dashboard lights, or interior lights dim or flicker while driving, it could indicate that your alternator is struggling to supply sufficient power.</span>
                   </p>

                  <p> Overheating Alternator <span>: If you notice the alternator or its surrounding components are unusually hot, or if you receive a temperature warning, it may be due to a failure in the cooling system or an overworked alternator.</span>
                  </p>
                 
                   <p> Electrical Failures <span>: If your vehicle’s electronic systems, such as power windows, infotainment systems, or climate control, start malfunctioning, it could be due to insufficient power generation by the alternator.</span>
                   </p>

                   <p>  Battery Warning Light <span>:If the battery warning light appears on your dashboard, it may not just be a battery issue but could signal a problem with the alternator’s power output.</span>
                  </p>
                   <p>Coolant Leaks <span> : If you notice coolant pooling under your vehicle or reduced coolant levels in your system, there may be a leak affecting the alternator’s cooling system, leading to overheating and potential failure.</span>
                    </p>
                  </div>
              </div>
              <div className="imga-aboutus11">
                <img src={section3}/>
              </div>
            </div>


            <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>If you experience any of these issues, it’s crucial to have your liquid cooled alternator inspected and serviced immediately to avoid further damage and costly repairs.

            </p>
            {/* SectionClose */}
            <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Multi-Brand Compatibility</h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>At GenuineServe, We service and replace liquid cooled alternators for a wide range of vehicle brands, ensuring compatibility and performance across all makes and models. Brands we work with include:
                    </p>
                    </div>
                    </div>
     </div>
     <div className="premium-service11">
        <PremiumSection/>
      </div>
        <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"-10px",fontSize:"14px"}}>and many more...

                   </p>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"0px",fontSize:"14px",marginBottom:"10px"}}>As an authorized Bosch service center, we ensure the use of genuine parts and factory-approved repair techniques for all Bosch-related liquid cooled alternator services.
               </p>
                    </div>
                    </div>
     </div>
     <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Why Choose GenuineServe for Liquid Cooled Alternator Services?
                    </h1>
                   
                    </div>
                    </div>
     </div>
     <div className="first-second-section1">
     <div className="imga-aboutus11">
                <img src={section4}/>
              </div>
              <div className="first-second-aboutus1">
            
                  <div>
                    <p> Specialized Expertise <span>: Our technicians have extensive experience working with liquid cooled alternators, providing accurate diagnostics and effective repairs.</span>
                   </p>

                  <p>ISO 9001:2015 Certified <span> : Our services meet international quality standards, ensuring reliable repairs that you can trust.</span>
                   </p>

                   <p>State-of-the-Art Facilities  <span>: Our workshop is equipped with the latest diagnostic and repair tools, allowing us to handle even the most complex liquid cooled alternator issues efficiently.</span>
                    </p>

                     <p>Quick Turnaround Time  <span>: We prioritize fast, efficient service to minimize downtime and get your vehicle back on the road as soon as possible.</span> 
                    </p>
                  </div>
              </div>
          
            </div>
            <div className="contact-container1">
      <PdContact/>
        </div>
     <FAQs/>
     <Footer/>
    </div>
  );
};

export default PdAcComp;
