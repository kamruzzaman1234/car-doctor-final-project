import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckOut = ()=>{
    const {user} = useContext(AuthContext)
    const serviceData = useLoaderData()
    const {title, price, _id, img} = serviceData
    const handleOrder = (e)=>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const date = form.date.value 
        const email = form?.email.value 
        const due = form.due.value 
        const order = {
            CustomerName: name,
            email,
            img,
            serviceTitle:title,
            ServiceDate : date,
            Service: _id,
            Due: due
        }
        console.log(order)
        fetch('http://localhost:6009/booking', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))

    }
    return(
        <div className="my-10 ">
            <h2 className="text-3xl  text-center font-bold text-[#FF3811]">Book Service and Order</h2>
            <form action="" className="mt-6" onSubmit={handleOrder}>
                <div className="grid bg-slate-300 py-10 px-6 rounded-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">Name</label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered"
                         placeholder="Enter name" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">Date</label>
                        <input type="date" name="date" className="input input-bordered"
                         required/>
                    </div>
                    <div className="form-control">
                        <label className="label">Email</label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="Enter Email"
                         className="input input-bordered" required
                         />
                    </div>
                    <div className="form-control">
                        <label className="label">Due Amount</label>
                        <input type="text" defaultValue={'$' +  price} name="due" 
                         className="input input-bordered" required
                         />
                    </div>
                    <div className="form-control col-span-2 text-center mt-6">
                       
                        <input type="submit" value="Order Confirm"
                         className="btn btn-block font-bold
                         text-white  bg-[#FF3811]"
                         />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CheckOut;