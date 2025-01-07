import { act, useContext } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen6.css";
import { ImgBannerConstruction2 } from "../../assets";

const HomeScreen6 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    const dataCTA = [
        {
            name: "whatsapp",
            action: "start chat"
        },
        {
            name: "instagram",
            action: "start chat"
        },
        {
            name: "email",
            action: "send email"
        },
        {
            name: "phone",
            action: "call now"
        }
    ]

    return(
        <div className={`${windowWidthClass}-home-screen6`}>
            <div className="wrapper">
                <div className="background">
                    <img alt="background construction zillient" src={ImgBannerConstruction2}/>
                </div>
                <div className="shield">

                </div>
                <div className="content">
                    <div className="grid-item left">
                        <div className="text-span">
                            <h3>LET'S GET STARTED</h3>
                            <p>Contact our  staff to schedule relaxed meeting to arrange a free consultation and price estimate.</p>
                        </div>
                    </div>
                    <div className="grid-item right">
                        <div className="button-ladder">
                            {
                                dataCTA.map((cta:any, index:any)=>{
                                    const {name, action} = cta;
                                    return(
                                        <div className="ladder-step">
                                            <p>{name}</p>
                                            <span>
                                                {action}
                                            </span>
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeScreen6;