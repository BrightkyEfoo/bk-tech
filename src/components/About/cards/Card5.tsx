import React from "react";
type Props = {
  title: string;
  body: string;
  timeTitle: string;
  year: string;
  badges?: string[];
};
const Card5 = ({ body, timeTitle, title, year, badges }: Props) => {
  return (
    <div className="about-card-5">
      <div>
        {timeTitle}
        <small>{year}</small>
      </div>
      <div>
        <h4 className="title-blue">{title}</h4>
        <p className="simple-about-p">{body}</p>
        <div className="badges-container">
          {badges
            ? badges.map((el, i) => {
                return <img key={i} src={el} alt="" />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Card5;
