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
import { MdOutlineAttachFile } from "react-icons/md";
import '../../Style/ProductDetails.css';
import { useParams } from 'react-router-dom';
import FAQs from "../Faqs";
import Navbar  from "../Navbar";
import Footer from "../Footer";
import alter1 from "../../Assets/AirSuspension/image1.png"
import alter3 from "../../Assets/AirSuspension/image2.png"
import alter2 from "../../Assets/AirSuspension/image3.png"
import section1 from "../../Assets/AirSuspension/section4.png"
import section2 from "../../Assets/AirSuspension/section3.png"
import section3 from "../../Assets/AirSuspension/section2.png"
import section4 from "../../Assets/AirSuspension/section1.png"
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
           <div className="aboutus-border"></div>
      <h2 className="product-details-heading">Product <span className="stroke">Details</span></h2>
      
      {/* Main Content Section */}
      {
        isMobile? <div className="product-details-content">
           <h1 className='vertical-text stroke'>Air Suspension Compressor</h1>
           <PdSlider images={imageData}/>
           <h1 style={{textAlign:"center",fontSize:"16px"}}>Smooth Rides with Precision Control</h1>
          </div>:
        <div className="product-details-content">
        <div>
           <h1 className='vertical-text stroke' style={{height:"40%",fontSize:"23px",margin:"auto",textAlign:"center"}}>Air Suspension Compressor</h1>
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
           <h1 className="head-desc"
           >Smooth Rides with Precision Control</h1>
      </div>}
     <div className='product-details-text'>
        <p className="product-para">
        At GenuineServe, we provide expert services for air suspension compressors, a critical component in maintaining the comfort and performance of your vehicle’s air suspension system. The air suspension compressor ensures the proper inflation of air springs, allowing for smooth rides, optimal ground clearance, and improved handling, especially in luxury and high-performance vehicles. Whether you’re facing issues like uneven ride height or a noisy compressor, our team is here to diagnose, repair, and replace your air suspension compressor efficiently.
       </p>
     </div>

     <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Our Air Suspension Compressors
                    Services</h1>
                    <p style={{textAlign:"center",color:"#8f8989",fontSize:"10px",marginBottom:"10px"}}>We offer comprehensive solutions to ensure your vehicle’s air suspension system operates flawlessly, enhancing both comfort and control:
                    </p>
                    </div>
                    </div>
     </div>

     <div className="first-second-section1">
              <div className="first-second-aboutus1">
                  <div>
                    <p> Air Suspension Compressor Diagnostics<span> : Our advanced diagnostic tools accurately identify any issues affecting your air suspension compressor, such as leaks, pressure loss, or electrical malfunctions.</span>
                      </p>
                    <p> Air Suspension Compressor Repair<span> : From fixing minor leaks to repairing faulty electrical connections, we provide professional repairs to restore your air suspension compressor to optimal performance.</span>
                       </p>
                    <p> AC Compressor Replacement <span>: If repairs are not possible, we offer high-quality replacements from trusted brands like Bosch, Arnott, WABCO, and Continental, ensuring long-term durability and smooth performance.</span>
                    </p>
                    <p> Preventive Maintenance <span>: We provide routine maintenance services, including air filter replacement, moisture removal, and pressure tests, to prolong the life of your air suspension compressor and prevent costly future repairs.</span>
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
                    <h1 className="first-h31">Cutting-Edge Technology for Air Suspension Compressor Repairs</h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}><span style={{color:"#064c1b",fontWeight:"bold"}}>At GenuineServe</span>, we utilize state-of-the-art equipment and expertise to ensure accurate diagnostics and repairs for air suspension compressors, ensuring your vehicle’s suspension system works smoothly under all conditions:
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
                    <p> Precision Diagnostics<span> : Our technicians use advanced computerized testing to assess compressor performance, checking for issues like pressure inconsistencies, motor failure, and air leaks.</span>
                  </p>
                  <p> OEM-Grade Parts <span>: We use only certified replacement parts, ensuring the repaired or replaced air suspension compressor meets or exceeds Original Equipment Manufacturer (OEM) standards.</span>
                    </p>
                   <p> Rigorous Testing <span>: After repair or replacement, we test the compressor under load conditions, simulating real-world driving scenarios to ensure reliable performance and optimal air spring pressure.</span>
                    </p>
                  </div>
              </div>
          
            </div>
        {/* Section Divide */}

        <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Common Signs of Air Suspension Compressor Problems
                    </h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>A malfunctioning air suspension compressor can affect your vehicle’s handling, comfort, and safety. Here are some signs that your air suspension compressor may need attention:
                    </p>
                    </div>
                    </div>
     </div>

