import { useContext } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen2alt.css";
import { ImgBannerHomeScreen2, ImgBannerHomeScreen2Mob1, ImgBannerHomeScreen2Mob2 } from "../../assets";



const HomeScreen2 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreenHome1 = screensOffset && screensOffset.isOffsetScreenHome1;
    return(
        <div className={`${windowWidthClass}-home-screen-2-alt`}>
            <div className="wrapper">
                {
                    windowWidthClass === "w-pc" || windowWidthClass === "w-tab"  ?
                    <img alt="zillient core values" src={ImgBannerHomeScreen2} /> :
                    <>
                        <div className="frame top">
                            <img alt="zillient core values mobile 1" src={ImgBannerHomeScreen2Mob1} />
                        </div>
                        <div className="frame bottom">
                            <img alt="zillient core values mobile 2" src={ImgBannerHomeScreen2Mob2} />
                        </div>
                    </>

                }
                  
            </div>
        </div>
    )
};

export default HomeScreen2;