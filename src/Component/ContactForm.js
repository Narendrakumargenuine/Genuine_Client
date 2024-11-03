import {React,useState} from "react";
import "../Style/Cf.css"; // Assuming you saved the CSS as Cf.css
import { MdOutlineAttachFile } from "react-icons/md";
import Service0 from "../Assets/ServiceImage/download 6.png";
import Service1 from "../Assets/ServiceImage/download 8.png";
import Service2 from "../Assets/ServiceImage/download 9.png";
import Service3 from "../Assets/ServiceImage/download 10.png";
import Service4 from "../Assets/ServiceImage/download 11.png";
import Service5 from "../Assets/ServiceImage/Group 95.png";
import Service6 from "../Assets/ServiceImage/IMG-20240813-WA0038.png";
import Service7 from "../Assets/ServiceImage/pngegg (11) 1.png";
import Service8 from "../Assets/ServiceImage/pngegg (12) 1.png";
import Service9 from "../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
import Logo from "../Assets/logo.jpg"
import emailjs from "emailjs-com";
import Navbar  from "./Navbar";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import Footer from "./Footer";
import PremiumSection from "./PremiumSection";
import PdContact from "./PdContact";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    description: "",
  });
  const [files, setFiles] = useState([]); // Changed to array for multiple files
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form data change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files)); // Store selected files as an array
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // FormData setup for sending multipart form data
      const formDataToSend = new FormData();
      formDataToSend.append("fullname", formData.fullname);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("description", formData.description);

      // Append all selected files to form data
      if (files.length > 0) {
        files.forEach((file) => {
          formDataToSend.append("images", file); // Adding each file to the form data
        });
      }

      // Make API call to submit contact form
      const response = await fetch(
        "https://auto-mobile-backend.vercel.app/form/contacts",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();
      if (response.ok) {
        setMessage("Contact saved successfully!");
        setFormData({
          fullname: "",
          phone: "",
          email: "",
          description: "",
        });
        setFiles([]); // Clear files after successful submission
        setTimeout(() => {
          setMessage("");
        }, 3000);
        // Send data to EmailJS after successful save
        const emailParams = {
          fullname: formData.fullname,
          phone: formData.phone,
          email: formData.email,
          description: formData.description,
        };
        emailjs
          .send(
            "service_f0yugym",
            "template_di8ac9g",
            emailParams,
            "WNVRLm7EPOd71vbkQ"
          )
          .then(() => {
            console.log("Email sent successfully!");
          })
          .catch((error) => {
            console.error("EmailJS Error:", error);
          });
      } else {
        setMessage(result.msg || "Failed to save contact.");
      }
    } catch (error) {
      setMessage("Error submitting the form. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const imageData2 = [
    Service0, Service1, Service2, Service3, Service4,
    Service5, Service6, Service7, Service8, Service9
  ];
  const isMobile = window.innerWidth <= 768;
  return (
    <>
    <div className="contact-form">
      {/* Main Title */}
      <div className="aboutus-border"></div>
      <h1 style={{textAlign:"center"}}>Contact Us</h1>

      <div className="cont-main-content">
        
        {/* Left Section: Information */}
        <div className="cont-main-first">
        <div className="con33-mainf-3">
          <h1>Contact Our Team</h1>
          <p style={{fontSize:"13px"}}>How can we help you?</p>
          <p>were happy to answer questions and get you acquainted</p>
          <p className="checkmark">Inquiries for information or questions about Genuineserve</p>
          <p className="checkmark">Requests for technical support service</p>
          <p className="checkmark">Any other kind of general inquiry about Genuineserve</p>

          {/* Brand Logos */}
         
        </div>
        <div className="second-cont-div" style={{backgroundColor:"white"}}>
        <h2>Enquiry </h2> 
          {/* <form>
            <input type="text" placeholder="Enter your Full Name *" required />
            <input type="tel" placeholder="Enter your Contact No *" required />
            <input type="email" placeholder="Enter your E-mail *" required />
            <div className="input-group">
              <input
                id="fileUpload"
                type="file"
                accept="image/*"
                multiple // Allow multiple files
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={() => document.getElementById("fileUpload").click()}
                className="upload-button"
              >
                <MdOutlineAttachFile size={25} />
                Attach Product Images
              </button>
              {files.length > 0 && (
                <div>
                  <p
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginTop: "10px",
                    }}
                  >
                    Selected files:
                  </p>
                  <ul>
                    {files.map((file, index) => (
                      <li
                        style={{
                          color: "white",
                        }}
                        key={index}
                      >
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

           
          
            <textarea placeholder="Queries if any (optional)" rows="4"></textarea>
            <input type="submit" value="Submit" />
          </form> */}
          <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              id="fullname"
              placeholder="Enter Your Full Name"
              required
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              id="phone"
              placeholder="Enter Your Contact Number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              id="email"
              placeholder="Enter Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group" style={{marginTop:"-30px"}}>
            <label htmlFor="description">Queries if any (optional)</label>
            <textarea
              id="description"
              placeholder="Description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              style={{"overflow-y":"scroll",height:"50px"}}
            ></textarea>
          </div>

          <div className="input-group" style={{marginTop:"-20px"}}>
            <input
              id="fileUpload"
              type="file"
              accept="image/*"
              multiple // Allow multiple files
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={() => document.getElementById("fileUpload").click()}
              className="upload-button"
            >
              <MdOutlineAttachFile size={25} />
              Attach Product Images
            </button>
            {files.length > 0 && (
              <div>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    marginTop: "10px",
                  }}
                >
                  Selected files:
                </p>
                <ul>
                  {files.map((file, index) => (
                    <li
                      style={{
                        color: "white",
                      }}
                      key={index}
                    >
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button style={{marginTop:"-20px",backgroundColor:"#064c1b",color:"white"}} className="submitBtn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {message && (
            <p
              style={{
                textAlign: "center",
                color: "white",
                marginTop: "10px",
              }}
              className="form-message"
            >
              {message}
            </p>
          )}
        </form>
          </div>
        </div>
        {/* Right Section: Contact Form */}
       
       
      </div>
      
        {
          isMobile?
            ""
            :
          <div className="second-div">
        <h1 style={{fontSize:"15px"}}><span style={{fontSize:"13px"}}>A Premium Service Brands for </span>MultiBrands</h1>
        <div>
        {imageData2.map((image, index) => (
              <img key={index} src={image} alt={`Service logo ${index + 1}`} />
            ))}
            </div>
        </div>}
    </div>
       <Footer/>
       </>
  );
};

export default ContactForm;
