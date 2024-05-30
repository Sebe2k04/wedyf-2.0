import heroimg from "../../assets/images/heroimg.png";
import callico from "../../assets/images/callico.png";
import { Link } from "react-router-dom";
import { FaCircleArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-slate-800 p-10 text-white lg:px-20 min-h-[100vh] flex items-center pt-[110px]">
      <div className="">
      <div className="lg:grid grid-cols-5   ">
        <div className=" col-span-3 flex items-center">
          <div className="">
            <div className="flex justify-start ">
              <div className="bg-white pl-2 pr-2 pt-1 pb-1 text-sm rounded-md text-white bg-white/10 backdrop-blur-md my-5 tracking-wide font-extralight">
                <p>Trusted Educational Services</p>
              </div>
            </div>
            <div className="lg:text-[65px] text-[24px] text-white lg:leading-[70px] coral">
              <h1>Make Your MBBS Dream a Reality in Georgia</h1>
            </div>
            <div className="text-[12px] lg:text-[20px] my-5 font-extralight ">
              <p>
                At WEDYF, we have direct connections with the best medical
                universities in Georgia, ensuring a bright future for your
                medical career.
              </p>
            </div>
            <div className="lg:block hidden">
              <div className="flex items-center gap-20">
                <div className="">
                  <Link to={"/contact"}>
                    <div className="bg-white hover:bg-orange-400 flex gap-2 items-center text-orange-400 pl-3 pr-3 pt-1 pb-1 rounded-md hover:text-white">
                      <p>Free Consultation</p>
                      <FaCircleArrowDown className="" />
                    </div>
                  </Link>
                </div>
                <div className="">
                  <a href="tel:+955591366600">
                    <div className="flex gap-2 items-center">
                      <img src={callico} alt="" className="w-[40px] h-[40px]" />
                      <div className="">
                        <p>Call For Enquiry</p>
                        <p>+955 591 36 66 00</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex gap-20 mt-10">
                <div className="text-center">
                  <h1 className="text-2xl font-bold ">4.5 / 5</h1>
                  <p>
                    Reviewed by 1K+ <br /> Students
                  </p>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-bold ">1 K</h1>
                  <p>
                    Students <br /> Assisted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center  col-span-2">
          <img src={heroimg} alt="" className="" />
        </div>
      </div>
      <div className="lg:hidden block mt-5">
        <div className="flex justify-center items-center gap-5 lg:gap-20">
          <div className="">
            <Link to={"/contact"}>
              <div className="bg-white text-sm hover:bg-orange-400 flex gap-2 items-center lg:text-md text-orange-400 pl-3 pr-3 pt-1 pb-1 rounded-md hover:text-white">
                <p>Free Consultation</p>
                <FaCircleArrowDown className="" />
              </div>
            </Link>
          </div>
          <div className="">
            <a href="tel:+955591366600">
              <div className="flex gap-2 items-center">
                <img src={callico} alt="" className="w-[24px] h-[24px]" />
                <div className="text-sm lg:text-md">
                  <p>Call For Enquiry</p>
                  <p>+955 591 36 66 00</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-20  mt-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold ">4.5 / 5</h1>
            <p>
              Reviewed by 1K+ <br /> Students
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold ">1 K</h1>
            <p>
              Students <br /> Assisted
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
