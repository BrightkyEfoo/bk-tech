import React from "react";
import Card3 from "../cards/Card3";
const cards = [
  {
    image: "images/image-d.jpg",
    text1: "Ecommerce Development",
    text2: "Web Application",
    type: "large",
  },
  {
    image: "images/image-1.jpg",
    text1: "Creative App",
    text2: "iOs, Android",
    type: "small",
  },
  {
    image: "images/image-6.jpg",
    text1: "Brochure Design",
    text2: "Graphic, Print",
    type: "small",
  },
  {
    image: "images/image-c.jpg",
    text1: "Icon Pack",
    text2: "iOs, Android",
    type: "large",
  },
];
const Section3 = () => {
  return (
    <div className="section3-container">
      <div className="section3-container-sub">
        <h3>UR WORK</h3>
        <p>Our Latest Creative Work</p>
        <div>
          {cards.map((el, i) => {
            return <Card3 key={i} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section3;
