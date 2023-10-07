import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import CommonHeroSection from "../../components/CommonHero/CommonHeroSection";
import Section1 from "../../components/About/Sections/Section1";
import Section2 from "../../components/About/Sections/Section2";
import Section3 from "../../components/About/Sections/Section3";
import Section4 from "../../components/About/Sections/Section4";
import Section5 from "../../components/About/Sections/Section5";
import Section6 from "../../components/About/Sections/Section6";
import Section7 from "../../components/About/Sections/Section7";
import Section8 from "../../components/About/Sections/Section8";
import { useScrollTop } from "../../hooks/useScrollTop";

const About = () => {
  useScrollTop();

  return (
    <div>
      <NavBar />
      <CommonHeroSection
        pageTitle="About us"
        image="images/9.jpg"
        title="About BK-TECH"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
};

export default About;
