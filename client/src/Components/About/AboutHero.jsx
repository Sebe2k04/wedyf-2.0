import aboutperson from "../../assets/images/aboutperson.png"
import about1 from "../../assets/images/about1.png"
import about2 from "../../assets/images/about2.png"
import about3 from "../../assets/images/about3.png"
import about4 from "../../assets/images/about4.png"
import dna from "../../assets/images/dna.png"

const AboutHero = () => {
  return (
    <div>
        <div className="bg-slate-800 rounded-bl-[100px]">
            <div className="lg:grid lg:grid-cols-2 h-[60vh]">
                <div className="text-white">
                    <img src={aboutperson} alt="" className="w-[300px] pl-20 pt-20 absolute" />
                   <div className="flex items-center h-full pl-20">
                   <div className="">
                    <h1 className="font-bold text-2xl mb-3">About WEDYF</h1>
                    <p>WEDYF is an International Education Organization which enables the Indian NEET aspirants to get into Top Colleges in Georgia</p>
                    </div>
                   </div>
                </div>
                <div className="lg:grid grid-cols-2">
                    <img src={about1} alt="" className="w-[240px] ml-auto mt-auto mb-auto mr-[-80px]" />
                    <img src={about2} alt="" className="w-[200px] ml-auto" />
                    <img src={about3} alt="" className="w-[200px] ml-auto  mr-[-50px]" />
                    <img src={about4} alt="" className="w-[240px] ml-auto mt-auto pt-10" />
                </div>
            </div>
        </div>
        <div className="mt-[200px] lg:pl-20 lg:pr-10 pl-10 pr-10">
            <div className="grid grid-cols-2 gap-10">
                <div className="">
                    <h1 className="text-orange-400 font-bold text-xl">OUR MISSION</h1>
                    <h1 className="font-bold text-[50px] leading-[75px]">Help students pursue
their goals</h1>
                </div>
                <div className="text-justify flex items-center">
                    <p>At WEDYF, our mission is to empower aspiring medical students in India by providing comprehensive guidance, support, and resources to pursue their MBBS degrees in Georgia&apos;s top universities. </p>
                </div>
            </div>
            
            
        </div>
        <div className="mt-[-150px]">
                <img src={dna} alt="" />
            </div>
            <hr className="mt-10 ml-10 mr-10" />
    </div>
  )
}

export default AboutHero