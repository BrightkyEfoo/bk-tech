import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Section10 = () => {
  return (
    <div className="services-section-10-container">
      <div className="services-section-10-container-sub">
        <span className="title-red">LET'S WORK TOGETHER</span>
        <h2 className="title-blue">We Love to Listen to Your Requirements</h2>
        <button className="button-type-2">Estimate Project</button>
        <p className="simple-about-p">
          Or call us now <FaPhoneAlt size={25} /> <span> (123) 456 7890</span>
        </p>
      </div>
      <img src="images/shape-31.svg" alt=""/>
      <img src="images/shape-11.svg" alt="" />
      <img src="images/shape-13.svg" alt="" />
      <img src="images/shape-4.svg" alt="" />
    </div>
  );
};

export default Section10;
