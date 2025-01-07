import { useContext } from "react";
import globalStates from "../../utils/global";
import "./HomeScreen2.css";
import { IconCoreValue1, IconCoreValue2, IconCoreValue3, IconCoreValue4, IconCoreValue5 } from "../../assets";


const dataOurValues =[
    {
        name: "PRIORITY",
        imgSrc: IconCoreValue1
    },
    {
        name: "RESPECTFUL",
        imgSrc: IconCoreValue2
    },
    {
        name: "OPTIMISTIC",
        imgSrc: IconCoreValue3
    },
    {
        name: "VISIONARY",
        imgSrc: IconCoreValue4
    },
    {
        name: "ACTION",
        imgSrc: IconCoreValue5
    }
];

const HomeScreen2 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreenHome1 = screensOffset && screensOffset.isOffsetScreenHome1;
    return(
        <div className={`${windowWidthClass}-home-screen-2`}>
            <div className="wrapper">
                    <h2>OUR VALUES</h2>
                    <div className="cardholder">
                        {
                            dataOurValues.map((core:any, index:any)=>{
                                const { name, imgSrc} = core;
                                return(
                                    <div className="grid-item">
                                        <div className="card">
                                            <img alt={`${name} core values zillient`} src={imgSrc}/>
                                            <h3>{name}</h3>
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

export default HomeScreen2;