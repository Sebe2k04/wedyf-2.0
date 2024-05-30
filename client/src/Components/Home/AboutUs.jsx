import abouthome from "../../assets/images/abouthome.png"

const AboutUs = () => {
  return (
    <div>
        <div className="grid grid-cols-2">
            <div className="">
                <img src={abouthome} alt="" />
            </div>
            <div className="">
                <div className="">
                    <p className="bg-">About us</p>
                </div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs