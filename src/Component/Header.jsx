import React from "react";
import "../Style/header.css";

function header() {
  const facebookId = "yourFacebookPageID"; // Replace with actual Facebook page ID
  const youtubeId = "yourYouTubeChannelID"; // Replace with actual YouTube channel ID
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with your desired phone number
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
            <p>119 S Montclair Ave Brandon, FL 33511</p>
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
