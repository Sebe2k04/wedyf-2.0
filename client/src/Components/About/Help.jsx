import ah1 from "../../assets/images/ah1.png";
import ah2 from "../../assets/images/ah2.png";
import ah3 from "../../assets/images/ah3.png";

const Help = () => {
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-center text-orange-400 ">VALUE PROPOSTION</h1>
        <h1 className="text-4xl font-bold text-center">How we can help</h1>
      </div>
      <div className="grid grid-cols-3 gap-5 p-10 lg:p-20">
        <div className="shadow-md rounded-md p-5">
          <div className="flex justify-center">
            <img src={ah1} alt="" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl">Lack of Information?</h1>
            <p>
              We provide you with everything you need to know about pursuing
              MBBS in Georgia
            </p>
          </div>
        </div>
        <div className="shadow-md rounded-md p-5">
          <div className="flex justify-center">
            <img src={ah2} alt="" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl">Communication Breakdowns?</h1>
            <p>
              We ensure transparent and consistent communication with reliable
              updates and guidance throughout your application process
            </p>
          </div>
        </div>
        <div className="shadow-md rounded-md p-5">
          <div className="flex justify-center">
            <img src={ah3} alt="" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl">Need the extra mile?</h1>
            <p>
              We offer personalized insights into university programs, cultural
              orientation, and navigating life abroad
            </p>
          </div>
        </div>
      </div>
      <hr className="ml-20 mr-20" />
    </div>
  );
};

export default Help;
