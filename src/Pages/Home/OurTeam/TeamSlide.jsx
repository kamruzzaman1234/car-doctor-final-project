import t1 from "../../../assets/images/team/1.jpg";
import t2 from "../../../assets/images/team/2.jpg";
import t3 from "../../../assets/images/team/3.jpg";
import { FaGoogle, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa6";
const TeamSlide = ()=>{
    return(
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full mx-auto">
            <div className="grid grid-cols-3 mx-auto gap-6">
                <div className="mx-auto border-2 rounded-lg border-gray-100 py-5 px-5">
                    <img src={t1} alt="" className="w-[314px] h-[293px]"/>
                    <div className="space-y-2 mt-3 text-center">
                        <h2 className="font-bold">Car Engine Plus</h2>
                        <h4 className="font-semibold">Engine Expert</h4>
                        <div className="flex space-x-2 justify-center">
  {/* Google */}
  <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full p-2">
    <FaGoogle className="w-4 h-4 text-white" /> {/* Changed to white for better contrast */}
  </div>
  
  {/* Facebook */}
  <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full p-2">
    <FaFacebook className="w-4 h-4 text-white" /> {/* White icon for formal contrast */}
  </div>
  
  {/* Twitter */}
  <div className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 rounded-full p-2">
    <FaTwitter className="w-4 h-4 text-white" /> {/* White for clean contrast */}
  </div>
  
  {/* GitHub */}
  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-full p-2">
    <FaGithub className="w-4 h-4 text-white" /> {/* White icon for contrast */}
  </div>
</div>

                    </div>
                </div>
                <div className="mx-auto border-2 rounded-lg border-gray-100 py-5 px-5">
                    <img src={t2} alt="" className="w-[314px] h-[293px]"/>
                    <div className="space-y-2 mt-3 text-center">
                        <h2 className="font-bold">Car Engine Plus</h2>
                        <h4 className="font-semibold">Engine Expert</h4>
                        <div className="flex space-x-2 justify-center">
  {/* Google */}
  <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full p-2">
    <FaGoogle className="w-4 h-4 text-white" /> {/* Changed to white for better contrast */}
  </div>
  
  {/* Facebook */}
  <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full p-2">
    <FaFacebook className="w-4 h-4 text-white" /> {/* White icon for formal contrast */}
  </div>
  
  {/* Twitter */}
  <div className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 rounded-full p-2">
    <FaTwitter className="w-4 h-4 text-white" /> {/* White for clean contrast */}
  </div>
  
  {/* GitHub */}
  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-full p-2">
    <FaGithub className="w-4 h-4 text-white" /> {/* White icon for contrast */}
  </div>
</div>

                    </div>
                </div>
                <div className="mx-auto border-2 rounded-lg border-gray-100 py-5 px-5">
                    <img src={t3} alt="" className="w-[314px] h-[293px]"/>
                    <div className="space-y-2 mt-3 text-center">
                        <h2 className="font-bold">Car Engine Plus</h2>
                        <h4 className="font-semibold">Engine Expert</h4>
                        <div className="flex space-x-2 justify-center">
  {/* Google */}
  <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full p-2">
    <FaGoogle className="w-4 h-4 text-white" /> {/* Changed to white for better contrast */}
  </div>
  
  {/* Facebook */}
  <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full p-2">
    <FaFacebook className="w-4 h-4 text-white" /> {/* White icon for formal contrast */}
  </div>
  
  {/* Twitter */}
  <div className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 rounded-full p-2">
    <FaTwitter className="w-4 h-4 text-white" /> {/* White for clean contrast */}
  </div>
  
  {/* GitHub */}
  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-full p-2">
    <FaGithub className="w-4 h-4 text-white" /> {/* White icon for contrast */}
  </div>
</div>

                    </div>
                </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle text-[#FF3811] hover:bg-[#FF3811] 
            border-2 border-[#FF3811] hover:text-white">❮</a>
            <a href="#slide3" className="btn btn-circle text-[#FF3811]
             hover:bg-[#FF3811] hover:text-white border-2 border-[#FF3811]">❯</a>
          </div>
        </div>
        
       
       
      </div>
    )
}
export default TeamSlide;