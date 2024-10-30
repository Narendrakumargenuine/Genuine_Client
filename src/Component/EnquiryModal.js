import React, { useState } from "react";
import "../Style/EnquiryModal.css"; // Add styles for the modal
import { MdOutlineAttachFile } from "react-icons/md";
import emailjs from "emailjs-com";

const EnquiryModal = ({ onClose }) => {
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
    <div className="modal-overlay1">
      <div className="modal-content1">
        <button className="close-button1" onClick={onClose} style={{marginTop:"-20px",marginBottom:"20px",color:"white",fontSize:"52px"}}>×</button>
        <h2 style={{marginTop:"-20px",marginBottom:"20px",color:"white",fontSize:"22px"}}>Enquiry</h2>
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
    </div>
  );
};

export default EnquiryModal;
