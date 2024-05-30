import abouthome from "../../assets/images/abouthome.png";

const AboutUs = () => {
  return (
    <div className="lg:p-20 p-10">
      <div className="lg:grid grid-cols-2 gap-10">
        <div className="lg:flex hidden">
          <img src={abouthome} alt="" />
        </div>
        <div className="mt-5">
          <div className="">
            <p className=" bg-violet-950/30 pl-2 text-sm backdrop-blur-md pr-2 pt-1 pb-1 rounded-md w-fit">
              About us
            </p>
          </div>
          <div className="mt-5">
            <h1 className="coral text-[24px] lg:text-[45px] font-bold lg:leading-[50px]">
              Your Gateway to Studying MBBS in Georgia
            </h1>
          </div>
          <div className="text-sm lg:text-[16px]">
            <p>
              Our mission is to help aspiring medical students achieve their
              dreams by providing expert guidance and support throughout their
              journey.
            </p>
          </div>
          <div className="lg:hidden flex my-5">
            <img src={abouthome} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className=" shadow-md p-3 text-center rounded-md">
              <h1 className=" font-bold text-center cinzel text-2xl ">12+</h1>
              <p>Years in Service</p>
            </div>
            <div className="shadow-md p-3 text-center rounded-md">
              <h1 className=" font-bold text-center cinzel text-2xl ">1700+</h1>
              <p>Students Assisted</p>
            </div>
            <div className="shadow-md p-3 text-center rounded-md">
              <h1 className=" font-bold text-center cinzel text-2xl ">35+</h1>
              <p>Medical Colleges</p>
            </div>
            <div className="shadow-md p-3 text-center rounded-md">
              <h1 className=" font-bold text-center cinzel text-2xl ">3200+</h1>
              <p>Doctors Made</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
