import React from "react";
import CustomerSlider from "../../CustomersSlider/CustomerSlider";
const images = [""];
const Section6 = () => {
  return (
    <div className="section6-container">
      <div className="section6-container-sub">
        <div className="section6-container-sub-left">
          <p className="first-title">WHAT OUR CLIENTS SAY ABOUT BK-TECH.</p>
          <p className="second-title">
            Over 1200+ Satisfied Clients and Growing
          </p>
          <p className="first-title blue-text">Read More Reviews</p>
          <div>
            {images.map((el, i) => {
              return <img src={el} key={i} alt="" />;
            })}
          </div>
        </div>
        <CustomerSlider />
      </div>
    </div>
  );
};

export default Section6;
