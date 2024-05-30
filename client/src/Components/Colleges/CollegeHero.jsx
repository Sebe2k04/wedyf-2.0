import cd1 from "../../assets/images/cd1.png";
import cd2 from "../../assets/images/cd2.png";

const CollegeHero = () => {
  return (
    <div>
      <div className="bg-slate-800 h-[60vh]">
        <div className="flex justify-start items-end absolute mt-20">
          <img src={cd1} alt="" className="w-[300px] mt-auto" />
        </div>
        <div className="flex justify-center text-center items-center h-full">
          <div className="text-white ">
            <h1 className="font-bold text-3xl">
              Study in Top Colleges in Georgia
            </h1>
            <p className="mt-5">At WEDYF, We have tie-ups with top universities in Georgia. </p>
          </div>
        </div>
        <div className="flex justify-end absolute right-20 top-[100px]">
          <img src={cd2} alt="" className="w-[200px]" />
        </div>
      </div>{" "}
    </div>
  );
};

export default CollegeHero;
