import React from "react";
import './style.scss'
type Props = { image: string; text: string; colorClass: string };

const Card1 = ({ image, text, colorClass }: Props) => {
  return (
    <div className={colorClass+' card-1'}>
      <img src={image} />
      <p>{text}</p>
    </div>
  );
};

export default Card1;
