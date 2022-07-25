import Banner from "./banner.webp"
import "./landing_page.css"
import { Link } from "react-router-dom";
const LandingPage = () =>{


    return(
        <>
        <div className="landing-cointainer" >
        <img className="BannerImg" src={Banner} alt="BannerImage" ></img>
        
        <div>
        <h2>
            10X Team 04
        </h2>
        <Link to="/post-view"><button>Enter</button></Link>
        </div>
        </div>
        
        </>
    )
}

export default LandingPage;