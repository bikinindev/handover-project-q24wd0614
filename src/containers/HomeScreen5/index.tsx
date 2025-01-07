import { useContext } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen5.css";
import { ImgBannerFarm, ImgHexagons } from "../../assets";

const HomeScreen5 = ()=>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    return(
        <div className={`${windowWidthClass}-home-screen5`} >
            <div className="wrapper">
                <div className="background">
                    <img alt="background modern farming" src={ImgBannerFarm}/>
                </div>
                <div className="shield">

                </div>
                <div className="content">
                    <div className="paragraphs">
                        <h2>OUR BUSINESS WILL ALWAYS PRIORITIZE SUSTAINABILITY AND PROSPERITY</h2>
                        <p>THIS HAS BEEN OUR COMMITMENT SINCE FOUNDED</p>
                    </div>
                    <div className="image">
                        <img alt="8 hexagons" src={ImgHexagons} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeScreen5;
