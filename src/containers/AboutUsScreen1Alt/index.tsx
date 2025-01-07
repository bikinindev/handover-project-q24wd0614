import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./AboutUsScreen1Alt.css";
import { title } from "process";
import { ImgAboutUsScreen1, ImgAboutUsScreen1Joseph } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const AboutUsScreen1Alt = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenHome1Ref = useRef(null) as any;
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenHome1 = screenHome1Ref.current.getBoundingClientRect();
            const top = screenHome1.top;
            const bottom = screenHome1.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetScreenHome1: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetScreenHome1: true,
                }});
            };
        
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [globalContext])
    const componentData = {
        backround: {
            image: {
                src: ImgAboutUsScreen1,
                alt: "background about us"
            }
        },
        content: {
            banner: {
                title: "About Us"
            },
            reflection: {
                title: "Reflection For The Future",
                desc: "Joseph J. Kockelmans, 1979",
                text: "Sistem pengetahuan kita memiliki batasan dan klasifikasi epistemologis yang berbahaya, karena setiap disiplin ilmu telah menghasilkan kerangka umum, teori, dan metodenya sendiri.",
                attachment: {
                    image: {
                        src: ImgAboutUsScreen1Joseph,
                        alt: "Joseph J. Kockelmans, 1979 in black and white"
                    }
                }
            }
        }

    };
    
    return(
        <div ref={screenHome1Ref}  className={`${windowWidthClass}-about-us-screen-1-alt`}>
            <div className="wrapper">
                <div className="background">
                    <div className="frame">
                        <img
                            alt= {componentData.backround.image.alt}
                            src = {componentData.backround.image.src}
                         />
                    </div>
                </div>
                <div className="shield">
                    
                </div>
                <div className="content display">
                  <div className="section banner">
                    <h1>
                        {componentData && componentData.content.banner.title}
                    </h1>
                  </div>
                  <div className="section reflection">
                        <div className="shape-container">
                            <div className="grid-item title">
                                <h1>
                                    {componentData.content.reflection.title}
                                </h1>
                            </div>
                            <div className="grid-item object-wrapper">
                                <div className="grid-item left image">
                                    <div className="frame">
                                        <img 
                                        src={componentData && componentData.content.reflection.attachment.image.src} 
                                        alt={componentData && componentData.content.reflection.attachment.image.alt}  />
                                    </div>
                                </div>
                                <div className="grid-item right text">
                                    <h2>{componentData && componentData.content.reflection.desc}</h2>
                                    <p>{componentData && componentData.content.reflection.text}</p>
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUsScreen1Alt;