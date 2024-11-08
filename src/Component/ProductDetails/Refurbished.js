import React, { useState, useEffect } from "react";
import Service0 from "../../Assets/ServiceImage/download 6.png";
import Service1 from "../../Assets/ServiceImage/download 8.png";
import Service2 from "../../Assets/ServiceImage/download 9.png";
import Service3 from "../../Assets/ServiceImage/download 10.png";
import Service4 from "../../Assets/ServiceImage/download 11.png";
import Service5 from "../../Assets/ServiceImage/Group 95.png";
import Service6 from "../../Assets/ServiceImage/IMG-20240813-WA0038.png";
import Service7 from "../../Assets/ServiceImage/pngegg (11) 1.png";
import Service8 from "../../Assets/ServiceImage/pngegg (12) 1.png";
import { IoIosCall } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/logo.jpg";
import "../../Style/ProductDetails.css";
import "../../Style/ProductAndService.css";
import PremiumService from "../PremiumSection";
import { useParams } from "react-router-dom";
import FAQs from "../Faqs";
import Navbar from "../Navbar";
import Service from "../Service.js"
import Footer from "../Footer";
import alter1 from "../../Assets/Alternator/download 1.png";
import alter2 from "../../Assets/Alternator/download 17.png";
import alter3 from "../../Assets/Alternator/images 8.png";
import frame from "../../Assets/Alternator/Frame 563.png";
import Service9 from "../../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
import Contact from "../Contact";
import EnquiryModal from "../EnquiryModal.js";
// import Service0 from "../Assets/ServiceImage/download 6.png";
// import Service1 from "../Assets/ServiceImage/download 8.png";
// import Service2 from "../Assets/ServiceImage/download 9.png";
// import Service3 from "../Assets/ServiceImage/download 10.png";
// import Service4 from "../Assets/ServiceImage/download 11.png";
// import Service5 from "../Assets/ServiceImage/Group 95.png";
// import Service6 from "../Assets/ServiceImage/IMG-20240813-WA0038.png";
// import Service7 from "../Assets/ServiceImage/pngegg (11) 1.png";
// import Service8 from "../Assets/ServiceImage/pngegg (12) 1.png";
// import Service9 from "../Assets/ServiceImage/Prestolite_Electric_logo.svg 1.png";
const ProductAndService = () => {
    const [showEnquiry,setShowEnquiry]= useState(false);

    const handleEnquiry=()=>{
        setShowEnquiry(!showEnquiry);
    }
    const handleCallClick = () => {
        window.location.href = "tel:+1234567890"; // Replace with your phone number
      };
  const { productId } = useParams();
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const slides = [
    { src: Service0, src1: Service1, src2: Service2 },
    { src: Service3, src1: Service4, src2: Service6 },
    { src: Service7, src1: Service8, src2: Service9 },
  ];
  const imageData2 = [
    Service0,
    // Service2,
    Service3,
    // Service4,
    Service6,
    Service5,
    Service1,
    // Service7,
    // Service8,
    // Service9,
  ];

  const imageData = [
    { images: [Service0, Service1] },
    { images: [Service2, Service3] },
    { images: [Service4, Service5] },
    { images: [Service6, Service7] },
    { images: [Service8, Service9] },
  ];

  const serviceDetails = [{ image: "" }];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [slides.length]);
  const imageData3 = [
    Service0,
    Service1,
    Service2,
    Service3,
    Service4,
    Service5,
    Service6,
    Service7,
    Service8,
    Service9,
  ];
  return (
    <div className="product-details-container">
      {/* Heading Section */}
     
      <div className="aboutus-border"></div>

      <div>
        <div className="first-second-aboutus11">
          <div>
            <h1 className="first-h31">Products and Services</h1>
            <p
              style={{
                textAlign: "center",
                color: "#8f8989",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              We offer a variety of services for different
              automotive components:
            </p>
          </div>
        </div>
      </div>
      {/* Services details */}
      <div className="serviceContainer">
        <h4>Get the Right Part</h4>
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/8161/601f/cfc1dfd96175151d63a9ca9123c25651?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KvPhvMKpBCd9EtWpHkspT2jeNRlgmeFOwH09RcxNH8WxcB3FPfaraO1BwQCuRiaqa0yMOUQdff0XKFV11~kEipIQO11bNLwDJc0GjX0QzRZQQjNzvjmDdZjnXmFflEZ5DClO50NWfAdRtP3yM9LG4nMZXu~1MdHGE4hVWNOuVhm~l1faOxwawBHEuouFHPaFrdgil7UwLEzlwaD2AYtpMaV-kWME3hWk6FNd0G~H8q2WnpHlKKp28dq384x3d0FPcZ7C4MwKwEYOE7aXxs2YkmvvZdhIycOeS6p9WLWtQ435lJ9Xvj5g4jk30Fr4dSPXWDwpUvbSZWrfD-k2B2XR7g__"
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Alternator</h1>
              <p>
                We specialize in providing high-quality alternator repair,
                maintenance, and re-engineering services for all types of
                vehicles. Your vehicle’s alternator is crucial for generating
                electrical power and maintaining battery life, ensuring your
                car’s smooth operation. Our team of experts has extensive
                experience diagnosing and repairing alternator issues, ensuring
                that your vehicle remains reliable on the road.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
     
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick}>Call now</button>
              </div>
             
            </div>
          </div>
        </div>
        {showEnquiry && <EnquiryModal onClose={handleEnquiry}/>}
        {/* second */}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/9989/82db/364fbdfeed403d94d5e6648514f8f052?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mEn~MZK9JXYIgSm6pyxIk2hfwEeYx~NQ4k~LaC69tEiKVpsuB5YsIWuCXwhnzup5gNpd3oTtOZnzaJLh3aLh2gfX731y3581W~lhQWqdZxtEMgxrl7yjisPX4omZpWNXSHSGjNMI5T9wGUJG6-wFno8k0NA-lnf-0SwOoOEEzDLwAvwj4cEciW65ejEwR9qo9q4quueeVjxf6XVZjT~-MC67IHPaoEFxwcJwVbcJ8oT0k0L5QgGwHdShRQg-jOFfpZ-dTHsmM1KWEN8l~sJcgblBnvWrKLJp5G~HdYdxt1REdIml-4CJANyJwViCPUrfYRv-oybZgmXkgZelsqZf9w__"
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Starter Motor</h1>
              <p>
                we offer top-notch starter motor repair, replacement, and
                reconditioning services to ensure your vehicle starts smoothly
                every time. The starter motor is critical in getting your engine
                running, and any malfunction can leave you stranded. With over
                30 years of experience, our team excels at diagnosing and
                resolving starter motor issues for a wide range of vehicle
                brands.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick}>Call now</button>
              </div>
            </div>
          </div>
        </div>
        {/* third*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/b19f/43e5/b1a0b3d9da4dce599ddf881d6d2c48ba?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T~gKnAqg6cr1UIU-4-PZqHRoE6F3Hys8jjMqAORX7erEha0A9-uHcJ2x7pZXbe4fa8YbpfMiVF4lYLlE39vwsM38E-NVgJM09ov0-acup~JPmm04Gh-zwvV2wADye3Cz~eo~~8bTiddQ-9EOdzfsyaXDOj3vnRJ6Ougnur0tzWytF0LimVwoibgXNq1wCdlw5RlmnZ2NUSFAZrbqZK2rYQ-9NxE3PKlEnMYe2XYEDTmc94V9JmJrPfnczpAlL~yZ7ZBLK62vtgR5sUZ0x7Oh0PGAZZEBa-z9U5vlcxngnYRrXsUxgjfCrEmlDoLkzl0xuQJo3k7LEucTXwbsZOv-tQ__"
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Wiper Motor</h1>
              <p>
                we understand how critical a functioning wiper motor is for
                maintaining clear visibility, especially during harsh weather
                conditions. Your wiper motor ensures the smooth operation of
                your windshield wipers, making sure you can safely navigate the
                road in rain, snow, or dust. With over 30 years of experience,
                we offer expert diagnosis, repair, and replacement services for
                wiper motors, ensuring they run flawlessly when you need them
                most.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick}>Call now</button>
              </div>
            </div>
          </div>
        </div>
        {/* Fourth*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/a58b/ef9d/37dc491bda261272923d78ef251255ea?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZWH8Awni~b3bHeGpojB4djwDrWn~ZNmL1qG2vnI3C2WsKDeIX4XRpx61NRMTDn6Rk-R6CXPjYaXMmll0pQEBzbs1nHOfDPk-4HpFckMiHj6Q1DIckIAF6zvrllQKwDBtahFhsWY1-TS06AlO0QBQhhbFNPeBpC55PiutCMEiIrtJygP16oaRYCoXNLNV972aPQv8AT5WoWvNUZ9w2KskleQv8lse3i1dfhJ7w3pUlbQHK11C6lVWzD5Xgq0f3xj~s4ni7Q0FDY3g0s4kjpU~CjCEy4JCVw4BzTspcIfGo7OsWJCxD-hKfzGkVjmgfucVgoRrRmfiMWrOV6uxyzg5w__"
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>EPS Motor</h1>
              <p>
                we specialize in the repair and replacement of Electric Power
                Steering (EPS) motors, ensuring smooth, effortless steering for
                your vehicle. EPS motors play a critical role in modern vehicles
                by providing precise control over steering without relying on
                traditional hydraulic systems. Whether you are experiencing
                increased steering effort or abnormal steering behavior, our
                expert team is here to diagnose and resolve any issues with your
                EPS motor.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick}>Call now</button>
              </div>
            </div>
          </div>
        </div>
        {/* Fifth*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/d779/f92d/f45831d9d0c55cb321bf8e63a22781b6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqHNoDoFXnu3Q9BnzDvkzsxeEbxMVbFx6IIIh3-ClI7Gr2fZGwegq-cUi1lk6PdxXEAX~phGteZVgTGyvkxd~GcW3F0VPZ6BpiAtkG8V7vWWqq18smndoQr2RVyZPo2QhZ6LuR~taEGDZ0LFma9gMumC2sJ23~ar2geUHz2bFc-Cp8M0QxsZNpT0JT4SnTfrUUIIECh8ZCQKbyWFKcy6Jyf7dC7Zp5IEApJu6Q2FOAitWR~ny8CN2YNDCFKgmtBKbl3A6mMmvovDBLjyNZrDElbrS64oCWYgZfpikM8qoDvpxZTG~~tl~FuTxjQdcdSrgJ7WLqyjCw3O8UOtK1mgEQ__"
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>AC Compressors</h1>
              <p>
                we offer specialized services for AC compressors, ensuring your
                vehicle’s air conditioning system runs efficiently, providing
                cool air during the hottest days. The AC compressor is the heart
                of your vehicle’s air conditioning system, responsible for
                circulating refrigerant and maintaining the cooling cycle.
                Whether you’re facing a complete AC breakdown or reduced cooling
                performance.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick}>Call now</button>
              </div>
            </div>
          </div>
        </div>
        {/* sixth*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/37e5/1a81/bc86dd737b400d3a2f1ea86509266294?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SKTiulXCktJA4j7m-xz0XTswO8DMtgV0rfRJhqS57dCwDBQAy4SBaRRGzOC3Q~fMYBD5UXc5aN67pcx35-auiCST-iX5R6g4kzD6YZg8I9~lBNa95tciaWIC11Vd50s3fQLDbOE-NVMz4VcajHDkRr7414gvvguPZ8dM-jCZ1dgBgnxBA1~69e~8IXJXl1beskkqK-97SIif5sk-3SWrgiffn7kU7tf0ZQEjcpocqCufIG4IJmdTqhLS9wNcnzn2-AFLckQ6SXeSld0Ssugvp54sV8QAVt-47hGMGgw7nLgZslZ8r1XdB5QGKPwOoDIBEI9EdgMa9aYZv7eLyHSEuQ__"
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Air Suspension Compressors</h1>
              <p>
                we provide expert services for air suspension compressors, a
                critical component in maintaining the comfort and performance of
                your vehicle’s air suspension system. The air suspension
                compressor ensures the proper inflation of air springs, allowing
                for smooth rides, optimal ground clearance, and improved
                handling, especially in luxury and high-performance vehicles.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick}>Call now</button>
              </div>
            </div>
          </div>
        </div>
        {/* seventh*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/181c/b7e5/683d1e6f90cdff7c48a358e35237cbed?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F5Vgn72D5lH1aeH9VXHpENoOaNzZU9vZI-7lOQ-8uE4cpx0tmpUWVVtg3U77TwbFL0lDK000-Z57Gf86dIm7KfyxG41TPE7RY-dQLkvESCUewENu2elXUcIvrO1yc~QZIO3Lld3GbDdkFDNeWq7n3WKjgmg-W0qANyvmlK-IQ7LGlkGr4k4CO0zOyE91lmO-HVameKsAr6Mm8dbDEa2ydO5dSL0QFJkvs2R3rF6-Ms~B-hbOgmfwPec-x1Q0wIRUVEknEwCcEha6PFv-cHtHknAQ7gKgakxFniuttVCN4GldHIuOIGd-6-0yduDpGJai26rUrFETa~GU68PPaDkuug__"
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Blower Motors</h1>
              <p>
                we specialize in the repair, maintenance, and replacement of
                blower motors, an essential component of your vehicle's heating,
                ventilation, and air conditioning (HVAC) system. Blower motors
                control the airflow in your vehicle’s cabin, ensuring that warm
                or cool air is distributed evenly throughout. Whether your
                blower motor is failing to function or making unusual noises,
                our team of experts is equipped to diagnose and resolve any
                issues quickly and efficiently.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick}>Call now</button>
              </div>
            </div>
          </div>
        </div>
        {/* eight*/}
        <div className="productContainer">
          <div className="product">
            <div className="productImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/14da/c412/1942d8bb42dba723ca1920fafca07254?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BvJcXMzcMsO1shrQy54bECf0egLKt05thY7FBYp1zzGyFCzpSzVbx5KiCySSivKztKFoukCi5-bGfnnya82V4~Hyk3z6Hel6r-PDuBmCT2biUPsylstnVnR6h2s36H8xo9-tHgZcZY4sd0i3yS2BKARVKmTEK6ajYUanpPutbI~JjMRX7SHiS24vu8rYlkz8WPQPbnXm8PF9uSaKVTyZ9r-MSMEbnkfbmS0mhWUgqWGmP~Aqen3ptkIoWtuxzwWIfs3~~HqiWkCZV6NsccCBpGzH21IOMnJpWJCMyv8sD7AaQsJxAzrVsX1ZAlUUYrZvcZvaVW41dHJ8AO4oBt4XUg__"
                alt=""
              />
            </div>
            <div className="productContent">
              <h1>Liquid Cooled Alternators</h1>
              <p>
                we provide expert repair, maintenance, and replacement services
                for liquid cooled alternators, a crucial component in modern
                high-performance and heavy-duty vehicles. Unlike traditional
                air-cooled alternators, liquid cooled alternators are designed
                to handle higher electrical loads while maintaining optimal
                temperatures, ensuring consistent performance in demanding
                conditions.
              </p>
              <p
                style={{
                  color: "#064c1b",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Multi-Brand Compatibility
              </p>
              <div className="product-brand">
                {imageData2.map((data) => {
                  return (
                    <div className="brandCont">
                      <img src={data} />
                    </div>
                  );
                })}
              </div>
              <div style={{display:"flex",gap:"13px"}}>
              <button
                className="btn"
                onClick={handleEnquiry}
              >
                Enquiry
              </button>
              <button className="btn" onClick={handleCallClick}>Call now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="premium-service">
        {/* <div> */}
        {isMobile ? (
          <PremiumService />
        ) : (
          <div className="premium-service">
            <h1 className="about-h1">
              A Premium Service Brands for
              <span className="stroke"> Multibrands</span>
            </h1>
            <div className="image-append">
              {imageData3.map((data) => {
                return (
                  <div>
                    <img src={data} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
      <Service/>
      <Contact />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ProductAndService;
