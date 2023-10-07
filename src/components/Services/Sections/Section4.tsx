import React from "react";
import Card1, { Props } from "../cards/Card1";
const cards: Props[] = [
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "images/mob-service-item2.png",
    title: "iOS App Development",
  },
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "images/mob-service-item1.png",
    title: "Android App Development",
  },
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "images/seo.png",
    title: "Search Engine Optimization",
  },
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "images/smo.png",
    title: "Social Media Marketing",
  },
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "images/logo-design.jpg",
    title: "Logo Designing",
  },
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "images/visit-card.jpg",
    title: "Business Card Designs",
  },

  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "images/brochure-.jpg",
    title: "Brochure Design",
  },
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "images/ppc.png",
    title: "Pay per Click",
  },
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "images/mob-service-item3.png",
    title: "Cross Platform App Development",
  },
];
const Section4 = () => {
  return (
    <div className="services-section-4-container">
      <div className="services-section-4-container-sub">
        <span className="title-red">SERVICE</span>
        <h2 className="title-blue">Our Services</h2>
        <p className="simple-about-p">
          We think big and have hands in all leading technology platforms to
          provide you wide array of services.
        </p>
        <div>
          {cards.map((el, i) => {
            return <Card1 key={i} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section4;
