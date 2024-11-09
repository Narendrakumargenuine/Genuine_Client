import React from "react";
import "../Style/Footer.css"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(

        <div className="footer-main">
            <div className="footer-first-div">
               <div className="footer-first-div-first">
                <div>
                    <strong>Find Us</strong>
                    <p>5/9, 5th Cross, LBF Road, Behind Lion's Eye Hospital, Doddanna Layout, Bengaluru-560004</p>
                </div>
                <div>
                    <strong>Phone</strong>
                    <p>+91 998617980, +91 9731303030, +91 8971137456</p>
                </div>
                <div>
                    <strong>Mail-Id</strong>
                    <p>genuineautobosch@gmail.com</p>
                </div>
               </div>
               <div className="footer-first-div-second">
                <div>
                    <strong>Products & Services</strong>
                </div>
                <div style={{}} className="second-product-ser">
                    <div>
                        <Link to={"/product/alternator"} className="product-service-div"><p>Alternator</p></Link>
                        <Link to={"/product/starter"} className="product-service-div"><p>Starter Motor</p> </Link>
                        <Link to={"/product/eps"} className="product-service-div"><p>EPS Motor</p> </Link>
                        <Link to={"/product/wiper"} className="product-service-div"><p>Wiper Motor</p> </Link>
                        <Link to={"/product/accompressor"} className="product-service-div"><p>AC Compressor</p> </Link>
                       
                    </div>
                    <div>
                    
                    <Link to={"/product/airsuspension"} className="product-service-div"><p>Air Suspension Compressor</p> </Link>
                    <Link to={"/product/blowermotor"} className="product-service-div"> <p>Blower Motor</p> </Link>
                    <Link to={"/product/liquidcooled"} className="product-service-div"> <p>Liquid Cooled Alternator</p> </Link>
                    </div>
    
                </div>
               </div>
               <div className="footer-first-div-third">
                <div><strong>Menu</strong></div>
                <div>
                
                <Link to={"/aboutus"} className="product-service-div"><p>About us</p></Link>
                <Link to={"/contactus"} className="product-service-div"><p>Contact us</p></Link>
                <Link to={"/faqs"} className="product-service-div"> <p>FAQs</p></Link>
                <Link to={"/privacypolicy"} className="product-service-div"> <p>Privacy Policy</p></Link>
                <Link to={"/termsandcondition"} className="product-service-div"> <p>Terms and Conditions</p></Link>
                </div>
               </div>
            </div>
            <div className="footer-second-div">
              <div>
                <p style={{color:"white",fontSize:"18px"}}>Follow Us On</p>
              </div>
              <div className="footer-seocnd-div-second">
                <div className="footer-second-div-second-first-border"></div>
                <div>
                <FaFacebookF style={{color:"white",fontSize:"25px"}}/>
                <FaInstagram style={{color:"white",fontSize:"25px"}}/>
                <FaXTwitter style={{color:"white",fontSize:"25px"}}/>
                <FaYoutube style={{color:"white",fontSize:"25px"}}/>
                <FaLinkedin style={{color:"white",fontSize:"25px"}}/>
                </div>
                <div className="footer-second-div-second-first-border"></div>
              </div>
             <div className="footer-bottom-border"></div>
            </div>
            <div className="footer-third-div">
               {/* <div className="footer-third-div-first">
                  <img src={mastercard}/>
                  <img src={master}/>
                  <img src={visa}/>
                  <img src={paypal}/>
               </div> */}
              <div className="last-footer-section">
                   <p>© 2024 GenuineServe. All Rights Reserved.</p>
             </div>
            </div>
        </div>
    )
}

export default Footer;