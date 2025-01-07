import { useContext } from "react";
import globalStates from "../../utils/global";
import "./AppFooter.css";
import { IconZillientGroupLogo, ImgLogoFooter } from "../../assets";
import { FloatingIcon } from "..";
import { useNavigate } from "react-router-dom";

const AppFooter = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const navigate = useNavigate();

    const handleFooterCompany=(path:string)=>{
        navigate(path);
    };
     const handleFooterSolution=(path:string)=>{
        navigate(path);
    };

    
    return(
        <>
        <div className={`${windowWidthClass}-app-footer`}>
            <div className="footer-group bar-1">
                <div className="image">
                    <img alt="logo zillient" src={IconZillientGroupLogo}/>
                </div>
                {/* <div className="text-wrapper">
                    <p>Jl. Kayu Manis, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80351</p>
                </div> */}
            </div>
            <div className="footer-group bar-2">
                <div className="anchor-group follow">
                    <h3>Company</h3>
                    <p onClick={()=>handleFooterCompany("/")}>Home</p>
                    <p onClick={()=>handleFooterCompany("/about")}>About Us</p>
                    <p onClick={()=>handleFooterCompany("/contacts")}>Contact Us</p>
                </div>
                 <div className="anchor-group follow">
                    <h3>Solution</h3>
                    <p onClick={()=>handleFooterCompany("/businesses")}>Zillient Farm</p>
                    <p onClick={()=>handleFooterCompany("/businesses")}>Zillient Education</p>
                    <p onClick={()=>handleFooterCompany("/businesses")}>Zillient Construction</p>
                    <p onClick={()=>handleFooterCompany("/businesses")}>Zillient Tour</p>
                    <p onClick={()=>handleFooterCompany("/businesses")}>Zillient Consultation</p>
                </div>
                 <div className="anchor-group follow">
                    <h3>Resource</h3>
                    <p onClick={()=>handleFooterCompany("/careers")}>Career</p>
                    <p onClick={()=>handleFooterCompany("/careers")}>Event</p>
                    <p onClick={()=>handleFooterCompany("/careers")}>Blog</p>
                </div>
                <div className="anchor-group our-office">
                    <h3>Our Office</h3>
                    <p>Jl. Kayu Manis, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80351</p>
              
                </div>
            </div>
        </div>
        <FloatingIcon/>
        </>
    )
};

export default AppFooter;