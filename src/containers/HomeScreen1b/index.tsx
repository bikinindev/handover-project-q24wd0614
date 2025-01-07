import { useContext } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen1b.css";
import { IconZillientGroupLogo } from "../../assets";

const HomeScreen1b = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    return (
        <div className={`${windowWidthClass}-home-screen1b`}>
            <div className="wrapper">
                <div className="grid-item image">
                    <img alt="logo zillient group" src={IconZillientGroupLogo} />
                </div>
                <div className="grid-item text-wrapper">
                    <h2>Zillient Group</h2>
                    <p>Zillient Group is a start-up that is committed to providing the best service through innovation and use of technology to partners by realizing sustainable and inclusive economic transformation.</p>
                </div>  
            </div>
        </div>
    )
};

export default HomeScreen1b;