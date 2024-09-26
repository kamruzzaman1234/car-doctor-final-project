import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Service = ()=>{
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:6009/services")
        .then(res=> res.json())
        .then(data=>
            setServices(data)
        )
    },[])

    
    return(
        <div className="my-8">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-[#FF3811]">Our Service</h3>
                <h2 className="text-5xl font-semibold mb-3">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, 
                or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mb-3">
                    {
                    services.map(service=> <ServiceCard key={service._id}
                     service={service}></ServiceCard>)
                    
                    }
                    </div>
                    <div className="text-center my-3">
                        <button className="btn border-2  border-[#FF3811] text-[#FF3811]
                         font-bold">More Service</button>
                    </div>

               
            </div>
            
        </div>
    )
}
export default Service;