import AboutUs from "../Components/Home/AboutUs"
import Hero from "../Components/Home/Hero"
import Pathway from "../Components/Home/Pathway"
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
    </div>
  )
}

export default Home