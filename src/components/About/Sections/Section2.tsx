import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Section2 = () => {
  return (
    <div className="about-section-2-container">
      <div className="about-section-2-container-sub">
        <div>
          <img src="images/cheerful-businessman.jpg" />
          {/* <img src="" alt="" /> */}
        </div>
        <div>
          <span>Chairman's message</span>
          <h2>Bikos Maximus</h2>
          <p>Founder, Chairman & CFO</p>
          <p>
            <FaQuoteLeft />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. is
            simply dummy text of the printing and typesetting industry.
            <FaQuoteRight />
          </p>
          <button className="quote-button">
            Meet Our Team
            <span className="circle"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
