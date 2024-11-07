import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import EnquiryModal from "./EnquiryModal";
import "../Style/Navbar.css";
import Logo from "../Assets/logo.jpg";
import BOSCH from "../Assets/bos1.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const handleCallClick = () => {
    window.location.href = "tel:+1234567890"; // Replace with your phone number
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

  return (
    <>
      {!mobile ? (
        <div className="navbar">
          <div className="navbar-first">
            <img src={Logo} className="nav-img" alt="Logo" />
            <div className="second-logo">
              <img src={BOSCH} alt="Logo" />
            </div>
          </div>
          <div className="navbar-second">
            <div>
              <div className="contact-detail">
                <div className="call-container">
                  <i class="fa-solid fa-phone"></i>
                  <p className="call" onClick={handleCallClick}>
                    "Call or Text" -{" "}
                    <span className="number">(813) 684-1556</span>
                  </p>
                </div>
                <div>
                  <Link
                    to="/contactus"
                    onClick={() => handleActiveLink("/contactus")}
                    className={activeLink === "/contactus" ? "active-link" : ""}
                  >
                    <p className="contact-link">Contact Us</p>
                  </Link>
                </div>
              </div>
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
                  to="/productandservice"
                  onClick={() => handleActiveLink("/productandservice")}
                  className={
                    activeLink === "/productandservice" ? "active-link" : ""
                  }
                >
                  <p>Refurbished</p>
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
              <button className="enquiry-button" onClick={toggleModal}>
                Enquiry
              </button>
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
        </nav>
      )}

      {showModal && <EnquiryModal onClose={toggleModal} />}
    </>
  );
};

export default Navbar;
