import testimonials from "../../assets/images/testimonials.png"

const Testimonials = () => {
  return (
    <div className="p-10 lg:p-20">
    <div className="">
        <h1 className="text-4xl">Testimonials from our Students </h1>
    </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div className=""></div>
            <div className="">
                <img src={testimonials} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials