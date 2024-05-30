import Footer from "../Components/Footer"
import AboutUs from "../Components/Home/AboutUs"
import Faq from "../Components/Home/Faq"
import Hero from "../Components/Home/Hero"
import Pathway from "../Components/Home/Pathway"
import Testimonials from "../Components/Home/Testimonials"
import WhyChoose from "../Components/Home/WhyChoose"
import Navbar from "../Components/Navbar"


const Home = () => {
  return (
    <div>
        <section>
        <Navbar />
        </section>
        <section>
          <Hero/>
        </section>
        <section>
          <AboutUs />
        </section>
        <section>
          <Pathway />
        </section>
        <section>
          <WhyChoose />
        </section>
        <section>
          <Faq />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Footer />
        </section>
    </div>
  )
}

export default Home