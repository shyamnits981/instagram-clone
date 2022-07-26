import Banner from "./banner.webp"
import "./landing_page.css"
import { Link } from "react-router-dom"
// import { Link, useHistory } from "react-router-dom";


const LandingPage = () =>{

    //1St Methord for rendering the page 
    // const history = useHistory();
    // const handleRoute = () =>{
    //     history.push("/post-view");
    // }

    return(
        <>
        <div className="landing-cointainer" >
        <img className="BannerImg" src={Banner} alt="BannerImage"></img>
        
        <div>
        <h2>
            10X Team 04
        </h2>
        {/* 2nd Mehhord to rendering the page  */}
        <Link to="/PostView"><button>Enter</button></Link>
        </div>

        {/* <button onClick={handleRoute}>Enter</button> */}
        </div>
        
        </>
    )
}

export default LandingPage;