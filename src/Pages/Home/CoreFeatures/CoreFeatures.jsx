import Features from "./Features";

const CoreFeatures = ()=>{
    return(
        <div className="my-10">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-[#FF3811]">Team</h3>
                <h2 className="text-5xl font-semibold mb-3">Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised
                <br /> words which don't look even slightly believable.  </p>
            </div>
            <div className="mt-8">
                <Features/>
            </div>
        </div>
    )
}
export default CoreFeatures;