import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./AboutUsScreen3.css";
import { ImgAboutUsScreen3, ImgAboutUsScreen3Peter } from "../../assets";

const AboutUsScreen3 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreenHome1 = screensOffset && screensOffset.isOffsetScreenHome1;

    const screenImageBackground = windowWidthClass === "w-pc" ? ImgAboutUsScreen3 : ImgAboutUsScreen3;
   
    const componentData ={
        content: {
            objectWrapper: {
                image: {
                    src: ImgAboutUsScreen3Peter,
                    alt:"Peter Michael Senge",
                },
                text: {
                    value: `"When teams are truly learning, not only are they producing extraordinary results, but the individual members are growing more rapidly than could have occurred otherwise"  -  `,
                    value2: "Peter Michael Senge"
                }
            }
        }
    }
    return(
        <div className={`${windowWidthClass}-about-us-screen3`}>
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
                            <h2>Welcoming the Golden Indonesian generation</h2>
                            <p>Zillient memahami peluang, ancaman, dan harapan dimasa depan, Indonesia dengan berbagai potensinya yang luar biasa, kekayaan pluralisme yang tersebar di seluruh tanah air, kedepan akan bisa dimanfaatkan dan dikelola oleh generasi muda yang unggul.</p>
                            <p>Transdisiplin akan menjadi ciri khas para zillient untuk menghasilkan mahakarya yang luar biasa dan bermanfaat untuk sesama berdasarkan Karya, Cipta, dan Karsa.</p>
                        </div>
                    </div>
                    <div className="grid-item right display">
                            <div className="child-background">
                                 <div className="frame"> 
                                    <img alt="bendera merah putih" src={ImgAboutUsScreen3} />
                                </div>
                            </div>
                            <div className="child-content">
                                <div className="object-wrapper grid">
                                    <div className="grid-item image">
                                        <div className="frame">
                                            <img  
                                            alt={componentData && componentData.content.objectWrapper.image.alt} 
                                            src={componentData && componentData.content.objectWrapper.image.src} />
                                        </div>
                                    </div>
                                    <div className="grid-item text">
                                        <p><i>{componentData && componentData.content.objectWrapper.text.value} </i>
                                            <b>{componentData && componentData.content.objectWrapper.text.value2} </b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUsScreen3;