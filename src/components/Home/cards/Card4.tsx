import gsap from "gsap";
import React, { useRef } from "react";
type Props = {
  image: string;
  title: string;
  subTitle: string;
  desc: string;
  size: "normal" | "large" | "small";
  color: "purple" | "blue" | "green";
};
const Card4 = ({ size, image, title, subTitle, desc, color }: Props) => {
  const imRef = useRef<HTMLImageElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  return (
    <div className={"card-4 card-4" + size + " card-4" + color}>
      <img ref={imRef} src={image} alt="" />
      <p>{title}</p>
      <p>{subTitle}</p>
      <p ref={descRef}>{desc}</p>
    </div>
  );
};

export default Card4;
