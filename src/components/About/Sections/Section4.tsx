import React from "react";
import Card3 from "../cards/Card3";
const cards: {
  image: string;
  subTitle: string;
  title: string;
  body: string;
  orientation: "left" | "right";
}[] = [
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. Lorem Ipsum is
    simply dummy text of the printing and typesetting industry.`,
    image: "../../../images/leadership.jpg",
    orientation: "left",
    subTitle: "SUPERVISION",
    title: "Leadership",
  },
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. Lorem Ipsum is
    simply dummy text of the printing and typesetting industry.`,
    image: "../../../images/collaboration.jpg",
    orientation: "right",
    subTitle: "STRENGTH",
    title: "Team Collaboration",
  },
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. Lorem Ipsum is
    simply dummy text of the printing and typesetting industry.`,
    image: "../../../images/transparency.jpg",
    orientation: "left",
    subTitle: "QUALITY",
    title: "Transparency & Integrity",
  },
];
const Section4 = () => {
  return (
    <div className="about-section-4-container">
      <div className="about-section-4-container-sub">
        <span className="title-red">OUR PHILOSOPHY</span>
        <h2 className="title-blue">Our Business Philosophy</h2>
        {cards.map((el, i) => {
          return <Card3 key={i} {...el} />;
        })}
      </div>
    </div>
  );
};

export default Section4;
