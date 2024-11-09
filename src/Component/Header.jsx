import React from "react";
import "../Style/header.css";
import { Link } from "react-router-dom";
function header() {
  const facebookId = "yourFacebookPageID"; // Replace with actual Facebook page ID
  const youtubeId = "yourYouTubeChannelID"; // Replace with actual YouTube channel ID
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918971137456"; // Replace with your desired phone number
    const message = "Hello! I need some help."; // Optional pre-filled message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <div className="head">
      <div className="head-container">
        <div className="location">
          <div>
            <i
              class="fa-solid fa-location-dot"
              style={{ color: "#C51212", fontSize: "14px" }}
            ></i>
          </div>
          <div>
            <Link to={"https://maps.app.goo.gl/kPtAfqa86TrEbmeR8"} target="_blank"><p>5/9, 5th Cross, LBF Road, Bengaluru-560004</p></Link>
          </div>
        </div>
        <div className="right-sec">
          <div>
            <p>Follow us on Social Media</p>
          </div>
          <div className="icon-container">
            <a
              href={`https://www.facebook.com/${facebookId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="icon-container">
            <a
              href={`https://www.youtube.com/channel/${youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="whatsapp-container" onClick={handleWhatsAppClick}>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
    </div>
  );
}

export default header;
