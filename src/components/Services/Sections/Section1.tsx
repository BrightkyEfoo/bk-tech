import React from "react";
import "./style.scss";

const cards: { image: string; stat: string; desc: string }[] = [
  {
    desc: "Happy Clients",
    image: "images/deal.svg",
    stat: "450",
  },
  {
    desc: "Projects Done",
    image: "images/computers.svg",
    stat: "48k",
  },
  {
    desc: "Hours Worked",
    image: "images/worker.svg",
    stat: "95k",
  },
  {
    desc: "Support Available",
    image: "images/customer-service.svg",
    stat: "24/7",
  },
];
const Section1 = () => {
  return (
    <div className="services-section-1-container">
      <div className="services-section-1-container-sub">
        {cards.map((el, i) => {
          return (
            <div key={i}>
              <img src={el.image} alt="" />
              <div>
                <p className="title-blue">{el.stat}</p>
                <p className="simple-about-p">{el.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section1;
