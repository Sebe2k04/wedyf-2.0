import AllColleges from "../Components/Colleges/AllColleges"
import CollegeHero from "../Components/Colleges/CollegeHero"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"


const Colleges = () => {
  return (
    <div>
        <section>
            <Navbar />
        </section>
        <section className="pt-[80px]">
            <CollegeHero />
        </section>
        <section>
            <AllColleges />
        </section>
        <section>
            <Footer />
        </section>
    </div>
  )
}

export default Colleges