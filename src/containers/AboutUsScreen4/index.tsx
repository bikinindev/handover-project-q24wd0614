import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./AboutUsScreen4.css";
import { ImgAboutUsScreen4 } from "../../assets";

const AboutUsScreen4 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreenHome1 = screensOffset && screensOffset.isOffsetScreenHome1;

    const screenImageBackground = windowWidthClass === "w-pc" ? ImgAboutUsScreen4 : ImgAboutUsScreen4;
   
    return(
        <div className={`${windowWidthClass}-about-us-screen4`}>
            <div className="wrapper">
                <div className="screen bg">
                    {/* <img src={screenImageBackground}/> */}
                </div>
                <div className="screen  shield">
                </div>
                <div className="screen  content">
                    <div className="grid-item left">
                        <div className="section box-1">
                            <p>ZILLIENT</p>
                        </div>
                        <div className="section box-2">
                            <h2>About Us</h2>
                            <h3 className="highlighter text-1">ZILLIENT GROUP</h3>
                            <p>Zillient Group is a start-up that is committed to providing the best service through innovation and use of technology to partners by realizing sustainable and inclusive economic transformation.</p>
                            {/* <p>Transdisiplin akan menjadi ciri khas para zillient untuk menghasilkan mahakarya yang luar biasa dan bermanfaat untuk sesama berdasarkan Karya, Cipta, dan Karsa.</p> */}
                        </div>
                    </div>
                    <div className="grid-item right">
                        <div className="frame"> 
                            <img alt="bendera merah putih" src={ImgAboutUsScreen4} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUsScreen4;