import Card2 from "../cards/Card2";
import Reveal2 from "../../Reveal/Reveal2";

const cards = [
  {
    image: "images/startup.svg",
    text1: "20+",
    text2: "Years Experience",
    colorClass: "cc-blue",
  },
  {
    image: "images/team.svg",
    text1: "20+",
    text2: "Years Experience",
    colorClass: "cc-blue",
  },
  {
    image: "images/mobile.svg",
    text1: "1200+",
    text2: "Apps Developed",
    colorClass: "cc-purple",
  },
  {
    image: "images/startup.svg",
    text1: "20+",
    text2: "Years Experience",
    colorClass: "cc-green",
  },
  {
    image: "images/team.svg",
    text1: "20+",
    text2: "Years Experience",
    colorClass: "cc-green",
  },
  {
    image: "images/mobile.svg",
    text1: "1200+",
    text2: "Apps Developed",
    colorClass: "cc-purple",
  },
];

const Section2 = () => {
  return (
    <div className="section2-container">
      <div className="section2-container-sub">
        <div>
          <p>
            <span>
              <Reveal2>
                <span>BK-TECH</span>
              </Reveal2>
            </span>{" "}
            <Reveal2>Une entreprise de developpement</Reveal2>
          </p>
          <p>
            <Reveal2>
              Lorem Ipsum is text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum is text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </Reveal2>
          </p>
          <p>
            <Reveal2>
              Lorem Ipsumis simply dummy text of the printing and typesetting
              industry. Simply dummy text of the printing and typesetting
              industry.
            </Reveal2>
          </p>
          <button className="outlined-button">Request A Quote</button>
        </div>
        <div>
          {cards.map((el, i) => {
            return <Card2 key={i} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section2;
