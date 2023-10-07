import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import CommonHeroSection from "../../components/CommonHero/CommonHeroSection";
import Footer from "../../components/footer/Footer";
import Section1 from "../../components/Services/Sections/Section1";
import Section2 from "../../components/Services/Sections/Section2";
import Section3 from "../../components/Services/Sections/Section3";
import Section4 from "../../components/Services/Sections/Section4";
import Section5 from "../../components/Services/Sections/Section5";
import Section6 from "../../components/Services/Sections/Section6";
import Section7 from "../../components/Services/Sections/Section7";
import Section8 from "../../components/Services/Sections/Section8";
import Section9 from "../../components/Services/Sections/Section9";
import Section10 from "../../components/Services/Sections/Section10";
import NewsLetterFormSection from "../../components/NewsLetterFormSection/NewsLetterFormSection";
import { useScrollTop } from "../../hooks/useScrollTop";

const Services = () => {
  useScrollTop();

  return (
    <div>
      <NavBar />
      <CommonHeroSection
        pageTitle="Services"
        image="images/4.jpg"
        title="Services"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <NewsLetterFormSection />
      <Footer />
    </div>
  );
};

export default Services;
