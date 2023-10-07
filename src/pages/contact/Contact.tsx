import { useEffect } from "react";
import Section2 from "../../components/About/Sections/Section2";
import Section8 from "../../components/About/Sections/Section8";
import CommonHeroSection from "../../components/CommonHero/CommonHeroSection";
import Section1 from "../../components/Contact/Sections/Section1";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  useEffect(() => {
    let app = document.getElementById("App");

    app?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <NavBar />
      <CommonHeroSection
        pageTitle="Contact us"
        image="images/4.jpg"
        title="Contact BK-TECH"
      />
      <Section1 />
      <Section2 />
      <Section8 />
      <Footer />
    </div>
  );
};

export default Contact;
