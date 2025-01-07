import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./RevolutionaryConveyor.css"
import { IconAgriculturalInputs, IconAgriFoodSector, IconArrow, IconCivilSociety, IconEndConsumers, IconFinancialInstitution, IconIntermediary, IconProductManufacturer, IconPublicSectors, IconRetailers, IconServiceProviders, IconTransformers, ImgIconProva1, ImgIconProva2, ImgIconProva3, ImgIconProva4, ImgIconProva5} from "../../assets";
import { useNavigate } from "react-router-dom";

const RevolutionaryConveyor = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    


    const screenGlobalConveyorRef = useRef(null) as any;

    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenGlobalConveyor = screenGlobalConveyorRef.current.getBoundingClientRect();
            const top = screenGlobalConveyor.top;
            const bottom = screenGlobalConveyor.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetscreenGlobalConveyor: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetscreenGlobalConveyor: true,
                }});
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [globalContext])

    const navigate = useNavigate();

    const componentData = {
        background: {
            image: {
                src: "",
                alt: ""
            }
        },
        shield: {

        },
        content: {
            title: "Revolutionary Solutions Rapidly Accelerating Digital Transformations for an Industrial Player",
            listServices: [
                {
                    title: "Agri-food Sector",
                    desc: "",
                    image: {
                        src: IconAgriFoodSector,
                        alt: ""
                    },
                    handler: ()=>null
                },
                {
                    title: "Intermediaries",
                    desc: "",
                    image: {
                        src: IconIntermediary,
                        alt: ""
                    },
                    handler: ()=>null
                },
                {
                    title: "Transformers",
                    desc: "",
                    image: {
                        src: IconTransformers,
                        alt: ""
                    },
                    handler: ()=>null
                },
                {
                    title: "Financial Institutions",
                    desc: "",
                    image: {
                        src: IconFinancialInstitution,
                        alt: ""
                    },
                    handler: ()=>null
                },
                {
                    title: "Agricultural Inputs",
                    desc: "",
                    image: {
                        src: IconAgriculturalInputs,
                        alt: ""
                    },
                    handler: ()=>null
                },
                {
                    title: "Product Manufacturers",
                    desc: "",
                    image: {
                        src: IconProductManufacturer,
                        alt: ""
                    },
                    handler: ()=>null
                },
                {
                    title: "Agri-food Retailer",
                    desc: "",
                    image: {
                        src: IconRetailers,
                        alt: ""
                    },
                    handler: ()=>null
                },
                {
                    title: "End Consumers",
                    desc: "",
                    image: {
                        src: IconEndConsumers,
                        alt: ""
                    },
                    handler: ()=>null
                },
                {
                    title: "Public Sector",
                    desc: "",
                    image: {
                        src: IconPublicSectors,
                        alt: ""
                    },
                    handler: ()=>null
                },
                {
                    title: "Civil Society",
                    desc: "",
                    image: {
                        src: IconCivilSociety,
                        alt: ""
                    },
                    handler: ()=>null
                },
                {
                    title: "Service Providers",
                    desc: "",
                    image: {
                        src: IconServiceProviders,
                        alt: ""
                    },
                    handler: ()=>null
                },
                
            ]
        }
    }

    const conveyorRef:any = useRef(null);

    const scrollLeft = () => {
        if (conveyorRef.current) {
            console.log(">>>left", -conveyorRef.current.clientWidth)
            conveyorRef.current.scrollBy({ left: -conveyorRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (conveyorRef.current) {
            console.log(">>>right", conveyorRef.current.clientWidth)
            conveyorRef.current.scrollBy({ left: conveyorRef.current.clientWidth, behavior: 'smooth' });
        }
    };
    
    return(
        <>
            <div 
            ref={screenGlobalConveyorRef} 
            className={`${windowWidthClass}-revolutionary-conveyor wrapper`}>

                <div className="background">
                    <div className="frame">
                        {/* <img
                            alt = {componentData.background.image.alt}
                            src = {componentData.background.image.src}
                        /> */}
                    </div>
                </div>
                <div className="shield">
                
                </div>
                <div className="content display">
                            {
                                windowWidthClass==="w-pc" ?

                               ( <div className="scroll-wrapper display">
                                    {/* <div className="frame" onClick={scrollLeft}>
                                        <img src={IconArrow} alt=""/>
                                    </div>
                                    <div className="frame right">
                                        <img src={IconArrow} alt="" onClick={scrollRight}/>
                                    </div> */}
                                    {/* <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
                                    <button className="scroll-button right" onClick={scrollRight}>&gt;</button> */}
                                </div>) : <></>
                            }
                    
                   
                    <div className="text-wrapper">
                            <h2>
                                {componentData.content.title}
                            </h2>
                    </div>
                    <div className="scroll-wrapper frame left" onClick={scrollLeft}>
                        <img src={IconArrow} alt=""/>
                    </div>
                    <div className="scroll-wrapper  frame right">
                        <img src={IconArrow} alt="" onClick={scrollRight}/>
                    </div>
                    
                    
                    <div className="wrapper grid" ref={conveyorRef}>
                        
                        {
                            componentData.content.listServices.map((service:any, index:any)=>{
                                const {title, desc, image, handler} = service;
                                return (
                                    <div className="item" >
                                        <div className="card wrapper">
                                            <div className="background">
                                                <div className="frame">
                                                    <img
                                                        src={image.src}
                                                        alt={image.alt}
                                                    />
                                                </div>
                                            </div>
                                            <div className="shield">
                                                
                                            </div>
                                            <div className="content">
                                                <div className="text-wrapper">
                                                    <h2>{title}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                     
                </div>


            </div>
        </>
        
    )
};

export default RevolutionaryConveyor;