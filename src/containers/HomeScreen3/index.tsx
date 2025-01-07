import "./HomeScreen3.css";
import globalStates from "../../utils/global";
import { useContext } from "react";
import { IconLabelCons, IconLabelConstr, IconLabelEduc, IconLabelFarm, IconLabelTour, ImgBusinessConstruction, ImgBusinessConsultation, ImgBusinessEdu, ImgBusinessFarm, ImgBusinessTour } from "../../assets";

const HomeScreen3 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const screensOffset = globalContext && globalContext.screensOffset;

    const dataBusiness=[
        {
            title: "Zillient Farm",
            label: "Farm",
            imgSrc: ImgBusinessFarm,
            iconSrc: IconLabelFarm
        },
        {
            title: "Zillient Education",
            label: "Educ",
            imgSrc: ImgBusinessEdu,
            iconSrc: IconLabelEduc
        },
        {
            title: "Zillient Construction",
            label: "Constr",
            imgSrc: ImgBusinessConstruction,
            iconSrc: IconLabelConstr
        },
        {
            title: "Zillient Tour",
            label: "Tour",
            imgSrc: ImgBusinessTour,
            iconSrc: IconLabelTour
        },
        {
            title: "Zillient Counseling",
            label: "Consl",
            imgSrc: ImgBusinessConsultation,
            iconSrc: IconLabelCons
        },
    ];

    return(
        <div className={`${windowWidthClass}-home-screen3`}>
            <div className="wrapper">
                <h2>OUR BUSINESSES</h2>
                <div className="cardholder">
                    {
                        dataBusiness.map((business:any, index:any)=>{
                            const {title, label, imgSrc, iconSrc} = business;
                            return(
                                <div key={index} className="grid-item">
                                    <div className="card">
                                        
                                        <div className="frame">
                                            <img alt={title + "zillient.com"} src={imgSrc}/>
                                        </div>
                                        <div className="label">
                                            <div className="label-wrapper">
                                                <img alt={`${title}`} src={iconSrc} />
                                                <p className="main">Zillient</p>
                                                <p className="label">{label}</p>
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
    )
};

export default HomeScreen3;