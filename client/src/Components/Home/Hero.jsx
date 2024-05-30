import round1 from "../../assets/images/round1.png"
import roundl1 from "../../assets/images/roundl1.png"
import heroimg from "../../assets/images/heroimg.png"

const Hero = () => {
  return (
    <div>
        <div className="grid grid-cols-2 bg-slate-800 h-screen ">
            <div className="">
                <div className="">
                    <div className="">
                        <p>Trusted Educational Services</p>
                    </div>
                    <div className="">
                        <h1></h1>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={heroimg} alt="" className="w-[400px]" />
            </div>
        </div>
    </div>
  )
}

export default Hero