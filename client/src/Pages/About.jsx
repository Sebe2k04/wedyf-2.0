import AboutHero from "../Components/About/AboutHero";
import Help from "../Components/About/Help";
import Leaders from "../Components/About/Leaders";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="pt-[70px]">
        <AboutHero />
      </section>
      <section>
        <Help />
      </section>
      <section>
        <Leaders />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default About;
