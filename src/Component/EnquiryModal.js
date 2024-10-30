import React, { useState } from "react";
import "../Style/EnquiryModal.css"; // Add styles for the modal
import { MdOutlineAttachFile } from "react-icons/md";

const EnquiryModal = ({ onClose }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  return (
    <div className="modal-overlay1">
      <div className="modal-content1">
        <button className="close-button1" onClick={onClose}>×</button>
        <h2>Enquiry</h2>
        <form className="form11">
          <input type="text" placeholder="Enter your Full Name *" required />
          <input type="tel" placeholder="Enter your Contact No *" required />
          <input type="email" placeholder="Enter your E-mail *" required />
          <div className="input-group1">
            <input
              id="fileUpload1"
              type="file"
              accept="image/*"
              multiple
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={() => document.getElementById("fileUpload1").click()}
              className="upload-button1"
            >
              <MdOutlineAttachFile size={25} />
              Attach Product Images
            </button>
            {files.length > 0 && (
              <div>
                <p>Selected files:</p>
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <textarea placeholder="Queries if any (optional)" rows="4"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
