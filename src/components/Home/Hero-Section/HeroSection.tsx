import "./style.scss";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import Reveal from "../../Reveal/Reveal";

const HeroSection = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-section-sub">
        <div>
          <p className="big-big-white">
            <TypeAnimation
              sequence={[
                "We love Web.",
                1000,
                "We love Mobile.",
                1000,
                "We love Graphics.",
                1000,
                "We love Marketing.",
                1000,
                "",
                100,
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: "1.6em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <p className="big-white">Precision.</p>
          <p className="big-white">Rapidite.</p>
          <p className="big-white">Robustesse.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            pretium turpis.
          </p>
          <button>Essayez maintenant</button>
        </div>
        <Reveal>
          <img src="images/mobile_hero_banner.png" alt="hero"/>
        </Reveal>
      </div>
    </div>
  );
};

export default HeroSection;
