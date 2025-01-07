import { useContext } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen5Alt.css";
import { ImgBannerFarm, ImgHexagons, ImgHomeScreen5 } from "../../assets";

const HomeScreen5 = ()=>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    return(
        <div className={`${windowWidthClass}-home-screen5-alt`} >
            <div className="wrapper">
                <div className="section text">
                    <div className="text-wrapper">
                        <h2>Sustainable Business</h2>
                        <p>Our Business Will Always Prioritize Sustainability and Propserity, This Has Been Our Commitment Since It Was Founded.</p>
                    </div>
                </div>
                <div className="section image">
                    <img alt="zillient sustainibility values" src={ImgHomeScreen5}/>
                </div>
            </div>
        </div>
    )
};

export default HomeScreen5;
