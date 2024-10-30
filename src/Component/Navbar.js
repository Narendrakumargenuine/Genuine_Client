import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { IoIosCall } from "react-icons/io";
import EnquiryModal from "./EnquiryModal";
import "../Style/Navbar.css"; // Make sure to import CSS for styling
import Logo from "../Assets/logo.jpg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation(); // Get the current path

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
          <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
  <p>Home</p>
</Link>
<Link to="/aboutus" className={location.pathname === "/aboutus" ? "active-link" : "non-about"}>
  <p>About Us</p>
</Link>
<Link to="/productandservice" className={location.pathname === "/productandservice" ? "active-link" : ""}>
  <p>Product & Services</p>
</Link>
          </div>
          <div className="navbar-third">
            <button onClick={toggleModal}>Enquiry Now</button>
            <div >
            <div className={location.pathname === "/contactus" ? "active-link1" : "non-active"}> <IoIosCall style={{ marginTop: "3px", marginRight: "3px", fontSize: "13px" }} />
              <Link to="/contactus" >
                <p>Contact Us</p>
              </Link></div>
             
            </div>
          </div>
        </div>
      ) : (
        <nav className="navbar1">
          <div className="logo">
            <Link to="/">
              <img src={Logo} className="nav-imag" alt="Logo" />
            </Link>
          </div>
          <div className="hamburger" onClick={handleMenuToggle}>
            {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={closeMobileMenu}>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active-link" : ""} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className={location.pathname === "/aboutus" ? "active-link" : ""} onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/productandservice" className={location.pathname === "/productandservice" ? "active-link" : ""} onClick={closeMobileMenu}>
                Products & Services
              </Link>
            </li>
            <li>
             
              <Link className={location.pathname === "/productandservice" ? "active-link" : ""} onClick={toggleModal}>
              Enquiry
              </Link>
            </li>
            <li>
              <Link to="/contactus" className={location.pathname === "/contactus" ? "active-link" : ""} onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Enquiry Modal */}
      {showModal && <EnquiryModal onClose={toggleModal} />}
    </>
  );
};

export default Navbar;
