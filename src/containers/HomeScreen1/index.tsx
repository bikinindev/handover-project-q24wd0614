import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen1.css";
import { ImgHomeScreen1, ImgHomeScreen1Tab } from "../../assets";

const HomeScreen1 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreenHome1 = screensOffset && screensOffset.isOffsetScreenHome1;

    // console.log(">>>",isOffsetScreenHome1, screensOffset);

    const screenHome1Ref = useRef(null) as any;
    const screenImageBackground = windowWidthClass === "w-pc" ? ImgHomeScreen1 : ImgHomeScreen1Tab;
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
    return(
        <div ref={screenHome1Ref} className={`${windowWidthClass}-home-screen1`}>
            <div className="wrapper">
                <div className="screen bg">
                    <img src={screenImageBackground}/>
                </div>
                <div className="screen  shield">
                    <h2>shield</h2>
                </div>
                <div className="screen  content">
                    <div className="tagline">
                        <h1>EXPERTS IN BUILDING AND DEVELOPING YOUR BUSINESS</h1>
                    </div>
                    <div className="buttons">
                        <p className="button button-1">Get Quote</p>
                        <p className="button button-2">View Project</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
};

export default HomeScreen1;