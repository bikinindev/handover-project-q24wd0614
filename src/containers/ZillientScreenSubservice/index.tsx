import { useContext, useEffect, useRef, useState } from "react";
import globalStates from "../../utils/global";
import "./ZillientScreenSubservice.css";
import { useNavigate, useParams } from "react-router-dom";
import { AppNavbar } from "../../components";
import { BannerScreen2 } from "..";
import { IconArrow } from "../../assets";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const ZillientScreenSubservice = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    const {businessId, serviceId} = useParams();
    
    const navigate = useNavigate();
    const handleNavigate = (route:string, index:string, index2:string)=>{
        const path = `/details-list/${route}/${index}/${index2}`
        navigate(path);
    }
    
    const businessZillient = globalStates && globalStates.businessZillient;
    const businessDetail = businessZillient && businessZillient[`${businessId}`];
    const customStyle = businessDetail && businessDetail.custom["style"]
    const serviceList:any = (businessDetail && businessDetail.serviceList) || [{id: 0, service: ""}];
    
    const data = serviceList.filter((service:any)=>service.id==`${serviceId}`)[0];
    // console.log(">>>",{data, serviceList});
    const businessDetailImages = businessDetail && businessDetail.images;
    // const businessDetailImagesImg = businessDetailImages && businessDetailImages.screenBannerImg;

    const screenTemplateRef = useRef(null) as any;
    // console.log({})
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenTemplate = screenTemplateRef.current.getBoundingClientRect();
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

    const dataListTitle = (data && data.service) || "List of Items";
    const dataImage = (businessDetailImages && businessDetailImages.screenBannerImg) || {src: "", alt: ""};
    const dataList = (data && data.list) || [{id: 1, item: "item", details: [{desc:[""]}]}];
    // console.log(">>>cardholder", {data})
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
                    alt: dataImage && dataImage.alt,
                    src: dataImage && dataImage.src
                },
                list: dataList
            }
        }
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalBoxes = 5; // Number of .box elements
    console.log(">>>currentIndex", currentIndex)
    const handleKeyDown = (e:any) => {
        if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex:any) => (prevIndex + 1) % totalBoxes);
        } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex:any) => (prevIndex - 1 + totalBoxes) % totalBoxes);
        }
    };

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
    
    return(<>
    <AppNavbar/>
    <BannerScreen2 data={{
        title: dataListTitle,
        image: dataImage
    }}/>
        <div ref={screenTemplateRef} className={`${windowWidthClass}-zillient-screen-subservice`}>
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
                <div className="content display"
                style={customStyle}
                >
                    <div className="scroll-wrapper frame left" onClick={scrollLeft}>
                        <img src={IconArrow} alt=""/>
                    </div>
                    <div className="scroll-wrapper  frame right">
                        <img src={IconArrow} alt="" onClick={scrollRight}/>
                    </div>
                    <div className="wrapper grid" ref={conveyorRef}>
                        
                        {
                            dataList.map((service:any, index:any)=>{
                                const {title, desc, image, handler, details, item} = service;
                                console.log(">>detils", details)
                                return (
                                    <div className="item" >
                                        <div className="card">
                                            <div className="object-wrapper">
                                                <div className="frame">
                                                    <img 
                                                    alt = {dataImage.alt}
                                                    src = {dataImage.src}
                                                    onClick={handler}
                                                    />
                                                </div>
                                                <h2>{item.toUpperCase()}</h2>
                                            </div>
                                            <div className="text-wrapper">
                                                {
                                                    details.map((detail:any, index:any)=>{
                                                        const {id, name, desc} = detail
                                                        return (
                                                            <div key={index} className="text-section">
                                                                <h3>{`${name}`}</h3>
                                                                {
                                                                    desc.map((text:any, index:any)=>{
                                                                        return (
                                                                            <p key={index}>{text}</p>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                                {/* <h2>{title.toUpperCase()}</h2> */}
                                                {/* <p>{desc}</p> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    {/* <div className="slider-container" tabIndex={0} onKeyDown={handleKeyDown}>
                        <div 
                        ref={conveyorRef} 
                        className="slider-wrapper" 
                        // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            <div className="box-slider">Box 1</div>
                            <div className="box-slider">Box 2</div>
                            <div className="box-slider">Box 3</div>
                            <div className="box-slider">Box 4</div>
                            <div className="box-slider">Box 5</div>
                        </div>
                    </div> */}
                  
                </div>
            </div>
        </div>
        </>
    )
};

export default ZillientScreenSubservice;