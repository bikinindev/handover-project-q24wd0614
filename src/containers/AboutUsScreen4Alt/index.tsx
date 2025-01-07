import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./AboutUsScreen4Alt.css";
import { ImgAboutUsScreen4Bg, ImgAboutUsScreen4BgMob, ImgAboutUsSCreen4Logo } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const AboutUsScreen4Alt = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    

    const componentData = {
        alt: "background",
        imgSrcBackground :  windowWidthClass==="w-mob"? ImgAboutUsScreen4BgMob : ImgAboutUsScreen4Bg,
        tagline: "Heartfull to make you smile",

        content: {
            image: {
                alt: "zillient group logo",
                src: ImgAboutUsSCreen4Logo
            },
            text_1: "Zillient Group",
            text_2: "is a start-up that is committed to providing the best service through innovation and use of technology to partners by realizing sustainable and inclusive economic transformation.",


            screen: {
                right: {
                    title: "OUR MOTTO",
                    value: "POWER OF CURIOSITY"
                }
            }
        }
    };
    
    return(
        <div  className={`${windowWidthClass}-about-us-screen-4-alt`}>
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
                <div className="content display">
                    <div className="screen left">
                        <div className="object-wrapper child-grid-y">
                            <div className="grid-item top">
                                <div className="frame">
                                    <img 
                                        alt = {componentData.content.image.alt}
                                        src= {componentData.content.image.src}
                                    />
                                </div>
                            </div>
                            <div className="grid-item bottom">
                                <p>
                                    <b>{componentData.content.text_1}</b>
                                    {componentData.content.text_2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="screen right">
                        <div className="text-wrapper">
                            <h2>
                                {
                                    componentData.content.screen.right.title
                                }
                            </h2>
                             <p>
                                {
                                    componentData.content.screen.right.value
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUsScreen4Alt;