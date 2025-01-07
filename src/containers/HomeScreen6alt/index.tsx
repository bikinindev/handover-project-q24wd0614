import './HomeScreen6alt.css';
import { useContext } from "react";
import globalStates from "../../utils/global";
import { ImgBannerHomeScreen6 } from '../../assets';

const HomeScreen6 = ()=>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;


    const dataActions = [
        {
            action: "Whatsapp",
            text: "Start Chat"
        },
        {
            action: "Instagram",
            text: "Start Chat"
        },
        {
            action: "Email",
            text: "Start Chat"
        },
        {
            action: "Phone",
            text: "Start Chat"
        }
    ]
    return(
        <div className={`${windowWidthClass}-home-screen6-alt`} >
            <div className="wrapper">
               <div className='background'>
                    {/* <div className='frame'>
                        <img alt="zillient let's get started" src={ImgBannerHomeScreen6}/>
                    </div> */}
               </div>
                <div className='content'>
                    <div className='section tagline'>
                        <div className='text-wrapper'>
                            <h2>LET'S GET STARTED</h2>
                            <p>Contact our staff to schedule relaxed meeting to arrange a free consultation and price estimate.</p>
                        </div>
                    </div>
                    <div className='section menubar'>
                        {
                            dataActions.map((actions:any, index:any)=>{
                                const {action, text} = actions;
                                return(
                                    <div className='action-button'>
                                        <div className="section action">
                                           <h4>{action}</h4> 
                                        </div>
                                        <div className="section button">
                                            <p>{text}</p>
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

export default HomeScreen6;
