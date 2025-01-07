import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./BusinessScreen1.css";
import { ImgBannerAbout1 } from "../../assets";

const BusinessScreen1 = ()=>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenBusiness1Ref = useRef(null) as any;
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenBusiness1 = screenBusiness1Ref.current.getBoundingClientRect();
            const top = screenBusiness1.top;
            const bottom = screenBusiness1.bottom;
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
    return(
        <div ref={screenBusiness1Ref} className={`${windowWidthClass}-business-screen1`}>
            <div className="wrapper">
                <div className="background">
                    <img alt="legal background" src={ImgBannerAbout1}/>
                </div>
                <div className="shield">

                </div>
                <div className="content">
                    <h1>PT ZILLIENT PROVA NUTRITAMA</h1>
                </div>
            </div>
        </div>
    )
};

export default BusinessScreen1;