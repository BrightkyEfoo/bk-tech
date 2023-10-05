import React from "react";
type Props = {
  image: string;
  title: string;
  text: string;
};
const Card5 = ({ image, title, text }: Props) => {
  return (
    <div className="card-5">
      <div>
        <img src={image} />
      </div>
      <div>
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card5;
