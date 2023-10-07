import React from "react";
import Card4 from "../cards/Card4";
const cards: { image: string; title: string; subTitle: string }[] = [
  {
    image: "images/image-1.jpg",
    subTitle: "ios, design",
    title: "Creative",
  },
  {
    image: "images/image-2.jpg",
    subTitle: "Graphic, Print",
    title: "Brochure Design",
  },
  {
    image: "images/image-3.jpg",
    subTitle: "Web Application",
    title: "Ecommerce Developpement",
  },
  {
    image: "images/image-4.jpg",
    subTitle: "Android & iOs, Design",
    title: "Icon Pack",
  },
  {
    image: "images/image-5.jpg",
    subTitle: "UI/UX Design",
    title: "Smart Watch App",
  },
  {
    image: "images/image-6.jpg",
    subTitle: "Graphic, Print",
    title: "Brochure Design",
  },
];
const Section8 = () => {
  return (
    <div className="services-section-8-container">
      <div className="services-section-8-container-sub">
        <span className="title-red">OUR PROJECTS</span>
        <h2 className="title-blue">Some of Our Works</h2>
        <p className="simple-about-p">
          We think big and have hands in all leading technology platforms to
          provide you wide array of services.
        </p>
        <div>
          {cards.map((el, i) => {
            return <Card4 key={i} {...el} />;
          })}
        </div>
        <button className="button-type-2">View More Projects</button>
      </div>
    </div>
  );
};

export default Section8;
