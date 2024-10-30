import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import faqlogo from "../Assets/faqlogo.png";
import "../Style/Faqs.css";

const FAQs = () => {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prevState) => ({
      ...prevState,
      [index]: !prevState[index] || false,
    }));
  };

  const faqData = [
    {
      question: "1. What types of vehicles do you service?",
      answer:
        "We service a wide range of vehicles, including cars, trucks, and SUVs from various brands such as Bosch, Valeo, Delco Remy, Lucas TVS, Denso, and more.",
    },
    {
      question: "2. Do you provide on-site services?",
      answer:
        "Currently, we do not provide on-site services. However, we offer convenient part pickup and delivery to make the process easier for out customers.",
    },
    {
      question: "3. How do I know if my vehicle has an electrical issue?",
      answer:
        "Common signs of electrical issues include dimming headlights, slow engine cark, manufacturing daashboard lights, and unusual sounds. If you experience any of these, contact us for a thorough diagnosis.",
    },
  ];

  return (
    <div id="faq">
      <h1 id="fa">FAQs</h1>
      <h1>Frequently Asked Questions</h1>
      <div className="faqDiv">
        <div className="faqlogodiv">
          <img src={faqlogo} alt="faqlogo" />
        </div>
        <div id="faqquestions">
          {faqData.map((question, index) => (
            <div className="faqquestion" key={index}>
              <div>
                <p>{question.question}</p>
                {openQuestions[index] && (
                  <p className="questionanswer">{question.answer}</p>
                )}
              </div>
              <div onClick={() => toggleQuestion(index)} className="faq-icon">
                {openQuestions[index] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
