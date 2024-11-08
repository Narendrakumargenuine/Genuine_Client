import React, { useState } from "react";
import motor from "../Assets/motor.jpg";
import "../Style/Contact.css";
import { MdOutlineAttachFile } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  // State for form data
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

  return (
    <div className="contact-container">
      <div className="contact-first-section">
        <div className="first-div">
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

            <div className="input-group">
              <label htmlFor="description">Queries if any (optional)</label>
              <textarea
                id="description"
                placeholder="Description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

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

            <button className="submitBtn" type="submit" disabled={isSubmitting}>
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
        <div className="second-div">
          <div className="map-here">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2422905002545!2d77.5830774!3d12.956342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150b7a969d0b%3A0x76cef9171f2b6b01!2sGenuine%20auto%20electrical%20service!5e0!3m2!1sen!2sin!4v1731059827113!5m2!1sen!2sin" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;