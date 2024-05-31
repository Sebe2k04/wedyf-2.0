import ch1 from "../../assets/images/ch1.png";
import ch2 from "../../assets/images/ch2.png";
import ch3 from "../../assets/images/ch3.png";
import ch4 from "../../assets/images/ch4.png";
import ch5 from "../../assets/images/ch5.png";

const WhyChoose = () => {
  return (
    <div className="p-10 lg:p-20">
      <div className="">
        <h1 className="text-center lg:text-4xl text-2xl font-bold mt-10 ">
          Why Choose WEDYF?
        </h1>
      </div>
      <div className="mt-10">
        <div className="lg:grid grid-cols-3  gap-5 duration-300 group ">
          <div className="">
            <img
              src={ch1}
              alt=""
              className="rounded-md  group-hover:shadow-2xl duration-300"
            />
          </div>

          <div className="flex items-center">
            <div className="">
              <h1 className="font-bold text-xl duration-300 group-hover:text-2xl ">
                Hospital Experiences
              </h1>
              <p className="group-hover:text-xl duration-300">
                Real-world clinical exposure for hands-on skills development.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-3  gap-5 duration-300 group">
          <div className=""></div>
          <div className="flex items-center">
            <div className="">
              <h1 className="font-bold text-xl duration-300 group-hover:text-2xl">Top College Admissions</h1>
              <p className="group-hover:text-xl duration-300">
                Secure admission to one of the top ten medical colleges in
                Tbilisi, Georgia.
              </p>
            </div>
          </div>
          <div className="">
            <img src={ch2} alt="" className="rounded-md group-hover:shadow-2xl duration-300" />
          </div>
        </div>
        <div className="lg:grid grid-cols-3  gap-5 duration-300 group">
          <div className="">
            <img src={ch3} alt="" className="rounded-md group-hover:shadow-2xl duration-300" />
          </div>
          <div className="flex items-center">
            <div className="">
              <h1 className="font-bold text-xl duration-300 group-hover:text-2xl">Global Career Opportunities</h1>
              <p className="group-hover:text-xl duration-300">
                Career development assistance to practice in India, the USA or
                elsewhere.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-3  gap-5 duration-300 group">
          <div className=""></div>
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="">
                <h1 className="font-bold text-xl duration-300 group-hover:text-2xl">
                  Comprehensive Career Guidance
                </h1>
                <p className="group-hover:text-xl duration-300">
                  Personalized advice for your medical journey from NEET exam
                  training to career planning.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img src={ch4} alt="" className="rounded-md group-hover:shadow-2xl duration-300" />
          </div>
        </div>
        <div className="lg:grid grid-cols-3  gap-5 duration-300 group">
          <div className="">
            <img src={ch5} alt="" className="rounded-md group-hover:shadow-2xl duration-300" />
          </div>
          <div className="flex items-center">
            <div className="">
              <h1 className="font-bold text-xl duration-300 group-hover:text-2xl">Competitive Exam Training</h1>
              <p className="group-hover:text-xl duration-300">Focused coaching for NEET, USMLE and FMGE exams.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
