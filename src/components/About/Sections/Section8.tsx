import React from "react";
import Card6 from "../cards/Card6";

const cards: {
  city: string;
  officeType: string;
  location: string;
  email?: string;
  phone?: string;
  image: string;
}[] = [
  {
    city: "Yaounde",
    image: "images/india-img.png",
    location: "232, 21st East Street, Deido, Douala, Cameroun 303030",
    officeType: "Registred Office",
    email: "infos@bk-tech.com",
    phone: "+237612345678",
  },
  {
    city: "Italy",
    image: "images/italy.png",
    location: "232, 21st East Street, Deido, Douala, Cameroun 303030",
    officeType: "Registred Office",
    email: "infos@bk-tech.com",
    phone: "+237612345678",
  },
  {
    city: "Paris",
    image: "images/paris.png",
    location: "232, 21st East Street, Deido, Douala, Cameroun 303030",
    officeType: "Registred Office",
    email: "infos@bk-tech.com",
    phone: "+237612345678",
  },
];
const Section8 = () => {
  return (
    <div className="about-section-8-container">
      <div className="about-section-8-container-sub">
        <span className="title-red">OUR LOCATIONS</span>
        <h2 className="title-blue">Our Office</h2>
        <div>
          {cards.map((el, i) => {
            return <Card6 key={i} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section8;
