import Navbar from "../Components/Navbar"

const NotFound = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="h-screen flex justify-center items-center">
        <div className="">
        <h1 className="text-4xl font-bold text-center ">Not Found</h1>
        <p className="text-center pt-5">Under Development</p>
        </div>
      </section>
    </div>
  )
}

export default NotFound