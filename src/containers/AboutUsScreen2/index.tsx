import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./AboutUsScreen2.css";
import { ImgAboutUsScreen2 } from "../../assets";

const AboutUsScreen2 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreenHome1 = screensOffset && screensOffset.isOffsetScreenHome1;

    const screenImageBackground = windowWidthClass === "w-pc" ? ImgAboutUsScreen2 : ImgAboutUsScreen2;
   
    return(
        <div className={`${windowWidthClass}-about-us-screen2`}>
            <div className="wrapper">
                <div className="screen bg">
                    <img src={screenImageBackground}/>
                </div>
                <div className="screen  shield">
                </div>
                <div className="screen  content">
              
                </div>
            </div>
        </div>
    )
};

export default AboutUsScreen2;