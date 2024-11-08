import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ProductDetails from "./ProductDetails/PdAlternator";
import PdAcCompr from "./ProductDetails/PdAcComp";
import PdLiquidCooled from "./ProductDetails/PdLiquidCooled";
import PdBlowerMotors from "./ProductDetails/PdBlowerMotors";
import PdAirSuspension from "./ProductDetails/PdAirSuspension";
import PdStarterMotor from "./ProductDetails/PdStarterMotor";
import WiperMotor from "./ProductDetails/WiperMotor";
import EPS from "./ProductDetails/EPS";
import ContactForm from "./ContactForm";
import ProductAndService from "./ProductDetails/ProductandService.js";
import Faqd from "./Faqd.js";
import PrivacyPolicy from "./PrivacyPolicy.js";
import TermAndCondition from "./Terms&Condition.js";
import Refurbished from "./ProductDetails/Refurbished.js"
const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqd />} />
        <Route path="/product/alternator" element={<ProductDetails />} />
        <Route path="/productandservice" element={<ProductAndService />} />
        <Route path="/refurbished" element={<Refurbished />} />
        <Route path="/product/starter" element={<PdStarterMotor />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandcondition" element={<TermAndCondition />} />
        <Route path="/product/eps" element={<EPS />} />
         <Route path="/product/wiper" element={<WiperMotor />} />
        <Route path="/product/accompressor" element={<PdAcCompr />} />
        <Route path="/product/blowermotor" element={<PdBlowerMotors />} />
        <Route path="/product/liquidcooled" element={<PdLiquidCooled />} />
        <Route path="/product/airsuspension" element={<PdAirSuspension />} />
        <Route path="/contactus" element={<ContactForm />} />
      </Routes>
    </div>
  );
};

export default Content;
