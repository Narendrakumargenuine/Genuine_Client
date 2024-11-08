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
import PdContact from "../PdContact";
import Logo from "../../Assets/logo.jpg"
import PremiumSection from '../PremiumSection';
import '../../Style/ProductDetails.css';
import { useParams } from 'react-router-dom';
import FAQs from "../Faqs";
import Navbar  from "../Navbar";
import Footer from "../Footer";
import alter1 from "../../Assets/ACCompressor/download 4.png"
import alter2 from "../../Assets/ACCompressor/images3.png"
import alter3 from "../../Assets/ACCompressor/image1.png"
import section1 from "../../Assets/ACCompressor/section1.png"
import section2 from "../../Assets/ACCompressor/section2.png"
import section3 from "../../Assets/ACCompressor/section3.png"
import section4 from "../../Assets/ACCompressor/section4.png"
import PdSlider from './PdSlider';
import { MdOutlineAttachFile } from "react-icons/md";
import frame from "../../Assets/Alternator/Frame 563.png"
import Service9 from "../../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";


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
           <h1 className='vertical-text stroke'>AC Compressor</h1>
           <PdSlider images={imageData}/>
           <h1 style={{textAlign:"center",fontSize:"16px",width:"95%",margin:"auto"}}>Keeping Your Vehicle Cool and Comfortable</h1>
          </div>:
        <div className="product-details-content">
        <div>
           <h1 className='vertical-text stroke'>AC Compressor</h1>
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
           <h1 className="head-desc">Keeping Your Vehicle Cool and Comfortable</h1>
      </div>}
     <div className='product-details-text'>
        <p className="product-para">
        At GenuineServe, we offer specialized services for AC compressors, ensuring your vehicle’s air conditioning system runs efficiently, providing cool air during the hottest days. The AC compressor is the heart of your vehicle’s air conditioning system, responsible for circulating refrigerant and maintaining the cooling cycle. Whether you’re facing a complete AC breakdown or reduced cooling performance, our team of experts is here to provide professional diagnosis, repair, and replacement services for your AC compressor.
        </p>
     </div>

     <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Our AC Compressor Services</h1>
                    <p style={{textAlign:"center",color:"#8f8989",fontSize:"10px",marginBottom:"10px"}}>We offer a wide range of services to ensure your vehicle’s AC system stays in top condition:
                    </p>
                    </div>
                    </div>
     </div>

     <div className="first-second-section1">
              <div className="first-second-aboutus1">
                  <div>
                    <p> AC Compressor Diagnostics<span> : Using advanced diagnostic equipment, we thoroughly assess the condition of your AC compressor to identify issues such as refrigerant leaks, electrical faults, or mechanical wear.</span>
                     </p>
                    <p> AC Compressor Repair and Reconditioning<span> : If your AC compressor is not functioning properly, we offer expert repairs, including the replacement of damaged components like seals, valves, or clutches. For cases where the compressor can be restored, we offer reconditioning services to ensure it works like new.</span>
                     </p>
                    <p> AC Compressor Replacement<span> : In cases where repair is not feasible, we provide high-quality replacements from trusted brands like Bosch, Valeo, Denso, and others, ensuring optimal cooling performance and reliability.</span>
                     </p>
                    <p> Preventive Maintenance<span> : Regular maintenance can help extend the life of your AC compressor. Our services include refrigerant recharge, inspection for leaks, and cleaning to prevent future issues.</span>
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
                    <h1 className="first-h31">Advanced Technology for AC Compressor Repairs</h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}><span style={{color:"#064c1b",fontWeight:"bold"}}>At GenuineServe</span>,we use state-of-the-art technology and tools to ensure precise, high-quality repairs and replacements for your vehicle’s AC compressor:
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
                    <p> Leak Detection Tools<span> : We use specialized equipment to detect refrigerant leaks and other AC system issues, ensuring accurate diagnosis before proceeding with repairs.</span>
                    </p>
                  <p> Comprehensive Testing<span> : Our technicians perform performance tests to measure the compressor’s pressure, temperature, and cooling efficiency, ensuring it meets OEM standards.</span>
                   </p>
                   <p> OEM-Approved Parts<span> : We use certified replacement parts from leading manufacturers, ensuring your AC compressor performs reliably and efficiently for years to come.</span>
                     </p>
                  </div>
              </div>
          
            </div>
        {/* Section Divide */}

        <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Signs of AC Compressor Problems
                    </h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>A faulty AC compressor can affect your vehicle’s cooling system, making driving uncomfortable, especially in warm weather. Look out for these warning signs of AC compressor failure:
                    </p>
                    </div>
                    </div>
     </div>

{/* Content Section */}
     <div className="first-second-section1">
    
              <div className="first-second-aboutus1">
            
                  <div>
                    <p> Weak or No Cooling<span> : If your air conditioner blows warm or barely cool air, it may indicate that the AC compressor is not functioning properly, likely due to insufficient refrigerant circulation.</span>
                   </p>
                  <p> Loud Noises During Operation<span> : Grinding, squealing, or rattling noises from the AC compressor could indicate internal damage such as worn-out bearings or clutches.</span>
                    </p>
                   <p> Compressor Clutch Not Engaging<span> : If the compressor clutch does not engage when the AC is turned on, the compressor may be malfunctioning or there may be an issue with the electrical system.</span>
                   </p>
                   <p> Refrigerant Leaks<span> : Leaks in the AC compressor can reduce its ability to cool effectively. You may notice hissing sounds or visible refrigerant leaks under the vehicle.</span>
                   </p>
                   <p> Foul Smell from Vents<span> : A musty or burning smell coming from your AC vents may indicate that the compressor is overheating or there’s mold buildup due to moisture retention, a common symptom of compressor inefficiency.</span>
                   </p>
                  </div>
              </div>
              <div className="imga-aboutus11">
                <img src={section3}/>
              </div>
            </div>


            <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>If you notice any of these signs, it’s important to have your AC compressor inspected as soon as possible to prevent further damage and costly repairs.
            </p>
            {/* SectionClose */}
            <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Multi-Brand Compatibility</h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>At GenuineServe, we service EPS motors from a wide range of vehicle brands, ensuring seamless compatibility and expert repairs no matter the make or model. Some of the brands we work with include:
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
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"0px",fontSize:"14px",marginBottom:"10px"}}>As an authorized Bosch service center, we ensure the highest standards of repair and service, using genuine parts for all Bosch-related AC systems.
               </p>
                    </div>
                    </div>
     </div>
     <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Why Choose GenuineServe for AC Compressor Services?                   </h1>
                   
                    </div>
                    </div>
     </div>
     <div className="first-second-section1">
     <div className="imga-aboutus11">
                <img src={section4}/>
              </div>
              <div className="first-second-aboutus1">
            
                  <div>
                    <p> Expert Technicians<span> :Our team consists of experienced professionals who specialize in diagnosing and repairing AC compressors and other vehicle cooling systems.</span>
                 </p>
                  <p> ISO 9001:2015 Certified<span> : We are committed to delivering high-quality services that meet international standards, ensuring customer satisfaction.</span>
                   </p>
                   <p> State-of-the-Art Facilities<span> : Our workshop is equipped with the latest diagnostic tools and repair equipment, allowing us to deliver precise and reliable AC compressor services.</span>
                     </p>
                     <p> Quick and Efficient Service<span> : We understand the discomfort of driving without a functioning AC, which is why we prioritize fast, efficient repairs and replacements to get your system back to working order.</span>
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
