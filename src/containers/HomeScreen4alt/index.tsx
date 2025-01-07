import { useContext, useState } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen4alt.css";
import { IconLabelCons, IconLabelConstr, IconLabelEduc, IconLabelFarm, IconLabelTour, ImgProjectCons, ImgProjectEdu, ImgProjectFarm, ImgProjectLegal, ImgProjectTour } from "../../assets";
import { useNavigate } from "react-router-dom";
import { prettyFormat } from "@testing-library/react";



const HomeScreen4 = ()=>{

    const navigate = useNavigate();
    
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const dataProjects = [
        {
            business: "Zillient Farm",
            label: "Farm",
            projectName: "Pendaftaran Izin Edar Pupuk",
            highlight: "The project was completed in 8 months",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectFarm,
            iconSrc: IconLabelFarm
        },
        {
            business: "Zillient Education",
            label: "Education",
            projectName: "Certified Digital Marketing",
            highlight: "The project was completed in 3 months.",
            desc: "Certified Digital Marketing menjadi rujukan bagi para profesional pemasaran digital. Sertifikasi ini menetapkan standar tinggi untuk pemahaman dan keterampilan praktisi pemasaran dalam konteks digital. Dengan sertifikasi ini, mereka dapat membuktikan keahlian mereka di berbagai aspek pemasaran secara digital.",
            imgSrc: ImgProjectEdu,
            iconSrc: IconLabelEduc
        },
        {
            business: "Zillient Construction",
            label: "Construction",
            projectName: "Ocean View Bali",
            highlight: "The project was completed in 6 months",
            desc: "adalah sebuah proyek pembangunan properti yang mencakup pembangunan villa atau hunian mewah di kawasan Sanur, Bali. Sanur adalah salah satu daerah terkenal di Bali yang terkenal dengan pantainya yang indah dan suasana yang lebih tenang dibandingkan dengan daerah wisata lainnya seperti Kuta atau Seminyak.",
            imgSrc: ImgProjectCons,
            iconSrc: IconLabelConstr
        },
        {
            business: "Zillient Tour",
            label: "Tour",
            projectName: "International Tour Wonderful of Turkey",
            highlight: " This 10-day Turkey tour package",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.",
            imgSrc: ImgProjectTour,
            iconSrc: IconLabelTour
        },
        {
            business: "Zillient Consultation",
            label: "Consultation",
            projectName: "Pendirian Badan Usaha",
            highlight: "The project was completed in 6 months",
            desc: "Badan Hukum: Pendaftaran perusahaan sebagai badan hukum, seperti perseroan terbatas (PT), firma, atau komanditer. Nama Perusahaan: Pendaftaran nama perusahaan untuk mendapatkan hak eksklusif atas nama tersebut. Nomor Pokok Wajib Pajak (NPWP): Pendaftaran untuk memperoleh NPWP perusahaan.",
            imgSrc: ImgProjectLegal,
            iconSrc: IconLabelCons
        }
    ]

    const [popUpView, setPopUpView] = useState(false);
    const [popIndex, setPopIndex] = useState(0);


    
    const handleViewAll = () =>{
        navigate("/businesses")
    };

    const handleViewDetails = (text:any) =>{
        setPopIndex(text);
        setPopUpView(true);
    };

    

    return(
        <>
        <div className={`${windowWidthClass}-home-screen4-alt`}>
            <div className="section header">
                <h2>OUR PROJECTS</h2>
                <div className="wrapper">
                    <p className="desc">Explore our projects that illustrate the success of our client partnering with us</p>
                    <p className="button" onClick={handleViewAll}>view all</p>
                </div>
            </div>
            <div className="section ladders">
                    {
                        dataProjects.map((project:any, index:any)=>{
                            const {
                                business, 
                                label, 
                                iconSrc, 
                                imgSrc,
                                projectName,
                                highlight, 
                                desc
                            } = project;
                            return(
                                <div key={index} className="grid-item">
                                   <div className="folder">
                                        <div className="tab">
                                            <div className="label-wrapper">
                                                <img alt={`${business}`} src={iconSrc} />
                                                <div className="text-wrapper">
                                                    <p className="main">Zillient</p>
                                                    <p className="label">{label}</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                   </div>
                                   <div className="folder"> 
                                        <div className="content">
                                            <div className="section image">
                                                <div className="frame">
                                                    <img alt={`banner ${business}`} src={imgSrc}  />
                                                </div>
                                            </div>
                                            <div className="section text">
                                                <div className="text-wrapper">
                                                    <h2>{projectName}</h2>
                                                    <h3>{highlight}</h3>
                                                    <p>{desc}</p>
                                                    <p className="button" onClick={()=>handleViewDetails(index)}>view details</p>
                                                </div>
                                            </div>
                                            {
                                                popUpView ?
                                                (
                                                    <div className={`${windowWidthClass}-pop-up-view`}
                                                      
                                                    >
                                                        <div className="content">
                                                            <div className="wrapper">
                                                                <div className="section image">
                                                                    <div className="frame">
                                                                        <img alt={`banner ${business}`} src={dataProjects[popIndex][`imgSrc`]}  />
                                                                    </div>
                                                                </div>
                                                                <div className="section text">
                                                                    <div className="text-wrapper">
                                                                        <h2>{dataProjects[popIndex][`projectName`]}</h2>
                                                                        <h3>{dataProjects[popIndex][`highlight`]}</h3>
                                                                        <p>{dataProjects[popIndex][`desc`]}</p>
                                                                        <p className="button close" onClick={()=>setPopUpView(!popUpView)}>close</p>
                                                                    </div>
                                                                 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ):
                                                (
                                                    <></>
                                                )
                                            }
                                        </div>
                                   </div>
                                </div>  
                            )
                        })
                    }
            </div>
           
        </div>
        
        </>
    )
};


export default HomeScreen4;