import React from "react";

type Props = { image: string; title: string; subTitle: string };
const Card4 = ({ image, subTitle, title }: Props) => {
  return (
    <div className="services-card-4">
      <img src={image} alt="" />
      <p className="title-blue">{title}</p>
      <p className="simple-about-p">{subTitle}</p>
    </div>
  );
};

export default Card4;
