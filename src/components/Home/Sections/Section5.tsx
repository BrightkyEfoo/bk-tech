import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Card5 from "../cards/Card5";
const cards = [
  {
    image: "images/computers2.svg",
    title: "Streamlined Project Management",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.",
  },
  {
    image: "images/deal2.svg",
    title: "Streamlined Project Management",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.",
  },
  {
    image: "images/worker.svg",
    title: "Streamlined Project Management",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.",
  },
];
const Section5 = () => {
  return (
    <div>
      <div className="section5-container">
        <div className="section5-container-sub">
          <div className="section5-container-sub-right">
            <h3 className="first-title">SERVICES</h3>
            <p className="second-title">
              Pourquoi <span>BK-TECH</span> est parmis les meilleurs ?{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            {cards.map((el, i) => {
              return <Card5 key={i} {...el} />;
            })}
          </div>
          <div className="section5-container-sub-left">
            <div className="image-container-sec-5">
              <img src="images/about-company.jpg" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>
              Let's Start a <span>New Project</span> Together
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet ligula nec leo elementum semper.
            </p>
            <button className="outlined-button">
              Request A Quote <MdOutlineArrowForwardIos color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
