import { useContext, useEffect, useRef, useState } from "react";
import globalStates from "../../utils/global";
import "./ContactsScreen1.css";
import { ImgProjectLegal } from "../../assets";

const ContactsScreen1 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenCareer1Ref = useRef(null) as any;
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenHome1 = screenCareer1Ref.current.getBoundingClientRect();
            const top = screenHome1.top;
            const bottom = screenHome1.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetScreenHome1: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetScreenHome1: true,
                }});
            };
        
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [globalContext])

    const [formData, setFormData] = useState({
        organizationEmail: '',
        jobTitle: '',
        fullName: '',
        companySize: '',
        headquarters: '',
        operatingCountry: ''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission (e.g., send data to a server)
    };
    
    return(
        <div ref={screenCareer1Ref} className={`${windowWidthClass}-contacts-screen1`}>
            <div className="wrapper">
                <div className="background">
                    <img alt="legal" src={ImgProjectLegal} />
                </div>
                <div className="shield">

                </div>
                <div className="content">
                    <div className="screen">
                        <div className="grid-item left">
                            <div className="text-span">
                                <h3>LET'S GET STARTED</h3>
                                <p>Contact our  staff to schedule relaxed meeting to arrange a free consultation and price estimate.</p>
                            </div>
                        </div>
                        <div className="grid-item right">
                             <div className="title">
                                <h2>
                                    Contact us
                                </h2>
                                <p>
                                    We'll put your on the right path
                                </p>
                            </div>
                            <div className="form">
                            <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="organizationEmail">Organization Email:</label>
                                        <input
                                            type="email"
                                            id="organizationEmail"
                                            name="organizationEmail"
                                            value={formData.organizationEmail}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="jobTitle">Job Title:</label>
                                        <input
                                            type="text"
                                            id="jobTitle"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="fullName">Full Name:</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {/* <div>
                                        <label htmlFor="companySize">Company Size:</label>
                                        <select
                                            id="companySize"
                                            name="companySize"
                                            value={formData.companySize}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select size</option>
                                            <option value="1-10">1-10</option>
                                            <option value="11-50">11-50</option>
                                            <option value="51-200">51-200</option>
                                            <option value="201-500">201-500</option>
                                            <option value="501-1000">501-1000</option>
                                            <option value="1001-5000">1001-5000</option>
                                            <option value="5001-10000">5001-10000</option>
                                            <option value="10001+">10001+</option>
                                        </select>
                                    </div> */}
                                    <div>
                                        <label htmlFor="headquarters">Headquarters:</label>
                                        <input
                                            type="text"
                                            id="headquarters"
                                            name="headquarters"
                                            value={formData.headquarters}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="operatingCountry">Operating Country:</label>
                                        <input
                                            type="text"
                                            id="operatingCountry"
                                            name="operatingCountry"
                                            value={formData.operatingCountry}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="submit-button">
                                        <button  type="submit" >Submit</button>
                                    </div>
                            </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    )
};

export default ContactsScreen1;