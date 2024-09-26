import i1 from "../../../assets/images/i1.png"
import i2 from "../../../assets/images/i2.png"
import i3 from "../../../assets/images/i3.png"
const TimeLocation = ()=>{
    return(
        <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-3 px-12 rounded-lg bg-black">
            <div className="flex items-center justify-center text-white py-20 gap-5">
                <img src={i1} alt="" />
                <div className="ml-3">
                    <h3>We are open Monday-Friday</h3>
                    <p className="font-bold">7.00am - 9.00am</p>
                </div>
            </div>
            <div className="flex items-center justify-center text-white py-20 gap-5">
                <img src={i3} alt="" />
                <div className="ml-3">
                    <h3>Have a Question</h3>
                    <p className="font-bold">+3423454543</p>
                </div>
            </div>
            <div className="flex items-center justify-center text-white py-20 gap-5">
                <img src={i2} alt="" />
                <div className="ml-3">
                    <h3>Need a repair ? Our Address</h3>
                    <p className="font-bold">Liza Street, New York</p>
                </div>
            </div>
        </div>
    )
}
export default TimeLocation;