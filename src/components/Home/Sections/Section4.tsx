import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Card4 from "../cards/Card4";

const cards: {
  image: string;
  title: string;
  subTitle: string;
  desc: string;
  size: "normal" | "large" | "small";
  color: "purple" | "blue" | "green";
}[] = [
  {
    image: "images/card4/development.svg",
    title: "Web Development",
    subTitle: "PHP | .NET | JAVA | JOOMLA",
    size: "normal",
    desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
    color: "purple",
  },
  {
    image: "images/card4/ecommerce.svg",
    title: "Ecommerce Development",
    subTitle: "MAGENTO | WP | SHOPIFY | JOOMLA",
    size: "normal",
    desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
    color: "green",
  },
  {
    image: "images/card4/app.svg",
    title: "Mobile App Development",
    subTitle: "IPHONE | ANDROID | CROSS PLATFORM",
    size: "normal",
    desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
    color: "purple",
  },
  {
    image: "images/card4/tech.svg",
    title: "Trending Technologies",
    subTitle: "REACT.JS | NODE.JS | ANGULAR.JS",
    size: "normal",
    desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
    color: "blue",
  },
  {
    image: "images/card4/seo.svg",
    title: "Digital Marketing",
    subTitle: "SEO | SMO | PPC",
    size: "large",
    desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
    color: "green",
  },
];

const Section4 = () => {
  return (
    <div className="section4-container">
      <div className="section4-container-sub">
        <h3 className="first-title">SERVICES</h3>
        <p className="second-title">Our Services</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's specimen book. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          <div>
            <p>INTEGRATED SERVICES</p>
            <p>
              Lorem Ipsum is text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500.
            </p>
            <button>
              Learn More <MdOutlineArrowForwardIos color="white" />
            </button>
          </div>
          {cards.map((el, i) => {
            return <Card4 key={i} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section4;
