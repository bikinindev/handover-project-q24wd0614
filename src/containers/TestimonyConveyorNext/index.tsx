import { useContext, useEffect, useRef, useState } from "react";
import globalStates from "../../utils/global";
import "./TestimonyConveyorNext.css";
import { IconArrow, ImgTestimony1, ImgTestimony2, ImgTestimony3 } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const TestimonyConveyorNext = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenTestimonyConveyorNextRef = useRef(null) as any;
    // console.log({})
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenTestimonyConveyorNext = screenTestimonyConveyorNextRef.current.getBoundingClientRect();
            const top = screenTestimonyConveyorNext.top;
            const bottom = screenTestimonyConveyorNext.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetscreenTestimonyConveyorNext: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetscreenTestimonyConveyorNext: true,
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
            },
            list: [
                {
                    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    name: "Bapak Anton",
                    desc: "Cllient, Buyer",
                    image: {
                        src: ImgTestimony3,
                        alt: ""
                    },
                    id: 1
                },
                {
                    testimony: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
                    name: "Ibu Anita",
                    desc: "Cllient, Buyer",
                    image: {
                        src: ImgTestimony1,
                        alt: ""
                    },
                    id: 2
                },
                {
                    testimony: "Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.",
                    name: "Bapak Lorem",
                    desc: "Cllient, Buyer",
                    image: {
                        src: ImgTestimony2,
                        alt: ""
                    },
                    id: 3
                },
            ]
        }
    };

    const [testimonyObject, setTestimonyObject] = useState(componentData.content.list[0]) as any;
    
    const handleArrowRight=()=>{
        const queue = +testimonyObject.id;
        if(queue>2){
            setTestimonyObject(componentData.content.list[0])
        } else {
            setTestimonyObject(componentData.content.list[(queue)])
        }
    }
    const handleArrowLeft=()=>{
        const queue = +testimonyObject.id;
        // alert(queue<2)
        if(queue<2){
            setTestimonyObject(componentData.content.list[2])
        } else {
            setTestimonyObject(componentData.content.list[(queue-2)])
        }
    }
    return(
        <div ref={screenTestimonyConveyorNextRef} className={`${windowWidthClass}-testimony-conveyor-next`}>
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
                    <div className="conveyor-next">
                        <div className="section image-wrapper">
                            <div className="frame">
                                <img 
                                    src={testimonyObject.image.src}
                                    alt={testimonyObject.image.alt}
                                />
                            </div>
                        </div>
                        <div className="conveyor-arrow left"
                           onClick={handleArrowLeft}
                        >
                            <div className="frame">
                                <img 
                                    src={IconArrow}
                                    alt={""}
                                />
                            </div>
                        </div>
                        <div className="conveyor-arrow right"
                            onClick={handleArrowRight}
                        >
                            <div className="frame">
                                <img 
                                    src={IconArrow}
                                    alt={""}
                                />
                            </div>
                        </div>
                        <div className="section text-wrapper">
                            <h2>{testimonyObject.testimony}</h2>
                            <h3>{testimonyObject.name}</h3>
                            <p>{testimonyObject.desc}</p>
                        </div>
                        <div className="conveyor-crumbs">
                            <div className={`crumbs ${+testimonyObject.id===1?"active": ""}`}>

                            </div>
                            <div className={`crumbs ${+testimonyObject.id===2?"active": ""}`}>

                            </div>
                            <div className={`crumbs ${+testimonyObject.id===3?"active": ""}`}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TestimonyConveyorNext;