import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const SignUp = ()=>{

    const {createUser, user} = useContext(AuthContext)

    const handleSignUp =  (e)=>{
        e.preventDefault()
     
        const form = e.target
        const name = form.name.value
        const email = form.email.value 
        const confirmPassword = form.confirmPassword.value 
        console.log(email, confirmPassword)

        createUser(email, confirmPassword)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
        form.reset()
        
    }
    return(
        <div className="hero bg-base-200 py-8">
  <div className="hero-content flex-col lg:flex-row">
    <div className="mr-12 w-1/2">
        <img src={logImg} alt="" />
     
    </div>
    <div className="card bg-base-100 px-10 py-6 border-1 border-[#FF3811] w-full  max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-3xl text-center font-bold">Sign Up now!</h1>
      <form className="card-body" onSubmit={handleSignUp}>
        <div className="form-control">
            <label className="labe">
                <span>Name :</span>
            </label>
            <input type="text" name="name" placeholder="name" 
            className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" 
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirmPassword" placeholder="password" className="input input-bordered" required />
          </div>
        <div className="form-control mt-6">
          <button type="submit" className=" btn bg-[#FF3811] text-white">SignUp</button>
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
            <p className="text-center">Already Have a Account ? <Link to="/login" className="text-[#FF3811] font-bold">
            Login</Link></p>
      </div>
    </div>
  </div>
</div>
    )
}
export default SignUp;