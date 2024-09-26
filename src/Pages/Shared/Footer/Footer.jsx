import Logo from "../../../assets/logo.svg";
import { FaGoogle, FaFacebook,FaTwitter,FaGithub } from "react-icons/fa";

const Footer = ()=>{
    return(
        <div className="">
 <footer className="footer bg-black text-white p-10">
  <aside>
    <img src={Logo} alt=""  className="mb-4"/>
    <p className="w-[282px] mb-4" >
      ACME Industries Ltd.
      <br />
      Edwin Diaz is a software and web technologies engineer, 
      a life coach trainer who is also a serial .
    </p>
    <div className="flex space-x-2">
  <div className="bg-gray-500 text-white rounded-full p-2">
    <FaGoogle className="w-4 h-4" />
  </div>
  <div className="bg-gray-500 text-white rounded-full p-2">
    <FaFacebook className="w-4 h-4" />
  </div>
  <div className="bg-gray-500 text-white rounded-full p-2">
    <FaTwitter className="w-4 h-4" />
  </div>
  <div className="bg-gray-500 text-white rounded-full p-2">
    <FaGithub className="w-4 h-4" />
  </div>
</div>

  </aside>
  
  <nav>
    <h6 className="footer-title text-white">About</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Why car doctor</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6>
    <a className="link link-hover">Feedback</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Accesbility </a>
  </nav>
</footer>
        </div>
    )
}
export default Footer;