import React from "react";
import './style.scss'
type Props = {
  image: string;
  text1: string;
  text2: string;
  colorClass: string;
};
const Card2 = ({ image, text1, text2, colorClass }: Props) => {
  return (
    <div className={colorClass + " card-2"}>
      <img src={image} />
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

export default Card2;
