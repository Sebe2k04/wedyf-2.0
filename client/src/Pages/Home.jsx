import AboutUs from "../Components/Home/AboutUs"
import Hero from "../Components/Home/Hero"
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
    </div>
  )
}

export default Home