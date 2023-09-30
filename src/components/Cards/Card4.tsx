import { type } from "os";
import React from "react";
type Props = {
  image: string;
  title: string;
  subTitle: string;
  desc: string;
  size: "normal" | "large" | "small";
  color: "purple" | "blue" | "green";
};
const Card4 = ({ size, image, title, subTitle, desc, color }: Props) => {
  return (
    <div className={"card-4 card-4" + size + " card-4" + color}>
      <img src={image} />
      <p>{title}</p>
      <p>{subTitle}</p>
      <p>{desc}</p>
    </div>
  );
};

export default Card4;
