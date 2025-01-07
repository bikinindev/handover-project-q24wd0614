import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./AboutUsScreen5Alt.css";
import { IconAboutUsScreen5, ImgAboutUsScreen4ss } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const AboutUsScreen5Alt = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const componentData = {
       background: {
        image: {
            alt: "lightbulb",
            src: IconAboutUsScreen5
        }
       },
       content: {
            screen: {
                title: "OUR VISION",
                text: "EXPERTS IN BUILDING AND DEVELOPING YOUR BUSINESS"
            }
       }
    };
    
    return(
        <div  className={`${windowWidthClass}-about-us-screen-5-alt`}>
            <div className="wrapper">
                <div className="background">
                    <div className="frame">
                        {/* <img
                            alt= {componentData.alt}
                            src = {componentData.imgSrcBackground}
                         /> */}
                    </div>
                </div>
                <div className="shield">
                    
                </div>
                <div className="content display">
                   <div className="screen object-wrapper">
                        <div className="grid-item image">
                            <div className="frame">
                                <img 
                                src={componentData.background.image.src}
                                alt={componentData.background.image.alt} />
                            </div>
                        </div>
                        <div className="grid-item text">
                                <div className="text-wrapper">
                                    <h2>{componentData.content.screen.title}</h2>
                                    <p>{componentData.content.screen.text}</p>
                                </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUsScreen5Alt;