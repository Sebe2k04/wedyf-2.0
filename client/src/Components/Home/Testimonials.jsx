import testimonials from "../../assets/images/testimonials.png";
import tmborder from "../../assets/images/tmborder.png";
import data from "./data.json";
import quotel from "../../assets/images/quotel.png";
import quote from "../../assets/images/quote.png";

import tmbtn from "../../assets/images/tmbtn.png";
import { useState } from "react";

const Testimonials = () => {
  const [i, setI] = useState(0);
  const handlenum = () => {
    if (i < data.length - 1) {
      setI(i + 1);
    } else {
      setI(0);
    }
  };
  return (
    <div className="">
      <div className=""></div>
      <div className="bg-indigo-50 p-10 lg:p-20">
        <h1 className="text-4xl text-center pb-10 ">
          Testimonials from our Students{" "}
        </h1>
        <div className="absolute left-0 mt-[-25px] ">
          <img src={tmborder} alt="" className="w-[180px]" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex items-center">
            <div className="w-[450px] h-[450px] bg-white z-40 mt-auto mb-auto rounded-xl flex items-center">
              <div className="flex justify-center items-center h-full">
                <div className="">
                  <div className="flex justify-center">
                    <div className="w-[120px] h-[120px] rounded-full bg-gray-400">
                      {/* <img src= alt="" /> */}
                    </div>
                  </div>{" "}
                  <div className="text-center mt-5">
                    <h1 className="font-bold text-xl ">{data[i].name}</h1>
                    <p>{data[i].role}</p>
                  </div>
                  <div className="flex gap-5 p-5 text-center">
                    <img src={quotel} alt="" className="w-[30px] h-[20px]" />
                    <p>{data[i].testimonial}</p>
                    <img src={quote} alt="" className="w-[30px] h-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[-30px] z-40" onClick={() => handlenum()}>
              <img src={tmbtn} alt="" className="w-[60px] " />
            </div>
          </div>
          <div className="">
            <img src={testimonials} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
