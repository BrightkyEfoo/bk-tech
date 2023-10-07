import React from "react";
export type Props = {
  color: "blue" | "red" | "dark-blue";
  image: string;
  title: string;
  subTitle: string;
  price: number;
  subDesc: string;
  desc: string[];
  link: string;
};
const Card3 = ({
  color,
  desc,
  image,
  link = "#",
  price,
  subDesc,
  subTitle,
  title,
}: Props) => {
  return (
    <div
      className={
        "services-card-3 " +
        (color === "blue"
          ? "bg-blue"
          : color === "dark-blue"
          ? "bg-dark-blue"
          : "bg-red")
      }
    >
      <img src={image} alt="" />
      <h4>{title}</h4>
      <p className="xxdd">{subTitle}</p>
      <p
        className={
          "price-container " +
          (color === "blue"
            ? "font-blue"
            : color === "dark-blue"
            ? "font-dark-blue"
            : "font-red")
        }
      >
        <span>$</span> {price.toFixed(2)}
      </p>
      <p className="xxdd">{subTitle}</p>
      <hr />
      {desc.map((el, i) => {
        return (
          <p className="xxdd" key={i}>
            {el}
          </p>
        );
      })}
      <div>
        <button
          className={
            "quote-button " +
            (color === "blue"
              ? "bg-blue"
              : color === "dark-blue"
              ? "bg-dark-blue"
              : "bg-red")
          }
        >
          Get Started <span className="circle"></span>
        </button>
      </div>
    </div>
  );
};

export default Card3;
