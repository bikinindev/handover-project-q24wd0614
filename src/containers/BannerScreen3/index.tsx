import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./BannerScreen3.css";
import { ImgAboutUsScreen1 } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const BannerScreen3 = ({data}:any) =>{

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
                // title: (data && data.title) || "Banner Title",
                image: {
                    alt: "",
                    src: ""
                },
                imgHeaderLogo: {
                    alt: data && data.externalData.images.headerLogo.src,
                    src: data && data.externalData.images.headerLogo.src
                },
                title: {
                    value: "Zillient",
                    tag: data && data.externalData.code,
                    image: {
                        src: "",
                        alt: ""
                    }
                },
                description: {
                    value: data && data.externalData.description
                }
            }
        }
    };
    return(
        <div ref={screenHome1Ref} className={`${windowWidthClass}-banner-screen-3`}>
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
                    {/* <h1>
                        {componentData.content.screen.title}
                    </h1>  */}
                    <div className="section left">
                        <div className="card">
                            <div className="object-wrapper">
                                <div className="frame">
                                    <img 
                                        alt={componentData.content.screen.imgHeaderLogo.alt}
                                        src={componentData.content.screen.imgHeaderLogo.src}
                                    />
                                </div>
                                <div className="text">
                                    <h2>{componentData.content.screen.title.value}</h2>
                                    <p>{componentData.content.screen.title.tag}</p>
                                </div>
                            </div>
                            <p>{componentData.content.screen.description.value}</p>
                        </div>
                    </div>
                    <div className="section right">

                    </div>
                 </div>
            </div>
        </div>
    )
};

export default BannerScreen3;