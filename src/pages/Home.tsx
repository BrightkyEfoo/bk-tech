import { useEffect } from "react";
import HeroSection from "../components/Home/Hero-Section/HeroSection";
import Section1 from "../components/Home/Sections/Section1";
import Section2 from "../components/Home/Sections/Section2";
import Section3 from "../components/Home/Sections/Section3";
import Section4 from "../components/Home/Sections/Section4";
import Section5 from "../components/Home/Sections/Section5";
import Section6 from "../components/Home/Sections/Section6";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";

const Home = () => {
  useEffect(() => {
    let app = document.getElementById("App");

    app?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])

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
