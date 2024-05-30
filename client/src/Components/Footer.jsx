import footcallico from "../assets/images/footcallico.png"
import footmailico from "../assets/images/footmailico.png"
import fb from "../assets/images/fb.png"
import yt from "../assets/images/yt.png"
import twitter from "../assets/images/twitter.png"
import insta from "../assets/images/insta.png"

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white font-extralight'>
      <div className="">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 p-10 lg:p-20">
          <div className="lg:m-auto">
            <h1 className='font-bold text-2xl'>WEDYF</h1>
            <a href="">
              <div className="flex gap-2 mt-5">
                <img src={footcallico} alt="" className="w-[20px] h-[20px]" />
                <p>+995 591 36 66 00</p>
              </div>
            </a>
            <a href="">
              <div className="flex gap-2 mt-2">
                <img src={footmailico} alt="" className="w-[20px] h-[20px]" />
                <p>info@wedyf.com</p>
              </div>
            </a>
          </div>
          <div className="lg:m-auto">
            <h1 className="font-bold mb-5">Services</h1>
            <p>Free Services</p>
            <p>Premium Services</p>
          </div>
          <div className="lg:m-auto">
            <h1 className="font-bold mb-5">Study Options</h1>
            <p>Undergraduate</p>
            <p>PhD/Research</p>
          </div>
          <div className="lg:m-auto">
            <h1 className="font-bold mb-5">Resources</h1>
            <p>Study Information</p>
            <p>Georgia University Profiles</p>
            <p>Scholarships</p>
          </div>
          <div className="lg:m-auto">
            <h1 className="font-bold mb-5">About Us</h1>
            <p>Our Mission</p>
            <p>Our Vision</p>
            <p>Roadmap</p>
            <p></p>
          </div>
        </div>
        <hr />
        <div className="lg:flex justify-between p-5">
          <div className="flex">
          <p>©2024 WEDYF International Education. All rights reserved </p>
           &nbsp; | &nbsp;<span><a href="" className="font-bold">Privacy Policy</a></span>
          </div>
          <div className="flex gap-5 items-center justify-center p-5 lg:p-0">
            <a href=""><img src={fb} alt="" className="h-[30px]" /></a>
            <a href=""><img src={yt} alt="" className="w-[30px]" /></a>
            <a href=""><img src={twitter} alt="" className="w-[30px]" /></a>
            <a href=""><img src={insta} alt=""  className="w-[30px]"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer