import React from "react";
import Card3 from "../../About/cards/Card3";
const cards: {
  image: string;
  subTitle: string;
  title: string;
  body: string;
  orientation: "left" | "right";
}[] = [
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type 
     specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting 
     industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     is simply dummy text of the printing and typesetting industry.

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    is simply dummy text of the printing and typesetting industry.`,
    image: "images/app-develops.png",
    orientation: "left",
    subTitle: "OVERVIEW",
    title: "Custom Mobile App Solutions",
  },
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    is simply dummy text of the printing and typesetting industry.`,
    image: "images/digitalmarketing.png",
    orientation: "right",
    subTitle: "OVERVIEW",
    title: "Digital Marketing Services for Growing Your Company",
  },
  {
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.`,
    image: "images/graphic-design.jpg",
    orientation: "left",
    subTitle: "OVERVIEW",
    title: "Custom Graphic Design Services We Offer",
  },
];
const Section2 = () => {
  return (
    <div className="services-section-2-container">
      <div className="services-section-2-container-sub">
        <span className="title-red">OVERVIEWS</span>
        <h2 className="title-blue">Mobile, Web & Design</h2>
        <div>
          {cards.map((el, i) => {
            return <Card3 key={i} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section2;
