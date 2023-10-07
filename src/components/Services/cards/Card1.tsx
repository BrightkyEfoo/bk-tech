import React from "react";
import "./style.scss";
export type Props = {
  image: string;
  title: string;
  desc: string;
};
const Card1 = ({ desc, image, title }: Props) => {
  return (
    <div className="services-card-1">
      <img src={image} alt="" />
      <div>
        <h3 className="title-blue">{title}</h3>
        <p className="simple-about-p">{desc}</p>
      </div>
    </div>
  );
};

export default Card1;
