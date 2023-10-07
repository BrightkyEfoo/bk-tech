import React, { useEffect, useState } from "react";
import "./style.scss";
const data = [
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    photo: "images/girl.jpg",
    name: "bikos maximus",
    poste: "CEO",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    photo: "images/girl.jpg",
    name: "bikos maximus",
    poste: "CEO",
  },
];
const CustomerSlider = () => {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const myInter = setInterval(() => {
      const ell = document.getElementById(
        "section6-container-sub-right-slider"
      );
      setSelected((prev) => {
        let res;
        if (prev === data.length - 1) {
          res = 0;
        } else {
          res = prev + 1;
        }
        ell?.scrollTo({
          top: 0,
          left: res * ell.clientWidth,
          behavior: "smooth",
        });
        return res;
      });
      // console.log("selected", selected);
    }, 2000);

    return () => {
      clearInterval(myInter);
    };
  }, []);

  return (
    <div
      className="section6-container-sub-right"
      id="section6-container-sub-right-slider"
    >
      {data.map((el, i) => {
        return <CustomerDetails key={i} {...el} />;
      })}
      <Pagination lenght={data.length} selected={selected} />
    </div>
  );
};
type CustomerDetailsProps = {
  text: string;
  photo: string;
  name: string;
  poste: string;
};
const CustomerDetails = ({
  text,
  photo,
  name,
  poste,
}: CustomerDetailsProps) => {
  return (
    <div className="customer-details-container">
      <p>{text}</p>
      <img src={photo} />
      <div>
        <p className="name">{name}</p>
        <p className="poste">{poste}</p>
      </div>
      <span>"</span>
    </div>
  );
};

type PaginationProps = { lenght: number; selected: number };
const Pagination = ({ lenght, selected }: PaginationProps) => {
  return (
    <div className="pagination-container">
      {Array(lenght)
        .fill(0)
        .map((el, i) => {
          return (
            <div
              key={i}
              className={
                i === selected ? "pagination-selected" : "pagination-simple"
              }
            >
              <span></span>
            </div>
          );
        })}
    </div>
  );
};

export default CustomerSlider;
