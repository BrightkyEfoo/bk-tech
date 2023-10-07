import React from "react";
import Card3, { Props } from "../cards/Card3";
const cards: Props[] = [
  {
    color: "red",
    desc: [
      "Social Media Marketing",
      "2.100 Keywords",
      "One Way Link Building",
      "5 Free Optimization",
      "3 Press Releases",
    ],
    image: "images/plan-1.svg",
    link: "#",
    price: 79.99,
    subDesc: "Monthly Package",
    subTitle: "Great For Small Business",
    title: "PERSONAL",
  },
  {
    color: "blue",
    desc: [
      "Social Media Marketing",
      "2.100 Keywords",
      "One Way Link Building",
      "5 Free Optimization",
      "3 Press Releases",
    ],
    image: "images/plan-2.svg",
    link: "#",
    price: 79.99,
    subDesc: "Monthly Package",
    subTitle: "Great For Small Business",
    title: "PERSONAL",
  },
  {
    color: "dark-blue",
    desc: [
      "Social Media Marketing",
      "2.100 Keywords",
      "One Way Link Building",
      "5 Free Optimization",
      "3 Press Releases",
    ],
    image: "images/plan-3.svg",
    link: "#",
    price: 79.99,
    subDesc: "Monthly Package",
    subTitle: "Great For Small Business",
    title: "PERSONAL",
  },
];
const Section7 = () => {
  return (
    <div className="services-section-7-container">
      <div className="services-section-7-container-sub">
        <span className="title-red">PRICING</span>
        <h2 className="title-blue">Pricing Table Overview</h2>
        <p className="simple-about-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          {cards.map((el, i) => {
            return <Card3 key={i} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section7;
