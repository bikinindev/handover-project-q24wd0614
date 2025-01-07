import { useContext, useEffect, useRef, useState } from "react";
import globalStates from "../../utils/global";
import "./CareersScreen1.css";
import { useNavigate } from "react-router-dom";

const CareersScreen1 = () =>{
    const navigate = useNavigate();

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const setGlobalDynamicData = globalContext && globalContext.setGlobalDynamicData;
    

    const zillientCareers  = globalStates && globalStates.zillientCareers;

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


    const [location, setLocation] = useState('');
    const [division, setDivision] = useState('');
    const [rolePattern, setRolePattern] = useState('');
    const [filteredRoles, setFilteredRoles] = useState(zillientCareers);

    const handleLocationChange = (event:any) => {
        setLocation(event.target.value);
    };

    const handleDivisionChange = (event:any) => {
        setDivision(event.target.value);
    };

    const handleRolePatternChange = (event:any) => {
        const pattern = event.target.value;
        setRolePattern(pattern);
    };

  const handleSubmit = (event:any) => {
    event.preventDefault();

    setFilteredRoles(zillientCareers.filter((career:any) => {
        // career.role.toLowerCase().includes("pattern.toLowerCase()");
        return (
            (career.role.toLowerCase().includes(rolePattern.toLowerCase())) &&
            (career.location.toLowerCase().includes(location.toLowerCase())) && 
            (career.division.toLowerCase().includes(division.toLowerCase()))
        )
    }));
    setGlobalDynamicData(zillientCareers.filter((career:any) => {
        // career.role.toLowerCase().includes("pattern.toLowerCase()");
        return (
            (career.role.toLowerCase().includes(rolePattern.toLowerCase())) &&
            (career.location.toLowerCase().includes(location.toLowerCase())) && 
            (career.division.toLowerCase().includes(division.toLowerCase()))
        )
    }))

    navigate('/careers/list')
    // alert(`Selected Location: ${location}, Selected Division: ${division}, Role Pattern: ${rolePattern}`);
  };
    
    return(
        <div ref={screenCareer1Ref} className={`${windowWidthClass}-careers-screen1`}>
            <div className="wrapper">
                <div className="background">
                    {/* <img alt="legal" src={ImgProjectLegal} /> */}
                </div>
                <div className="shield">

                </div>
                <div className="content">
                    <div className="screen tagline">
                        <h1>{"Join Zillient Group today".toUpperCase()}</h1>
                        <h2>{"and become a part of a passionate and talented team driving a more sustainable future.".toUpperCase()}</h2>
                    </div>
                    <div className="screen form">
                        {/* <div className="form">
                            <h2>Search Jobs</h2>
                            <p>86 available positions in 7 countries</p>
                            <input 
                            className="position" 
                            placeholder="All positions"></input>

                            <input 
                            className="dream-job" 
                            placeholder="type your dream job here"></input>
                        </div> */}
                        {/* <form className="form-container" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="location">Location:</label>
                                <select id="location" value={location} onChange={handleLocationChange}>
                                <option value="">Select Location</option>
                                <option value="Jakarta">Jakarta</option>
                                <option value="Surabaya">Surabaya</option>
                                <option value="Bali">Bali</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="division">Division:</label>
                                <select id="division" value={division} onChange={handleDivisionChange}>
                                <option value="">Select Division</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Technology">Technology</option>
                                <option value="Product">Product</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Operating">Operating</option>
                                <option value="CEO Office">CEO Office</option>
                                </select>
                            </div>
                            <button type="submit">Submit</button>
                            </form> */}
                        <form className="form-container" onSubmit={handleSubmit}>
                            <div className="form-section box-header">
                                <h3>Search Jobs</h3>
                            </div>
                            <div className="form-section box-1">
                                 <div className="form-group wrapper location">
                                    {/* <label htmlFor="location">Location:</label> */}
                                    <select id="location" value={location} onChange={handleLocationChange}>
                                        <option value="">All Locations</option>
                                        <option value="Jakarta">Jakarta</option>
                                        <option value="Surabaya">Surabaya</option>
                                        <option value="Bali">Bali</option>
                                    </select>
                                </div>
                                <div className="form-group wrapper division">
                                    {/* <label htmlFor="division">All Divisions:</label> */}
                                    <select id="division" value={division} onChange={handleDivisionChange}>
                                        <option value="">Select Division</option>
                                        <option value="Commercial">Commercial</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Product">Product</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Operating">Operating</option>
                                        <option value="CEO Office">CEO Office</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-section box-2">
                                <div className="form-group wrapper roles">
                                    {/* <label htmlFor="rolePattern">Role Pattern:</label> */}
                                    <input
                                        type="text"
                                        id="rolePattern"
                                        value={rolePattern}
                                        onChange={handleRolePatternChange}
                                        placeholder="Type your dream position"
                                    />
                                </div>
                                <button className="form-button">Search</button>
                            </div>
                            {/* <div className="form-group">
                                <label>Filtered Roles:</label>
                                <ul>
                                {
                                filteredRoles.map((career:any, index:any) => {
                                const {role} = career;
                                return (
                                    <li key={index}>{role}</li>
                                )})
                                }
                                </ul>
                            </div> */}
                            {/* <div className="form-section box-button">
                                <button className="form-button" type="submit">Submit</button>
                            </div>
                             */}
                            </form>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
};

export default CareersScreen1;