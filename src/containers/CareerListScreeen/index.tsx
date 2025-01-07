import { useContext, useEffect, useRef, useState } from "react";
import globalStates from "../../utils/global";
import "./CareerListScreen.css";

const CareerListScreen = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const setGlobalDynamicData = globalContext && globalContext.setGlobalDynamicData;
    const globalDynamicData = globalContext && globalContext.globalDynamicData;


    const zillientCareers  = globalStates && globalStates.zillientCareers;

    const screenCareerListRef = useRef(null) as any;
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenHome1 = screenCareerListRef.current.getBoundingClientRect();
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
        // setFilteredRoles(zillientCareers.filter((career:any) => career.role.toLowerCase().includes(pattern.toLowerCase())));
    };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // alert(`Selected Location: ${location}, Selected Division: ${division}, Role Pattern: ${rolePattern}`);

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
    // alert(`Selected Location: ${location}, Selected Division: ${division}, Role Pattern: ${rolePattern}`);
  };
    // console.log('>>> careerlist', globalDynamicData);
    
    const rowTitle = [
        {
            id: 1,
            title: "Role",
            field: "role"
        },
        {
            id: 2,
            title: "Division",
            field: "division"
        },
        {
            id: 3,
            title: "Location",
            field: "location"
        },
        {
            id: 4,
            title: "Employment Type",
            field: "employmentType"
        }
    ]
    const tableData = globalDynamicData || [{role: "", division: "", location: "", employmentType:""}]

    const heightFactor = 15 * +tableData.length;
    const divHeight = 100 + heightFactor;

    return(
        <div ref={screenCareerListRef} className={`${windowWidthClass}-career-list-screen`}
            style={{height: `${divHeight}vh`}}
        >
            <div className="wrapper">
                <div className="background">
                    {/* <img alt="legal" src={ImgProjectLegal} /> */}
                </div>
                <div className="shield">

                </div>
                <div className="content">
                    <div className="screen tagline">
                        <h1>START YOUR CAREER WITH ZILLIENT FOR ACHIEVE BEST FUTURE</h1>
                    
                    </div>
                    <div className="table-container">
                        <div className="row-title">
                            {
                                rowTitle.map((field:any, index:any)=>{
                                    const {title} = field;
                                    return (
                                        <div className="column">
                                            <p>{title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                            {
                                tableData.map((field:any, index:any)=>{
                                    const {division, role, employmentType, location } = field;

                                    return (
                                        <div className="row-value">
                                            <div className="column role"><p>{role}</p></div>
                                            <div className="column division"><p>{division}</p></div>
                                            <div className="column location"><p>{location}</p></div>
                                            <div className="column employmentType"><p>{employmentType}</p></div>
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

export default CareerListScreen;