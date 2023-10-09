import React from "react";
import Card1 from "../cards/Card1";
const cards: {
  image: string;
  title: string;
  desc: string;
}[] = [
  {
    desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
    image: "images/teama.svg",
    title: "Reliable Service. In House Team",
  },
  {
    desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
    image: "images/link.svg",
    title: "Trusted by People Like You",
  },
  {
    desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
    image: "images/tech.svg",
    title: "Complete Technical Competency",
  },
  {
    desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
    image: "images/tech.svg",
    title: "Friendly & Cordial in Nature",
  },
  {
    desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
    image: "images/badge.svg",
    title: "Excellent Quality Delivered on Time",
  },
  {
    desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
    image: "images/tin.svg",
    title: "Effective & Continuous Communication",
  },
];

const Section6 = () => {
  return (
    <div className="services-section-6-container">
      <div className="services-section-6-container-sub">
        <span className="title-red">WE DELIVER OUR BEST</span>
        <h2 className="title-blue">Why Choose BK-ECH</h2>
        <p className="simple-about-p">
          Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.
          In vel hendrerit nisi. Vestibulum eget risus velit.
        </p>
        <div>
          {cards.map((el, i) => {
            return <Card1 key={i} {...el} />;
          })}
        </div>
        <div>
          Let's Start a <span>New Project</span> Together
          <button className="quote-button">
            Meet Our Team<span className="circle"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section6;
