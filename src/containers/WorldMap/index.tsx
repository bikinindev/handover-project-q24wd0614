import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./WorldMap.css";
import { ImgWorldMap } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const WorldMap = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenWorldMapRef = useRef(null) as any;
    // console.log({})
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenWorldMap = screenWorldMapRef.current.getBoundingClientRect();
            const top = screenWorldMap.top;
            const bottom = screenWorldMap.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetscreenTemplate: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetscreenTemplate: true,
                }});
            };
        
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [globalContext])

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
                    alt: "",
                    src: ""
                }
            }
        }
    };
    
    return(
        <div ref={screenWorldMapRef} className={`${windowWidthClass}-world-map`}>
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
                    <div className="wrapper">
                        <h2>Driving Success Worldwide</h2>
                        <div className="frame">
                            <img 
                                src ={ImgWorldMap}
                                alt =""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WorldMap;