import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./AboutUsScreen6.css";
import { ImgAboutUsScreen4ss, ImgAboutUsScreen6, ImgAboutUsScreen6Chart } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const AboutUsScreen6 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const componentData = {
        background: {
            image: {
                alt: "",
                src: ""
            }
        }, 
        content: {
            screen: {
                image: {
                    alt: "organization chart zillient group",
                    src: ImgAboutUsScreen6Chart
                }
            }
        }
    };
    
    return(
        <div  className={`${windowWidthClass}-about-us-screen-6`}>
            <div className="wrapper">
                <div className="background display">
                    <div className="frame">
                        <img
                            alt= {componentData.background.image.alt}
                            src = {componentData.background.image.src}
                         />
                    </div>
                </div>
                <div className="shield">
                    
                </div>
                <div className="content display">
                    <div className="frame">
                        <img 
                            alt = {componentData.content.screen.image.alt}
                            src = {componentData.content.screen.image.src}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUsScreen6;