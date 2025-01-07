import './HomeScreen5b.css';
import { useContext } from "react";
import globalStates from "../../utils/global";
import { ImgBannerAbout2b, ImgBannerAboutLegality, ImgBannerConstruction2, ImgBannerFarm, ImgBusinessConstruction, ImgBusinessConsultation, ImgBusinessFarm, ImgBusinessTour } from '../../assets';

const HomeScreen5 = ()=>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const dataArticle = [
        {
            tag: "Agritech",
            title: "The project was",
            desc: "Lorem ipsum dolor sit amet, consecte- tur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagit- tis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgBannerFarm
        },
        {
            tag: "Consultation",
            title: "The project was",
            desc: "Lorem ipsum dolor sit amet, consecte- tur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagit- tis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgBannerConstruction2
        },
        {
            tag: "Travel",
            title: "The project was",
            desc: "Lorem ipsum dolor sit amet, consecte- tur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagit- tis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgBannerAbout2b
        },
        {
            tag: "Construction",
            title: "The project was",
            desc: "Lorem ipsum dolor sit amet, consecte- tur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagit- tis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgBannerFarm
        }
    ]

    return(
        <div className={`${windowWidthClass}-home-screen5b`} >
            <div className="wrapper">
               
            {
                dataArticle.map((article:any, index:any)=>{
                    const {tag, title, imgSrc, desc} = article
                    return(
                        <div key={index} className='grid-item'>
                            <div className='card'>
                                <div className='image'>
                                    <img alt={`Zillient ${tag} ${title}`} src={imgSrc} />
                                </div>
                                <div className='content'>
                                    <h4>{tag}</h4>
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
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

export default HomeScreen5;
