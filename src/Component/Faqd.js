import faqlogo from "../Assets/faqlogo.png";
import React, { useState } from "react";
import "../Style/Faqd.css"
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Footer from "./Footer";


const Faqd = ()=>{
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
          answer: "Currently, we do not provide on-site services. However, we offer convenient part pickup and delivery to make the process easier for out customers.",
        },
        {
          question: "3. How do I know if my vehicle has an electrical issue?",
          answer:
            "Common signs of electrical issues include dimming headlights, slow engine cark, manufacturing daashboard lights, and unusual sounds. If you experience any of these, contact us for a thorough diagnosis.",
        },
        
      ];
      const alternator = [
        {
          question: "1. How long does it take to repair or replace an alternator?",
          answer:
            "The time required for alternator service depends on the specific issue. Most repairs or replacements can be completed within 24-48 hours.",
        },
        {
          question: "2. Can I drive my car if the alternator is failing?",
          answer: "It's not recommended. A failing alternator can cause your car to lose electrical power, eventually leading to a breakdown. If you suspect alternator issues, contact us immediately.",
        },
        {
          question: "3. How often should I get my alternator checked?",
          answer:
            "We recommend having your alternator inspected during routine vehicle maintenance, typically every 12,000 to 15,000 kilometers, or if you notice any warning signs.",
        },
        
      ];

      const starterMotor = [
        {
          question: "1. How long does it take to repair a starter motor?",
          answer:
            "Starter motor repairs usually take between 24-48 hours, depending on the complexity of the issue and the availability of parts.",
        },
        {
          question: "2. How can I prevent starter motor failure?",
          answer: "Regular maintenance, including checking electrical connections and ensuring your battery is in good condition, can help prevent starter motor issues. It's also important to have the motor inspected if you notice any unusual sounds or symptoms.",
        },
        {
          question: "3. Can you service starter motors for commercial vehicles?",
          answer:
            "Yes! We service starter motors for a wide range of vehicles, including commercial trucks and heavy-duty vehicles.",
        },
       
        {
            question: "4. What is the difference between a starter motor repair and reconditioning?",
            answer:
              "Repair involves fixing specific damaged components, while reconditioning involves completely overhauling the motor, replacing all worn-out parts, and restoring it to its original functionality.",
          },
      ];
      const wiperMotor = [
        {
          question: "1. How long does it take to repair or replace a wiper motor?",
          answer:
            "Wiper motor repairs typically take 24-48 hours, depending on the complexity of the issue and the availability of parts.",
        },
        {
          question: "2. Can a wiper motor be repaired, or will it need replacing?",
          answer: "In many cases, wiper motors can be repaired, especially if the issue is electrical or related to minor component failure. However, if the motor is severely damaged, replacement may be the best option.",
        },
        {
          question: "3. How can I prevent wiper motor failure?",
          answer:
            "Regular maintenance of your wiper system, including cleaning the wiper blades and keeping the motor lubricated, can help extend the life of your wiper motor.",
        },
       
        {
            question: "4. Do you service wiper motors for commercial vehicles?",
            answer:
              "Yes, we provide wiper motor services for both personal and commercial vehicles, including trucks, vans, and heavy-duty vehicles.",
          },
      ];

      const epsMotor = [
        {
          question: "1. How do I know if my EPS motor needs repair?",
          answer:
            "Signs such as increased steering effort, intermittent power steering loss, or the steering warning light on your dashboard are common indicators that your EPS motor may need repair or replacement.",
        },
        {
          question: "2. Can EPS motors be repaired, or do they always need replacement?",
          answer: "In many cases, EPS motors can be repaired, especially if the issue is electrical or related to specific internal components. However, if the motor is severely damaged or worn out, replacement might be the best option.",
        },
        {
          question: "3. How often should I service my EPS motor?",
          answer:
            "While EPS motors typically don’t require frequent maintenance, we recommend having them inspected during routine vehicle maintenance, especially if you experience any steering issues.",
        },
       
        {
            question: "4. How long does it take to repair or replace an EPS motor?",
            answer:
              "EPS motor repairs can generally be completed within 24-48 hours, depending on the complexity of the issue. Replacements may take slightly longer if special parts need to be ordered.",
          },
      ];

      const acCompressor = [
        {
          question: "1. How often should I service my AC compressor?",
          answer:
            "It’s recommended to have your AC system, including the compressor, inspected annually to ensure it’s functioning properly. Regular maintenance can help prevent major issues down the line.",
        },
        {
          question: "2. How do I know if my AC compressor needs repair or replacement?",
          answer: "Signs such as weak cooling, unusual noises, or refrigerant leaks may indicate a faulty AC compressor. Our diagnostic services can determine whether repair or replacement is the best option.",
        },
        {
          question: "3. How long does it take to repair or replace an AC compressor?",
          answer:
            "AC compressor repairs typically take 24-48 hours, depending on the extent of the damage and parts availability. Replacements may take slightly longer if specialized parts are needed.",
        },
       
        {
            question: "4. Can I continue driving with a faulty AC compressor?",
            answer:
              "While you can technically drive with a faulty AC compressor, doing so can lead to further damage to your vehicle’s AC system and cause discomfort during hot weather. It’s best to address the issue as soon as possible.",
          },
      ];

      const airSuspension = [
        {
          question: "1. How long does an air suspension compressor typically last?",
          answer:
            "Air suspension compressors generally last between 5 to 10 years, depending on driving conditions, maintenance, and the overall health of the air suspension system. Regular inspections and preventive maintenance can help extend its lifespan.",
        },
        {
          question: "2. How do I know if my air suspension compressor needs replacement?",
          answer: "Signs like prolonged compressor running time, uneven ride height, or warning lights on the dashboard may indicate that your compressor is failing. Our diagnostics will determine whether repair or replacement is the best option.",
        },
        {
          question: "3. Can air suspension compressors be repaired, or do they always need replacement?",
          answer:
            "In many cases, compressors can be repaired, especially if the issue is minor, such as a leak or electrical fault. However, if the compressor has suffered extensive internal damage or wear, replacement may be the most reliable solution.",
        },
       
        {
            question: "4. How often should I service my air suspension system?",
            answer:
              "We recommend having your air suspension system, including the compressor, inspected at least once a year or whenever you notice performance issues, to prevent potential failures and ensure smooth operation.",
          },
      ];

      const blowerMotor = [
        {
          question: "1. How long does it take to repair or replace a blower motor?",
          answer:
            "Blower motor repairs typically take 24-48 hours, depending on the complexity of the issue and parts availability. Replacements may take slightly longer if specific parts need to be ordered.",
        },
        {
          question: "2. Can blower motors be repaired, or do they always need replacement?",
          answer: "In many cases, blower motors can be repaired, especially if the issue is related to minor electrical faults or worn components. However, if the motor is severely damaged or worn out, replacement may be the best option.",
        },
        {
          question: "3. How often should I service my blower motor?",
          answer:
            "We recommend having your blower motor and HVAC system inspected at least once a year during routine vehicle maintenance, or whenever you notice any signs of performance issues.",
        },
       
        {
            question: "4. What causes a blower motor to fail?",
            answer:
              "Blower motors can fail due to a variety of factors, including electrical faults, worn-out brushes, debris buildup in the motor, or failure of related components such as resistors or control modules.",
          },
      ];

      const liquidCooled = [
        {
          question: "1. How does a liquid cooled alternator differ from an air-cooled alternator?",
          answer:
            "Liquid cooled alternators use a dedicated cooling system, typically connected to the vehicle’s coolant system, to maintain optimal operating temperatures, allowing them to handle higher electrical loads and prevent overheating in demanding conditions.",
        },
        {
          question: "2. How often should I service my liquid cooled alternator?",
          answer: "We recommend having your liquid cooled alternator inspected during routine vehicle maintenance, usually every 15,000 to 20,000 kilometers, or if you notice any signs of overheating or electrical issues.",
        },
        {
          question: "3. Can liquid cooled alternators be repaired?",
          answer:
            "Yes, many issues with liquid cooled alternators can be repaired, including replacing worn-out components and fixing cooling system leaks. However, if the alternator is severely damaged, replacement may be the best option.",
        },
       
        {
            question: "4. What happens if my liquid cooled alternator overheats?",
            answer:
              "Overheating can lead to reduced alternator efficiency, electrical failures, and potential damage to the alternator itself. If you notice signs of overheating, it’s essential to have the system inspected immediately to prevent further damage.",
          },
      ];
    return(
        <div className="faqd-main-container">
            <div className="aboutus-border"></div>
            <div className="fa-first-cont">
                <h1 className="first-heading">FAQ<span style={{"-webkit-text-stroke":"1px green", color: "transparent"}}>s</span></h1>
                <p style={{textAlign:"center",marginTop:"-40px"}}>Frequently Asked Questions</p>
                <img src={faqlogo} height={200} width={140}/>
           </div>



           <div id="faq">
            <h1 style={{fontSize:"16px"}}>About us</h1>
            
      <div className="faqDiv">
        <div id="faqquestions1">
          {faqData.map((question, index) => (
            <div className="faqquestion" key={index}>
             
              <div>
                <p>{question.question}</p>
                {openQuestions[index] && (
                  <p className="questionanswer">{question.answer}</p>
                )}
              </div>
              <div onClick={() => toggleQuestion(index)} className={`faq-icon ${openQuestions[index] ? "rotate" : ""}`}>
                {openQuestions[index] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          

          {/* alternator */}

          <div id="faq">
            <h1 style={{fontSize:"16px"}}>Alternator</h1>
            
      <div className="faqDiv">
        <div id="faqquestions1">
          {alternator.map((question, index) => (
            <div className="faqquestion" key={index}>
             
              <div>
                <p>{question.question}</p>
                {openQuestions[index] && (
                  <p className="questionanswer">{question.answer}</p>
                )}
              </div>
              <div onClick={() => toggleQuestion(index)} className={`faq-icon ${openQuestions[index] ? "rotate" : ""}`}>
                {openQuestions[index] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* starterMotor*/}
    <div id="faq">
            <h1 style={{fontSize:"16px"}}>Starter Motor</h1>
            
      <div className="faqDiv">
        <div id="faqquestions1">
          {starterMotor.map((question, index) => (
            <div className="faqquestion" key={index}>
             
              <div>
                <p>{question.question}</p>
                {openQuestions[index] && (
                  <p className="questionanswer">{question.answer}</p>
                )}
              </div>
              <div onClick={() => toggleQuestion(index)} className={`faq-icon ${openQuestions[index] ? "rotate" : ""}`}>
                {openQuestions[index] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div id="faq">
            <h1 style={{fontSize:"16px"}}>Wiper Motor</h1>
            
      <div className="faqDiv">
        <div id="faqquestions1">
          {wiperMotor.map((question, index) => (
            <div className="faqquestion" key={index}>
             
              <div>
                <p>{question.question}</p>
                {openQuestions[index] && (
                  <p className="questionanswer">{question.answer}</p>
                )}
              </div>
              <div onClick={() => toggleQuestion(index)} className={`faq-icon ${openQuestions[index] ? "rotate" : ""}`}>
                {openQuestions[index] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div id="faq">
            <h1 style={{fontSize:"16px"}}>EPS Motor</h1>
            
      <div className="faqDiv">
        <div id="faqquestions1">
          {epsMotor.map((question, index) => (
            <div className="faqquestion" key={index}>
             
              <div>
                <p>{question.question}</p>
                {openQuestions[index] && (
                  <p className="questionanswer">{question.answer}</p>
                )}
              </div>
              <div onClick={() => toggleQuestion(index)} className={`faq-icon ${openQuestions[index] ? "rotate" : ""}`}>
                {openQuestions[index] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div id="faq">
            <h1 style={{fontSize:"16px"}}>AC Compressor</h1>
            
      <div className="faqDiv">
        <div id="faqquestions1">
          {acCompressor.map((question, index) => (
            <div className="faqquestion" key={index}>
             
              <div>
                <p>{question.question}</p>
                {openQuestions[index] && (
                  <p className="questionanswer">{question.answer}</p>
                )}
              </div>
              <div onClick={() => toggleQuestion(index)} className={`faq-icon ${openQuestions[index] ? "rotate" : ""}`}>
                {openQuestions[index] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div id="faq">
            <h1 style={{fontSize:"16px"}}>Air Suspension Compressor</h1>
            
      <div className="faqDiv">
        <div id="faqquestions1">
          {airSuspension.map((question, index) => (
            <div className="faqquestion" key={index}>
             
              <div>
                <p>{question.question}</p>
                {openQuestions[index] && (
                  <p className="questionanswer">{question.answer}</p>
                )}
              </div>
              <div onClick={() => toggleQuestion(index)} className={`faq-icon ${openQuestions[index] ? "rotate" : ""}`}>
                {openQuestions[index] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div id="faq">
            <h1 style={{fontSize:"16px"}}>Blower Motor</h1>
            
      <div className="faqDiv">
        <div id="faqquestions1">
          {blowerMotor.map((question, index) => (
            <div className="faqquestion" key={index}>
             
              <div>
                <p>{question.question}</p>
                {openQuestions[index] && (
                  <p className="questionanswer">{question.answer}</p>
                )}
              </div>
              <div onClick={() => toggleQuestion(index)} className={`faq-icon ${openQuestions[index] ? "rotate" : ""}`}>
                {openQuestions[index] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 
    <div id="faq">
            <h1 style={{fontSize:"16px"}}>Liquid Cooled Alternator</h1>
            
      <div className="faqDiv">
        <div id="faqquestions1">
          {liquidCooled.map((question, index) => (
            <div className="faqquestion" key={index}>
             
              <div>
                <p>{question.question}</p>
                {openQuestions[index] && (
                  <p className="questionanswer">{question.answer}</p>
                )}
              </div>
              <div onClick={() => toggleQuestion(index)} className={`faq-icon ${openQuestions[index] ? "rotate" : ""}`}>
                {openQuestions[index] ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="contact-container1">
            <div className="contact-first-section">
                <div className="first-div1">
                    <div className="input-group">
                        {/* <label htmlFor="fullName">Enter Your Full Name *</label> */}
                        <input id="fullName" placeholder="Enter Your Full Name" required />
                    </div>

                    <div className="input-group">
                        {/* <label htmlFor="contactNumber">Enter Your Contact Number *</label> */}
                        <input id="contactNumber" placeholder="Enter Your Contact Number" required />
                    </div>

                    <div className="input-group">
                        {/* <label htmlFor="email">Enter Your Email *</label> */}
                        <input id="email" placeholder="Enter Your Email" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="description">Queries if any (optional)</label>
                        <textarea id="description" placeholder="Description" rows="4" required></textarea>
                    </div>

                    <div className="input-group">
                        {/* <label htmlFor="fileUpload"></label> */}
                        <input id="fileUpload" type="file" accept="image/*" placeholder="Upload Image *" required />
                    </div>

                    <button type="submit">Submit</button>
                </div>
                {/* <div className="second-div">
                    <div className="map-here"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62204.23025164141!2d77.5593344!3d12.9869159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e716408af1%3A0x275f98002bf46061!2sB.%20W.%20Lions%20Super%20Speciality%20Eye%20Hospital!5e0!3m2!1sen!2sin!4v1729772137325!5m2!1sen!2sin"  style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div> */}
            </div>
        </div>

        <Footer/>
        </div>
    )
}

export default Faqd;