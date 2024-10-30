import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import EnquiryModal from "./EnquiryModal";
import "../Style/Navbar.css";
import Logo from "../Assets/logo.jpg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

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
          </div>
          <div className="navbar-second">
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
              className={activeLink === "/productandservice" ? "active-link" : ""}
            >
              <p>Product & Services</p>
            </Link>
          </div>
          <div className="navbar-third">
            <button onClick={toggleModal} className="enquiry-button">Enquiry Now</button>
            <div  
                onClick={() => handleActiveLink("/contactus")}
                className={activeLink === "/contactus" ? "active-link1" : "contact"}>
             {/* cont2222 */}
              <IoIosCall   className={activeLink === "/contactus" ? "active-link2" : "contact1"}/>
              <Link
               to={"/contactus"} 
              >
                <p className={activeLink === "/contactus" ? "active-link24" : "cont222"}>Contact Us</p>
              </Link>
             
            </div>
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
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={closeMobileMenu}>
            <li>
              <Link
                to="/"
                onClick={() => { closeMobileMenu(); handleActiveLink("/"); }}
                className={activeLink === "/" ? "active-link" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                onClick={() => { closeMobileMenu(); handleActiveLink("/aboutus"); }}
                className={activeLink === "/aboutus" ? "active-link" : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/productandservice"
                onClick={() => { closeMobileMenu(); handleActiveLink("/productandservice"); }}
                className={activeLink === "/productandservice" ? "active-link" : ""}
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
                onClick={() => { closeMobileMenu(); handleActiveLink("/contactus"); }}
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
