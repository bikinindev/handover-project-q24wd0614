import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./ZillientScreenCardholder.css";
import { useNavigate, useParams } from "react-router-dom";
import { AppNavbar } from "../../components";
import { BannerScreen2 } from "..";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const ZillientCardHolder = () =>{

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
    
    return(<>
    <AppNavbar/>
    <BannerScreen2 data={{
        title: dataListTitle,
        image: dataImage
    }}/>
        <div ref={screenTemplateRef} className={`${windowWidthClass}-zillient-cardholder`}>
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
                    
                    {/* <h1>{dataListTitle}</h1> */}
                    <div className="cardholder">
                        {
                            dataList.map((card:any, index:any)=>{
                                const cardId = card && card.id;
                                const cardItem = card && card.item;
                                const businessId = businessDetail && businessDetail.businessId;
                                const sid = serviceId as any;
                                // const cardImg = dataImage;

                                return (
                                    <div key={index} className="grid-item">
                                        <div className="card grid-y"
                                            onClick={()=>handleNavigate(businessId, sid, cardId)}
                                        >
                                            <div className="frame">
                                                <img 
                                                    alt = {componentData.content.screen.image.alt}
                                                    src = {componentData.content.screen.image.src}
                                                />
                                            </div>
                                            <div className="text">
                                                <h2>
                                                    {
                                                        `${cardId}. ${cardItem}`
                                                    }
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default ZillientCardHolder;