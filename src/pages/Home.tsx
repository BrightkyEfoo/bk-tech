import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/Hero-Section/HeroSection";
import Section1 from "../components/Home-componnents/Section1";
import Section2 from "../components/Home-componnents/Section2";
import Section3 from "../components/Home-componnents/Section3";
import Section4 from "../components/Home-componnents/Section4";
import Section5 from "../components/Home-componnents/Section5";
import Section6 from "../components/Home-componnents/Section6";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default Home;
