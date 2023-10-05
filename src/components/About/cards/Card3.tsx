import React from "react";
import { useMediaQuery } from "react-responsive";
type Props = {
  image: string;
  subTitle: string;
  title: string;
  body: string;
  orientation: "left" | "right";
};
const Card3 = ({ body, image, subTitle, title, orientation }: Props) => {
  const isSmall = useMediaQuery({
    query: "(max-width: 1050px)",
  });
  return (
    <div
      className="about-card-3"
      style={{
        flexDirection: isSmall
          ? "column"
          : orientation === "left"
          ? "row"
          : "row-reverse",
      }}
    >
      <img src={image} alt="" />
      <div>
        <span className="title-red">{subTitle}</span>
        <h2 className="title-blue">{title}</h2>
        <p className="simple-about-p">{body}</p>
      </div>
    </div>
  );
};

export default Card3;
