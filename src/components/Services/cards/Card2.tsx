import React from "react";
type Props = {
  image: string;
  title: string;
  desc: string;
  index: number;
  inverse?: boolean;
};
const Card2 = ({ desc, image, title, index, inverse }: Props) => {
  return (
    <div className={inverse ? "services-card-2 inversed" : "services-card-2"}>
      <img src={image} alt="" />
      <div>
        <span>{index}</span>
        <h4 className="title-blue">{title}</h4>
        <p className="simple-about-p">{desc}</p>
      </div>
    </div>
  );
};

export default Card2;
