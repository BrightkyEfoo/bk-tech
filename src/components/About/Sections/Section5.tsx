import React from "react";
import Card4 from "../cards/Card4";
const cards: {
  image: string;
  title: string;
  body: string;
}[] = [
  {
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "../../../images/research.svg",
    title: "Reasearch and Analysis",
  },
  {
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "../../../images/chat.svg",
    title: "Negotiation and power",
  },
  {
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "../../../images/monitor.svg",
    title: "Creative and innovative solutions",
  },
  {
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "../../../images/trasparency.svg",
    title: "Trasparency and ease of work",
  },
];
const Section5 = () => {
  return (
    <div className="about-section-5-container">
      <div className="about-section-5-container-sub">
        <span className="title-red">WE ARE AWESOME</span>
        <h2 className="title-blue">Why Choose BK-TECH</h2>
        <div>
          {cards.map((el, i) => {
            return <Card4 key={i} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section5;
