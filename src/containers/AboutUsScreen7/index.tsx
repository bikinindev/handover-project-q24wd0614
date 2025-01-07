import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./AboutUsScreen7.css";
import { ImgAboutUsScreen4ss, ImgAboutUsScreen6, ImgAboutUsScreen7 } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const AboutUsScreen7 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const componentData = {
        alt: "background",
        imgSrcBackground : ImgAboutUsScreen7,
        tagline: "Heartfull to make you smile"
    };
    
    return(
        <div  className={`${windowWidthClass}-about-us-screen-7`}>
            <div className="wrapper">
                <div className="background">
                    <div className="frame">
                        <img
                            alt= {componentData.alt}
                            src = {componentData.imgSrcBackground}
                         />
                    </div>
                </div>
                <div className="shield">
                    
                </div>
                <div className="content">
                    {/* <h1>
                        {
                            componentData.tagline
                        }
                    </h1> */}
                </div>
            </div>
        </div>
    )
};

export default AboutUsScreen7;