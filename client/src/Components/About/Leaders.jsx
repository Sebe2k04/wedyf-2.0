import ceo from "../../assets/images/ceo.png";

const Leaders = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="flex justify-center">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <div className="flex justify-center items-center">
          <div className="">
            <h1 className="  font-bold pb-2  text-orange-400">LEADERS</h1>
            <img src={ceo} alt="" className="w-[250px] rounded-md m-auto" />
            <h1 className="text-center font-bold text-2xl pt-5">
              Mr. Shivaand Utlasar
            </h1>
            <p className="text-center font-extralight pt-2">CEO</p>
          </div>
        </div>
        <div className="max-w-[600px] text-justify mr-auto my-auto col-span-2">
          <p>
            Dr. Shivaand Utlasar, esteemed President of SU Education Group,
            stands as a beacon of excellence in the realm of education,
            embodying a steadfast commitment to academic advancement and
            cross-cultural collaboration. Raised in a family that revered
            education, Dr.Shiva&apos;s formative years were enriched by his education
            at Sainik School (Vijayapura, Karnataka, India), instilling in him
            the values of discipline, resilience, and a profound belief in the
            transformative power of learning.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Leaders;
