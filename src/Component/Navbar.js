import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import EnquiryModal from "./EnquiryModal";
import "../Style/Navbar.css";
import Logo from "../Assets/logo.jpg";
import BOSCH from "../Assets/bos1.jpg";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const handleCallClick = () => {
    window.location.href = "tel:+91 9731303030"; // Replace with your phone number
  };
  const handleCallClick1 = () => {
    window.location.href = "tel:+91 8971137456"; // Replace with your phone number
  };
  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };
 
  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleActiveLink = (path) => {
    setActiveLink(path);
  };

  const mobile = window.innerWidth <= 768;
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918971137456"; // Replace with your desired phone number
    const message = "Hello! I need some help."; // Optional pre-filled message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <>
      {!mobile ? (
        <div className="navbar4">
          <div className="navbar-first">
            <img src={Logo} className="nav-img" alt="Logo" />
            <img src={BOSCH} alt="Logo" height={72}/>
          
          </div>
          <div className="navbar-second">
         
            <div style={{marginTop:"-29px"}}>
            <p className="bosh-navbar">BOSCH Authorised Service Centre</p>
              <div className="link-container">
                <Link
                  to="/"
                  onClick={() => handleActiveLink("/")}
                  className={activeLink === "/" ? "active-link" : ""}
                >
                  <p>Home</p>
                </Link>
                <Link
                  to="/aboutus"
                  onClick={() => handleActiveLink("/aboutus")}
                  className={activeLink === "/aboutus" ? "active-link" : ""}
                >
                  <p>About Us</p>
                </Link>
                <Link
                  to="/refurbished"
                  onClick={() => handleActiveLink("/refurbished")}
                  className={
                    activeLink === "/refurbished" ? "active-link" : ""
                  }
                >
                  <p>OE-RECON</p>
                </Link>
                <Link
                  to="/productandservice"
                  onClick={() => handleActiveLink("/productandservice")}
                  className={
                    activeLink === "/productandservice" ? "active-link" : ""
                  }
                >
                  <p>Product & Services</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-third-sec">
            <button onClick={toggleModal} className="enquiry-button">
              Enquiry Now
            </button>
            <div className="call-us">
              <button onClick={handleCallClick}>Call Us</button>
            </div>
            {/* <div
              onClick={() => handleActiveLink("/contactus")}
              className={
                activeLink === "/contactus" ? "active-link1" : "contact"
              }
            >
             
              <IoIosCall
                className={
                  activeLink === "/contactus" ? "active-link2" : "contact1"
                }
              />
              <Link to={"/contactus"}>
                <p
                  className={
                    activeLink === "/contactus" ? "active-link24" : "cont222"
                  }
                >
                  Contact Us
                </p>
              </Link>
            </div> */}
          </div>
        </div>
      ) : (
        <>
        <nav className="navbar1">
          <div className="logo">
          
            <Link to="/">
              <img src={Logo} className="nav-img" alt="Logo" />
            </Link>
          
          </div>
          <div className="hamburger" onClick={handleMenuToggle}>
            {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={closeMobileMenu}
          >
            <li>
              <Link
                to="/"
                onClick={() => {
                  closeMobileMenu();
                  handleActiveLink("/");
                }}
                className={activeLink === "/" ? "active-link" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                onClick={() => {
                  closeMobileMenu();
                  handleActiveLink("/aboutus");
                }}
                className={activeLink === "/aboutus" ? "active-link" : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/productandservice"
                onClick={() => {
                  closeMobileMenu();
                  handleActiveLink("/productandservice");
                }}
                className={
                  activeLink === "/productandservice" ? "active-link" : ""
                }
              >
                Products & Services
              </Link>
            </li>
            <li>
            <Link
                  to="/refurbished"
                  onClick={() => handleActiveLink("/refurbished")}
                  className={
                    activeLink === "/refurbished" ? "active-link" : ""
                  }
                >
                  <p>OE-RECON</p>
                </Link>
            </li>
         
            <li>
              <Link
                to="/contactus"
                onClick={() => {
                  closeMobileMenu();
                  handleActiveLink("/contactus");
                }}
                className={activeLink === "/contactus" ? "active-link" : ""}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="call-container" onClick={handleCallClick1}>
                  <i class="fa-solid fa-phone"></i>
                  </div>
        </nav>
        <div className="second-logo">
              <img src={BOSCH} alt="Logo" />
            </div>
             <p className="bosh-navbar">BOSCH Authorised Service Centre</p>
        <div className="location">
         
          <div className="loc-div">
            <FaLocationDot style={{color:""}}/>
          </div>
         
          <div>
            <Link to={"https://maps.app.goo.gl/kPtAfqa86TrEbmeR8"} target="_blank" className="location-link"><p>5th Cross, LBF Road, Bengaluru-560004</p></Link>
          </div>
        </div>
        <div className="navbar-third-sec">
            <button onClick={toggleModal} className="enquiry-button1">
              Enquiry Now
            </button>
            </div>
       </>
      )}

      {showModal && <EnquiryModal onClose={toggleModal} />}
    </>
  );
};

export default Navbar;
