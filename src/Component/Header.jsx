import React from "react";
import "../Style/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Header() {
  const [activeLink, setActiveLink] = useState("/");
  const facebookId = "yourFacebookPageID"; // Replace with actual Facebook page ID
  const youtubeId = "yourYouTubeChannelID"; // Replace with actual YouTube channel ID
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919731303030"; // Replace with your desired phone number
    const message = "Hello! I need some help."; // Optional pre-filled message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  const handleCallClick1 = () => {
    window.location.href = "tel:+91 8971137456"; // Replace with your phone number
  };
  const handleActiveLink = (path) => {
    setActiveLink(path);
  };
  return (
    <div className="head">
      <div className="head-container">
        <div className="location">
          <div>
            <i
              class="fa-solid fa-location-dot"
              style={{ color: "#C51212", fontSize: "24px",marginBottom:"11px" }}
            ></i>
          </div>
          <div>
            <Link to={"https://maps.app.goo.gl/kPtAfqa86TrEbmeR8"} target="_blank"><p>5/9, 5th Cross, LBF Road, Bengaluru-560004</p></Link>
          </div>
        </div>
        <div className="contact-detail">
                <div className="call-container">
                  <i class="fa-solid fa-phone"></i>
                 <div className="call">
                  <div>
                  <p >
                  "Call or Text" -
                  </p>
                  </div>
                  <div>
              
              <p className="number" onClick={handleCallClick1}>+91 8971137456</p>
              </div>
                 </div>
                
                   
                 
                </div>
                <div>
                  <Link
                    to="/contactus"
                    onClick={() => handleActiveLink("/contactus")}
                    className={activeLink === "/contactus" ? "active-link" : "conta-header"}
                  >
                    <p className="contact-link">Contact Us</p>
                  </Link>
                </div>
                <div className="whatsapp-container1" onClick={handleWhatsAppClick}>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
              </div>
        <div className="right-sec">
          <div>
            <p>Follow us on Social Media</p>
          </div>
          <div className="icon-container">
            {/* <a
              href={`https://www.facebook.com/${facebookId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a> */}
            <Link>
            <FaFacebook style={{fontSize:"22px",color:"blue"}}/>
            </Link>
           
          </div>
          <div className="icon-container">
            {/* <a
              href={`https://www.youtube.com/channel/${youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a> */}
             <Link>
            <FaYoutube style={{fontSize:"22px",color:"red"}}/>
            </Link>
          </div>
        </div>
      </div>
      <div className="whatsapp-container" onClick={handleWhatsAppClick}>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
    </div>
  );
}

export default Header;
