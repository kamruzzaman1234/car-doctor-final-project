import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServiceCard = ({service})=>{
    const {_id,img, title, price} = service
    return(
        <div className="card card-compact bg-base-100 mt-6 shadow-xl">
  <figure>
    <img
      src={img}
      alt="Shoes" className="w-[314px] h-[208px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className="flex justify-between items-center">
    <p className="text-[#FF3811] text-xl font-bold">Price : ${price}</p>
    <Link className="bg-gray-400 p-2" to={`/checkout/${_id}`}>
         <FaArrowRight className="text-[#FF3811] text-xl font-medium"/>
    </Link>

    </div>
    {/* <div className="">
        <button className="btn text-white bg-[#FF3811]
        font-bold">Book Now</button>
     </div> */}
    
    
  </div>
</div>
    )
}
export default ServiceCard;