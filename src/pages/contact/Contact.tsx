import Section2 from "../../components/About/Sections/Section2";
import Section8 from "../../components/About/Sections/Section8";
import CommonHeroSection from "../../components/CommonHero/CommonHeroSection";
import Section1 from "../../components/Contact/Sections/Section1";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
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
