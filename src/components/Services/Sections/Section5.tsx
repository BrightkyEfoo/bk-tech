import React from "react";
import Card2 from "../cards/Card2";

const cards: {
  image: string;
  title: string;
  desc: string;
  inverse?: boolean;
}[] = [
  {
    desc: `Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.`,
    image: "images/process-1.jpg",
    title: "Requirement Gathering",
  },
  {
    desc: `Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.`,
    image: "images/process-2.jpg",
    title: "Requirement Gathering",
    inverse: true,
  },
  {
    desc: `Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.`,
    image: "images/process-3.jpg",
    title: "Requirement Gathering",
  },
  {
    desc: `Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.`,
    image: "images/process-4.jpg",
    title: "Requirement Gathering",
    inverse: true,
  },
];
const Section5 = () => {
  return (
    <div className="services-section-5-container">
      <div className="services-section-5-container-sub">
        <span className="title-red">PROCESS</span>
        <h2 className="title-blue">Our App Development Process</h2>
        <p className="simple-about-p">
          Our design process follows a proven approach. We begin with a deep
          understanding of your needs and create a planning template.
        </p>
        <div>
          {cards.map((el, i) => {
            return <Card2 key={i} index={i + 1} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section5;
