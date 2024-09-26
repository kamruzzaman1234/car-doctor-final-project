import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const LogIn = ()=>{
    const {logInUser} = useContext(AuthContext)
    const handleLogIn =  (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const confirmPassword = form.confirmPassword.value 
        console.log(email, confirmPassword)
        logInUser(email, confirmPassword)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    return(
        <div className="hero bg-base-200 py-8">
  <div className="hero-content flex-col lg:flex-row">
    <div className="mr-12 w-1/2">
        <img src={logImg} alt="" />
     
    </div>
    <div className="card bg-base-100 py-6 border-1 border-[#FF3811] w-full  max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <form className="card-body" onSubmit={handleLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirmPassword" placeholder="password" className="input input-bordered" required />
          </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-[#FF3811] text-white">Login</button>
        </div>
        
      </form>
      <div className="space-y-3">
        <div  className="text-center">
            <p  className="label-text-[15px] text-center font-medium link link-hover">or sign in with</p>
          </div>
          <div className="flex justify-center gap-3">
                <span className="p-2 bg-gray-200 rounded-full">
                <FaFacebook className="text-blue-500"></FaFacebook></span>
                <span className="p-2 bg-gray-200 rounded-full">
                <MdEmail className="text-yellow-500"></MdEmail>
                </span>
                <span className="p-2 bg-gray-200 rounded-full">
                <FaLinkedin className="text-blue-500"></FaLinkedin>
                </span>
            </div>
            <p className="text-center">New to Car Doctor ? <Link to="/signup" className="text-[#FF3811] font-bold">
            Signup</Link></p>
      </div>
    </div>
  </div>
</div>
    )
}
export default LogIn;