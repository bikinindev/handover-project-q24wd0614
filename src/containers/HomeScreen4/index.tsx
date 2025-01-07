import { useContext } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen4.css";
import { ImgProjectCons, ImgProjectEdu, ImgProjectFarm, ImgProjectLegal, ImgProjectTour } from "../../assets";
import { buffer } from "stream/consumers";

const HomeScreen4 = ()=>{
    
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const dataProjects = [
        {
            business: "Zillient Farm",
            projectName: "ITDC - Bazaar Mandalika",
            highlight: "The project was completed in just 75 days.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectFarm
        },
        {
            business: "Zillient Education",
            projectName: "ITDC - Bazaar Mandalika",
            highlight: "The project was completed in just 75 days.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectEdu
        },
        {
            business: "Zillient Construction",
            projectName: "ITDC - Bazaar Mandalika",
            highlight: "The project was completed in just 75 days.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectCons
        },
        {
            business: "Zillient Tour",
            projectName: "ITDC - Bazaar Mandalika",
            highlight: "The project was completed in just 75 days.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectTour
        },
        {
            business: "Zillient Consultation",
            projectName: "ITDC - Bazaar Mandalika",
            highlight: "The project was completed in just 75 days.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectLegal
        }
    ]
    
    return(
        <div className={`${windowWidthClass}-home-screen4`}>
            <div className="section header">
                <h2>OUR PROJECTS</h2>
                <div className="wrapper">
                    <p className="desc">Explore our projects that illustrate the success of our client partnering with us</p>
                    <p className="button">view all</p>
                </div>
            </div>
            <div className="section ladders">
                {
                    dataProjects.map((project:any, index:any)=>{
                        const { 
                            business, 
                            projectName,
                            highlight,
                            desc,
                            imgSrc
                        } = project;
                        return(
                            <div key={`${index}-${business}`} className="grid-item">
                                <h2>{business}</h2>
                                <div className="step">
                                    <div className="step-img">
                                        <img alt={business} src={imgSrc}/>
                                    </div>
                                    <div className="step-text">
                                        <h2>{projectName}</h2>
                                        <h3>{highlight}</h3>
                                        <p>{desc}</p>
                                        <p className="button">view details</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};


export default HomeScreen4;