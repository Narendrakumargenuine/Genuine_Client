import React from "react";
import "../Style/Service.css"
import Avatar from "../Assets/ServiceImage/serviceprocess11.PNG"
import servicemobile from "../Assets/mobile_service.png"

const Service = ()=>{

  const isMobile = window.innerWidth <= 768;

    return(
        <div className="service-container">
            <h1 className="service-h1">Service Process</h1>
            {isMobile?<div className="main-content">
              <div className="main-content-first-div">
                <img src={servicemobile}/>
                </div>
            </div>:<div className="main-content">
              <div className="main-content-first-div">
                <div className="first-content-div">
                  <h2 style={{color:"#66425f"}}>01</h2>
                 <p>After removing the Faulty part from The Vehicle call our Helpline Number-
                 +91 9986179080</p>
                 </div>
               <div>
                <h2 style={{color:"#b90d2e"}}>03</h2>
                 <p>After receiving the part our team will Test & Diagnose the problem and share Photos & Price Quote with Customer. </p>
                 </div>

                 <div>
                 <h2 style={{color:"#ffcb00"}}>05</h2>
                 <p>
                 After final testing, the part will be ready for delivery and the customer can make digital payment or opt for cash on delivery post the part will be delivered to the customer 
                 </p>
                 </div>
                 </div>
                <div className="second-content-div">
                    <div>
                       <img className="second-content-image" src={Avatar} />
                    </div>
                </div>
                <div className="third-content-div">
                  <div className="main-content-first-div1">
                 <div>
                    <h2 style={{color:"#1d275b"}}>02</h2>
                    <p>Our Representative will Call and schedule for Part Pickup</p>
                  </div>
              <div>
                <h2 style={{color:"#2a3556"}}>04</h2>
                <p>After Customer's Approval our team willstart servicing the part 
                </p>
               </div>
               
              <div className="adustment-text">
                <p>Note-installation not included</p>
              </div>
               </div>
                </div>
                </div>}
            </div>
    )
}

export default Service;