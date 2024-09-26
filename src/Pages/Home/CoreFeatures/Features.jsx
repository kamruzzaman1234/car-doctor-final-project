import c1 from "../../../assets/images/c1.svg";
import c2 from "../../../assets/images/c2.svg";
import c3 from "../../../assets/images/c3.svg";
import c4 from "../../../assets/images/c4.svg";
import c5 from "../../../assets/images/c5.svg";


const Features = ()=>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5">
            <div className="border-2 border-gray-100 p-10 hover:text-white
             text-center mx-auto rounded-lg transition  hover:bg-[#FF3811]">
                <img src={c1} alt="" className="w-[40px] h-[35px] mx-auto" />
                <h3 className="font-bold">Expert Team</h3>
            </div>
            <div className="border-2 border-gray-100 p-10 hover:text-white
             text-center mx-auto rounded-lg transition  hover:bg-[#FF3811]">
                <img src={c2} alt="" className="w-[40px] h-[35px] mx-auto" />
                <h3 className="font-bold">Timely Delivery</h3>
            </div>
            <div className="border-2 border-gray-100 p-10 hover:text-white
             text-center mx-auto rounded-lg transition  hover:bg-[#FF3811]">
                <img src={c3} alt="" className="w-[40px] h-[35px] mx-auto" />
                <h3 className="font-bold ">24/7 support</h3>
            </div>
            <div className="border-2 border-gray-100 p-10 hover:text-white
             text-center mx-auto rounded-lg transition  hover:bg-[#FF3811]">
                <img src={c4} alt="" className="w-[40px] h-[35px] mx-auto" />
                <h3 className="font-bold ">100% Guranty</h3>
            </div>
            <div className="border-2 border-gray-100 p-10 hover:text-white
             text-center mx-auto rounded-lg transition  hover:bg-[#FF3811]">
                <img src={c5} alt="" className="w-[40px] h-[35px] mx-auto" />
                <h3 className="font-bold ">Time Delivery</h3>
            </div>
        </div>
    )
}
export default Features;