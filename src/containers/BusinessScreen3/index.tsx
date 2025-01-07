import { useContext } from "react";
import globalStates from "../../utils/global";
import "./BusinessScreen3.css";
import { ImgBannerAbout2a, ImgPageBusinessSectionConstruction, ImgPageBusinessSectionConsultation, ImgPageBusinessSectionEducation, ImgPageBusinessSectionFarm, ImgPageBusinessSectionTour } from "../../assets";

const BusinessScreen3 = ()=>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const dataBusinessDetails =[
        {
            title: "ZILLIENT FARM",
            paragraphs: "Create 1 million modern farmers, breeders, and fishermen in Indonesia, helping partners with capital, input requirements, cultivation guidance, and marketing.",
            imgSrc: ImgPageBusinessSectionFarm
        },
        {
            title: "ZILLIENT EDUCATION",
            paragraphs: "•Focuses on providing training, certification and consultation to partners personally and non-personally as well as supporting and connecting the skills development of Indonesian youth on an international scale.",
            imgSrc: ImgPageBusinessSectionEducation
        },
        {
            title: "ZILLIENT CONSTRUCTION",
            paragraphs: "Provide construction service based on professional, hight integrity, and dedicated to partners orientation excellence.",
            imgSrc: ImgPageBusinessSectionConstruction
        },
        {
            title: "ZILLIENT TOUR",
            paragraphs: "•Create one village one youtuber, introducing the potential and natural beauty of every village corner, providing collaborative tourism services to lift the tourism sector of Indonesia.",
            imgSrc: ImgPageBusinessSectionTour
        },
        {
            title: "ZILLIENT CONSULTATION",
            paragraphs: "•Providing consultations to partners regarding legality and building an inclusive and integrated business that has an impact on the environment.",
            imgSrc: ImgPageBusinessSectionConsultation
        },
        
    ]
    return(
        <div className={`${windowWidthClass}-business-screen3`}> 
            <div className="wrapper">
                <div className="background">
                    <div className='frame-circle top'>
                        <img alt="construction zillient 1" src={ImgBannerAbout2a}/>
                        <div className='shield'></div>
                    </div>
                </div>
                <div className="shield">

                </div>
                <div className="content">
                    <div className="container">
                        {
                            dataBusinessDetails.map((businessDetail:any, index:any)=>{

                                const {title, paragraphs, imgSrc} = businessDetail;

                                return(
                                    <div className="section">
                                            <div className="text-wrapper">
                                                <div className="title">
                                                        <h2>{title}</h2>
                                                </div>
                                                <div className="paragraphs">
                                                        <p>{paragraphs}</p>
                                                </div>
                                            </div>
                                            <div className="image">
                                                <img alt={title}  src={imgSrc}/>
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

export default BusinessScreen3;