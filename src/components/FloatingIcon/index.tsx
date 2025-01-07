import { useContext, useState } from "react";
import globalStates from "../../utils/global";
import "./FloatingIcon.css";
import { IconFloatingWa, IconWa } from "../../assets";

const FloatingIcon = () =>{
    
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const [floatingCollapsed, setFloatingCollapsed] = useState(false);

    const handleFloatingBar = () =>{
        setFloatingCollapsed(!floatingCollapsed);
    }
    const openLinkHandler = (link:any) =>{
        // console.log("link", link)
        window.open(link, '_blank');
    }

    const openWa = (wa:string)=>{
        const waNumber = wa || '628123456789';
        openLinkHandler(`https://wa.me/${waNumber}?text=Hi,%20I'd%20like%20to%20know%20more%20%20about%20this%20product.%20Thank%20you.%20`)
    }

    const data = {
        whatsapp: "6282229161270"
    }

    return (
        <>
        <div className={`${windowWidthClass}-floating-icon`}>
            <div className="image"
                onClick={handleFloatingBar}
            >
                <img alt="chat icon zillient" src={IconFloatingWa} />
            </div>
        </div>
           
        <div className={`${windowWidthClass}-floating-bar 
            ${floatingCollapsed? "collapsed":""}
        `}

        
        >
            <div className="wrapper">
                <div className="close" >
                    <p onClick={handleFloatingBar}>-</p>
                </div>
                <div className="text-wrapper">
                    <h3>Contact Us</h3>
                    <p>How can we assist you today?</p>
                </div>
                <div className="buttons">
                    <div className="button-group" onClick={()=>openWa(data.whatsapp)}>
                        <img alt="green whatsapp icon" src={IconWa} />
                        <p>Chat Whatsapp</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default FloatingIcon;