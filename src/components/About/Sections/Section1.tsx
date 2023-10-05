import React from "react";
import Card1 from "../cards/Card1";
import "./style.scss";

const cards: { text1: string; text2: string }[] = [
  { text1: "450", text2: "Happy Clients" },
  { text1: "95k", text2: "Hours Worked" },
  { text1: "850", text2: "Projects Done" },
];
const Section1 = () => {
  return (
    <div className="about-section-1-container">
      <div className="about-section-1-container-sub">
        <img src="images/company-about.png" alt="company-about" />
        <div>
          <p>ABOUT US</p>
          <h2>About BK-TECH</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. is simply dummy text of the printing and
            typesetting industry.
          </p>
          <div>
            {cards.map((el, i) => {
              return <Card1 key={i} {...el} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
