import React from "react";
const cards: string[] = [
  "images/java.png",
  "images/kotlin.jpeg",
  "images/spring-boot.png",
  "images/angular.png",
  "images/reactjs.png",
  "images/vue.png",
  "images/figma.png",
  "images/xd.png",
  "images/php.png",
  "images/sql.png",
  "images/postgres.png",
  "images/flutter.png",
  "images/android.png",
  "images/ios.png",
  "images/shell.png",
  "images/github.png",
];

const Section3 = () => {
  return (
    <div className="services-section-3-container">
      <div className="services-section-3-container-sub">
        {cards.map((el, i) => {
          return (
            <div key={i}>
              <img src={el} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section3;
