import React from "react";
import Card5 from "../cards/Card5";
const cards: {
  image: string;
  desc: string;
  name: string;
  subDesc: string;
  stars: number;
}[] = [
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: "images/envato.png",
    name: "John DOE",
    subDesc: "Business Owner, Jaipur",
    stars: 4,
  },
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: "images/envato.png",
    name: "John DOE",
    subDesc: "Business Owner, Jaipur",
    stars: 3,
  },
  {
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: "images/envato.png",
    name: "John DOE",
    subDesc: "Business Owner, Jaipur",
    stars: 4,
  },
];
const Section9 = () => {
  return (
    <div className="services-section-9-container">
      <div className="services-section-9-container-sub">
        <span className="title-red">SERVICE TESTIMONIALS</span>
        <h2 className="title-blue">Client Speaks</h2>
        <span className="simple-about-p">
          Check our customers success stories.
        </span>
        <div>{
        cards.map((el,i)=>{
            return <Card5 key={i} {...el} />
        })}</div>
      </div>
    </div>
  );
};

export default Section9;