{/* Content Section */}
     <div className="first-second-section1">
    
              <div className="first-second-aboutus1">
            
                  <div>
                    <p> Uneven Ride Height <span>: If one side of the vehicle appears lower than the other or the entire vehicle sits lower than usual, it could indicate a problem with the air suspension compressor.</span>
                   </p>

                  <p> Noisy Compressor Operation <span>: Loud or unusual sounds, such as rattling or humming, from the compressor may suggest internal motor damage or excessive strain on the unit.</span>
                   </p>
                   <p> Prolonged Compressor Running Time <span>: If the compressor runs for longer periods than normal or doesn't turn off, it may be struggling to build or maintain pressure, often due to air leaks or electrical issues.</span>
                  </p>

                   <p> Warning Light on Dashboards<span> : If your vehicle’s air suspension warning light appears on the dashboard, it could be due to low air pressure or a failing compressor.</span>
                    
                   </p>
                   <p> Stiff or Rough Ride <span>: A failing compressor may not supply adequate air pressure to the air springs, resulting in a rough, uncomfortable ride, especially on uneven roads.</span>
                    </p>
                  </div>
              </div>
              <div className="imga-aboutus11">
                <img src={section3}/>
              </div>
            </div>


            <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>If you notice any of these symptoms, it’s crucial to address the issue promptly to avoid further damage to your air suspension system and maintain a safe, comfortable driving experience.
            </p>
            {/* SectionClose */}
            <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Multi-Brand Compatibility</h1>
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"14px",marginBottom:"10px"}}>At GenuineServe, We service and replace air suspension compressors for a variety of automotive brands and models, ensuring seamless compatibility and excellent performance. Brands we work with include:
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
                    <p style={{width:"80%",margin:"auto",textAlign:"center",marginTop:"0px",fontSize:"14px",marginBottom:"10px"}}>As an authorized Bosch service center, we use genuine parts and industry-standard practices to guarantee the highest quality repairs and replacements for Bosch air suspension systems.
               </p>
                    </div>
                    </div>
     </div>
     <div>
                   <div className="first-second-aboutus11">
                    <div >
                    <h1 className="first-h31">Why Choose GenuineServe for Air Suspension Compressor Services?                  </h1>
                   
                    </div>
                    </div>
     </div>
     <div className="first-second-section1">
     <div className="imga-aboutus11">
                <img src={section4}/>
              </div>
              <div className="first-second-aboutus1">
            
                  <div>
                    <p> Expert Technicians<span> : Our team has extensive expertise in diagnosing and repairing air suspension systems, ensuring precise and effective solutions.</span>
                 
                     
                 </p>
                  <p> ISO 9001:2015 Certified <span>: Our commitment to quality is reflected in our adherence to international standards, guaranteeing reliable and consistent service.</span>
                  
                   
                   </p>
                   <p> State-of-the-Art Facilities <span>: We utilize the latest diagnostic tools and repair equipment to deliver fast, accurate services for air suspension compressors.</span>
                    </p>
                     <p> Fast Turnaround Time <span>: We prioritize efficiency in our services, ensuring your vehicle’s air suspension system is back to optimal performance as quickly as possible.</span>
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