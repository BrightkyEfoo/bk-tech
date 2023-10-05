import React from "react";
import Card2 from "../cards/Card2";
const cards: {
  image: string;
  title: string;
  body: string;
}[] = [
  {
    image: "../../../images/vision.png",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Our Vision",
  },
  {
    image: "../../../images/mountain.png",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Our Mission",
  },
];
const Section3 = () => {
  return (
    <div className="about-section-3-container">
      <div className="about-section-3-container-sub">
        <div>
          <h2>
            A group of creative minds dedicated to creating the best apps and
            websites in the world.
          </h2>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div>
          {cards.map((el, i) => {
            return <Card2 key={i} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section3;
