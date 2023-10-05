import React from "react";

type Props = {
  image: string;
  title: string;
  body: string;
};
const Card4 = ({ body, image, title }: Props) => {
  return (
    <div className="about-card-4">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <p className="simple-about-p">{body}</p>
    </div>
  );
};

export default Card4;
