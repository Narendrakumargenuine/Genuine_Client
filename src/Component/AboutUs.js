import React  from "react";
import "../Style/AboutUs.css"
import vision from "../Assets/about-first.png"
import "../Style/Contact.css";
import aboutus2 from "../Assets/aboutus-second.png"
import Footer from "./Footer";
import testimonial from "../Assets/testimonials.png"
import test from "../Assets/test1.png"
import test1 from "../Assets/test2.png"
import test2 from "../Assets/test3.png"
import FAQs from "./Faqs";
import Navbar  from "./Navbar";
import Logo from "../Assets/logo.jpg"
import '../Style/Home.css'
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
const AboutUs = ()=>{


    const isMobile = window.innerWidth <= 768;

    return(
        <div className="aboutus-container">
          <div className="aboutus-border"></div>
            <div className="aboutus-first-container">
            <div className="first-section">
                <h1 style={{color:"#05456c"}}>About us</h1>
                <p>
                At GenuineServe, our mission is to offer unparalleled auto electrical services that cater to all your vehicle needs. With over three decades of experience, our expert team has built a legacy of excellence, trust, and reliability in the automotive industry. Our passion for innovation and commitment to quality drive us to provide solutions that exceed our customers' expectations.</p>
            </div>
            <div className="first-first-section">
              <div className="first-first-aboutus">
                <div className="description-aboutus">
                <h1 className="first-h2"   style={{color:"#05456c"}}>1. Our vision and values</h1>
                <p><span style={{fontSize:"13px",fontWeight:"600"}}>Customer-Centric Approach</span> : We place our customers at the heart of everything we do, striving to deliver the highest level of satisfaction.
                </p>
                <p><span style={{fontSize:"13px",fontWeight:"600"}}>Innovation and Excellence</span> : We continuously seek to improve our services through innovative practices and cutting-edge technology.</p>
                <p><span style={{fontSize:"13px",fontWeight:"600"}}>Integrity and Transparency</span> : We believe in building long-term relationships based on trust, honesty, and transparency with our clients.</p>
                </div>
                </div>
              <div className="imga-aboutus">
                <img src={vision}/>
              </div>
            </div>


            <div className="first-second-section">
           { !isMobile?<div className="imga-aboutus1">
                <img src={aboutus2}/>
              </div>:""}
              <div className="first-second-aboutus">
                    <div >
                    <h1 className="first-h3"   style={{color:"#05456c"}}>2.Our Expertise</h1>
                    <p style={{textAlign:"center",color:"#8f8989",fontSize:"10px",marginBottom:"10px"}}>Comprehensive Autoelectrical Services</p>
                    </div>
                  <div>
                    <p>GenuineServe is not just a service provider; we are your one-stop solution for all auto electrical needs. From troubleshooting complex electrical issues to re-engineering parts for optimal performance, our expertise covers a wide range of automotive electrical systems.
                    </p>
                    <span style={{fontSize:"13px",fontWeight:"600"}}>What Sets Us Apart?</span>
                    <p> <span style={{fontSize:"13px",fontWeight:"600"}}>Precision Diagnosis</span> : Utilizing advanced diagnostic tools, we ensure accurate identification of electrical faults.</p>
                    <p> <span style={{fontSize:"13px",fontWeight:"600"}}>Custom Solutions</span> : Whether it’s a rare vintage car or the latest model, our team can handle all makes and models, providing customized repair and maintenance solutions.</p>
                    <p> <span style={{fontSize:"13px",fontWeight:"600"}}>Fast Turnaround</span> : We understand the importance of your time, which is why we offer quick and efficient service without compromising on quality.
                    </p>
                  </div>
              </div>
             {isMobile? <div className="imga-aboutus1">
                <img src={aboutus2}/>
              </div>:""}
            </div>

            <div className="first-third-section">
                <div className="first-third-first">
              
                    <h1 style={{fontSize:"16px",color:"#05456c"}}>3. Customer Testimonials</h1>
                    <p style={{textAlign:"center",color:"#8f8989",fontSize:"10px",marginBottom:"8px"}}>What Our Client Say About Us</p>
                    <p style={{fontSize:"11px"}}>At GenuineServe, customer satisfaction is our top priority. Here’s what some of our happy clients have to say:</p>
                </div>
                <div className="first-third-second">
                    {!isMobile?<div className="mobile-test1">
                       <img src={testimonial} height={280}/>
                    </div>:
                    <div className="mobile-testmonial">
                    <div>
                        <img src={test} width={300} height={300}/>
                    </div>
                    <div>
                    <img src={test1} width={300} height={300}/>
                    </div>
                    <div>
                    <img src={test2} width={300} height={300}/>
                    </div>
                    </div>}
                </div>
            </div>
            </div>
             {/* Contact Us */}
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
                        {/* <label htmlFor="fileUpload"></label> */}
                        <input id="fileUpload" type="file" accept="image/*" placeholder="Upload Image *" required />
                    </div>

                    <button type="submit">Submit</button>
                </div>
                {/* <div className="second-div">
                    <div className="map-here"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62204.23025164141!2d77.5593344!3d12.9869159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e716408af1%3A0x275f98002bf46061!2sB.%20W.%20Lions%20Super%20Speciality%20Eye%20Hospital!5e0!3m2!1sen!2sin!4v1729772137325!5m2!1sen!2sin"  style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div> */}
            </div>
        </div>
           {/* Contact End */}
            <FAQs/>
           <Footer/>
        </div>
    )
}

export default AboutUs;