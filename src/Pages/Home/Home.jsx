import About from "./About/About";
import Banner from "./Banner/Banner";
import CoreFeatures from "./CoreFeatures/CoreFeatures";
import TeamArea from "./OurTeam/TeamArea";
import Products from "./Products/Products";
import Service from "./Services/Service";
import TimeLocation from "./TimeLocation/TimeLocation";

const Home = ()=>{
    return(
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <TimeLocation></TimeLocation>
            <Products></Products>
            <TeamArea></TeamArea>
            <CoreFeatures></CoreFeatures>
        </div>
    )
}
export default Home;