import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./BannerScreen.css";
import { ImgAboutUsScreen1 } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const BannerScreen = ({data}:any) =>{

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

    const dataImage =(data && data.image) || {src:"", alt:""}
    const componentData = {
        background: {
            image: {
                src:(dataImage.src)|| ImgAboutUsScreen1,
                alt:(dataImage.alt)|| "background about us"
            }
        }, 
        content: {
            screen: {
                title: (data && data.title) || "Banner Title",
                image: {
                    alt: "",
                    src: ""
                }
            }
        }
    };
    return(
        <div ref={screenHome1Ref} className={`${windowWidthClass}-banner-screen`}>
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
                    <h1>
                        {componentData.content.screen.title}
                    </h1> 
                 </div>
            </div>
        </div>
    )
};

export default BannerScreen;