import React from "react";

type Props = {
  image: string;
  title: string;
  body: string;
};
const Card2 = ({ image, title, body }: Props) => {
  return (
    <div className="about-card2">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{body}</p>
      
    </div>
  );
};

export default Card2;
