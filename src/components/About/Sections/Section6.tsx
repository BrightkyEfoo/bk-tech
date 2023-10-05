import React from "react";
import Card5 from "../cards/Card5";
const cards: {
  title: string;
  body: string;
  timeTitle: string;
  year: string;
  badges?: string[];
}[] = [
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    timeTitle: "Establishment",
    title: "The Company Born",
    year: "2005",
  },
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    timeTitle: "Establishment",
    title: "The Company Born",
    year: "2005",
    badges: [
      "../../../images/badge.svg",
      "../../../images/badge.svg",
      "../../../images/badge.svg",
    ],
  },
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    timeTitle: "Establishment",
    title: "The Company Born",
    year: "2005",
  },
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    timeTitle: "Establishment",
    title: "The Company Born",
    year: "2005",
  },
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    timeTitle: "Establishment",
    title: "The Company Born",
    year: "2005",
    badges: [
        "../../../images/badge.svg",
      ],
  },
];
const Section6 = () => {
  return (
    <div className="about-section-6-container">
      <div className="about-section-6-container-sub">
        <span className="title-red">THE TIME MACHINE</span>
        <h2 className="title-blue">A Timeline of Our Journey</h2>
        <div className="cards-container">
          {cards.map((el, i) => {
            return <Card5 key={i} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section6;
