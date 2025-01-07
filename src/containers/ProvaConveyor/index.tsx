import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./ProvaConveyor.css"
import { IconArrow, ImgIconProva1, ImgIconProva2, ImgIconProva3, ImgIconProva4, ImgIconProva5} from "../../assets";
import { useNavigate } from "react-router-dom";

const ProvaConveyor = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    // const businessDetailImagesImg = businessDetailImages && businessDetailImages.screenBannerImg;

    const screenGlobalConveyorRef = useRef(null) as any;
    // console.log({})
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
            title: "Our Core Values",
            listServices: [
                {
                    title: "P - Priority",
                    desc: "Selalu mendahulukan pelayanan terbaik untuk customer",
                    image: {
                        src: ImgIconProva1,
                        alt: ""
                    },
                    handler: ()=>navigate('/services')
                },
                {
                    title: "R - Respectful",
                    desc: "Menghormati setiap orang atas kerja kerasnya",
                    image: {
                        src: ImgIconProva2,
                        alt: ""
                    },
                    handler: ()=>navigate('/services')
                },
                {
                    title: "O - Optimistic",
                    desc: "Selalu berpandangan segala sesuatu dari sisi positif",
                    image: {
                        src: ImgIconProva3,
                        alt: ""
                    },
                    handler: ()=>navigate('/services')
                },
                {
                    title: "V - Visionary",
                    desc: "Berorientasi pada masa depan",
                    image: {
                        src: ImgIconProva4,
                        alt: ""
                    },
                    handler: ()=>navigate('/services')
                },
                {
                    title: "A - Action",
                    desc: "Tidak takut dalam bertindak untuk mewujudkan impian",
                    image: {
                        src: ImgIconProva5,
                        alt: ""
                    },
                    handler: ()=>navigate('/services')
                }
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
            className={`${windowWidthClass}-prova-conveyor wrapper`}>

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
                            <h3>
                                P.R.O.V.A
                            </h3>
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
                                        <div className="card">
                                            <div className="object-wrapper">
                                                <div className="frame">
                                                    <img 
                                                        alt = {image.alt}
                                                        src = {image.src}
                                                        onClick={handler}
                                                    />
                                                </div>
                                                <div className="text">
                                                    <h2>{title.toUpperCase()}</h2>
                                                    <p>{desc}</p>
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

export default ProvaConveyor;