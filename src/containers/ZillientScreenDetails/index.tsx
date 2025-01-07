import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./ZillientScreenDetails.css";
import { useParams } from "react-router-dom";
import { AppFooter, AppNavbar } from "../../components";
import { BannerScreen2 } from "..";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const ZillientScreenDetails = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    const {businessId,serviceId, cardId} = useParams();
    
    const businessZillient = globalStates && globalStates.businessZillient;
    const businessDetail = businessZillient && businessZillient[`${businessId}`];

    const serviceList:any = (businessDetail && businessDetail.serviceList) || [{id: 0, service: ""}];
    
    const dataServiceList = serviceList.filter((service:any)=>service.id==`${serviceId}`)[0];
    const dataServiceDetails = dataServiceList && dataServiceList.list;
    const data = dataServiceDetails.filter((serviceDetail:any)=>serviceDetail.id==`${cardId}`)[0];

    // const data = dataServiceDetailsDesc && dataServiceDetailsDesc.details; 
    // console.log(">>>",{data, serviceList, dataServiceList, dataServiceDetails});
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

    const dataListTitle = (data && data.item) || "List of Items";
    const dataImage = (businessDetailImages && businessDetailImages.screenBannerImg) || {src: "", alt: ""};
    // const dataList = (data && data.list) || [{id: 1, item: "item", details: [{desc:[""]}]}];
    const dataDetails = (data && data.details) || [{id: 0, name: "", desc: [""]}];

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
                list: data.details
            }
        }
    };
    
    return(<>
    <AppNavbar/>
    <BannerScreen2 data={{
        title: dataListTitle,
        image: dataImage
    }}/>
        <div ref={screenTemplateRef} className={`${windowWidthClass}-zillient-screen-details`}>
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
                            dataDetails.map((card:any, index:any)=>{
                                const cardId = card && card.id;
                                const cardName = card && card.name;
                                const cardDesc = card && card.desc;
                                // const cardImg = dataImage;

                                return (
                                    <div key={index} className="grid-item">
                                        <div className="card display-col">
                                            <h3>{`${cardName}` }</h3>
                                            {
                                                cardDesc.map((text:any, index: any)=>{
                                                    return(
                                                        <p key={index}>
                                                            {`${text}`}
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        {/* <AppFooter/> */}
        </>
    )
};

export default ZillientScreenDetails;