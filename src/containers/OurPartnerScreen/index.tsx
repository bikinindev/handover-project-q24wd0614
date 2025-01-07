import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./OurPartner.css";
import { IconPartner1, IconPartner10, IconPartner11, IconPartner12, IconPartner2, IconPartner3, IconPartner4, IconPartner5, IconPartner6, IconPartner7, IconPartner8, IconPartner9 } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const OurPartner = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenOurPartnerRef = useRef(null) as any;
    // console.log({})
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenTemplate = screenOurPartnerRef.current.getBoundingClientRect();
            const top = screenTemplate.top;
            const bottom = screenTemplate.bottom;
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
                listPartner:[
                    {
                        title: "",
                        image: {
                            src: IconPartner1,
                            alt: ""
                        },
                        id: 1
                    },
                    {
                        title: "",
                        image: {
                            src: IconPartner2,
                            alt: ""
                        },
                        id: 2
                    },
                    {
                        title: "",
                        image: {
                            src: IconPartner3,
                            alt: ""
                        },
                        id: 3
                    },
                    {
                        title: "",
                        image: {
                            src: IconPartner4,
                            alt: ""
                        },
                        id: 4
                    },
                    {
                        title: "",
                        image: {
                            src: IconPartner5,
                            alt: ""
                        },
                        id: 5
                    }, 
                    {
                        title: "",
                        image: {
                            src: IconPartner6,
                            alt: ""
                        },
                        id: 6
                    },
                    {
                        title: "",
                        image: {
                            src: IconPartner7,
                            alt: ""
                        },
                        id: 7
                    },
                    {
                        title: "",
                        image: {
                            src: IconPartner8,
                            alt: ""
                        },
                        id: 8
                    },
                    {
                        title: "",
                        image: {
                            src: IconPartner9,
                            alt: ""
                        },
                        id: 9
                    },
                    {
                        title: "",
                        image: {
                            src: IconPartner10,
                            alt: ""
                        },
                        id: 10
                    },
                    {
                        title: "",
                        image: {
                            src: IconPartner11,
                            alt: ""
                        },
                        id: 11
                    },
                    {
                        title: "",
                        image: {
                            src: IconPartner12,
                            alt: ""
                        },
                        id: 12
                    }
                ]
            }
        }
    };

    const rowHeight = 20;
    const divHeight =  ((+componentData.content.screen.listPartner.length/2) * rowHeight) + 20;

    const componentStyleMob = {
        height: `${divHeight}vh`
    }
    
    return(
        <div ref={screenOurPartnerRef} className={`${windowWidthClass}-our-partner`}
            style={windowWidthClass==="w-mob"?componentStyleMob:{}}
        >
            <div className="wrapper">
                <div className="background display">
                    <div className="frame">
                        {/* <img
                            alt= {componentData.background.image.alt}
                            src = {componentData.background.image.src}
                         /> */}
                    </div>
                </div>
                <div className="shield">
                    
                </div>
                <div className="content display">
                    <h2>Our Partners</h2>
                    <div className="grid-wrapper">
                            {
                                componentData.content.screen.listPartner.map((item:any, index:any)=>{
                                    const {title, image, id} = item;

                                    return (
                                        <div key={index} className="grid-item">
                                            <div className="frame">
                                                <img 
                                                    src={image.src}
                                                    alt={image.alt}
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OurPartner;