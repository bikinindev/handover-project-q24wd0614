import { useContext, useEffect, useRef, useState } from "react";
import globalStates from "../../utils/global";
import "./CareerDivisionCollage.css";
import { useNavigate } from "react-router-dom";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const CareerDivisionCollage = () =>{

    const navigate = useNavigate();

    const [isCardHover, setIsCardHover] = useState({}) as any;

    const [cardKey, setCardKey] = useState(null) as any;
    const cardRef = useRef([]) as any;

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const setGlobalDynamicData = globalContext && globalContext.setGlobalDynamicData;

    const zillientCareers = globalStates && globalStates.zillientCareers;
    const divisions = zillientCareers.map((career:any) => career.division);
    const uniqueDivisions = [...new Set(divisions)];

    const careerDivision = globalStates && globalStates.careerDivision;

    const screenCareerDivisionCollageRef = useRef(null) as any;
    
    // console.log({})
    useEffect(()=>{
        const cardElement = cardRef.current;
        setCardKey(cardElement.id)

        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenCareerDivisionCollage = screenCareerDivisionCollageRef.current.getBoundingClientRect();
            const top = screenCareerDivisionCollage.top;
            const bottom = screenCareerDivisionCollage.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetscreenCareerDivisionCollage: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetscreenCareerDivisionCollage: true,
                }});
            };
        
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [globalContext])

    const componentData = {
        background: {
            image: {
                alt: "",
                src: ""
            }
        }, 
        content: {
            screen: {
                image: {
                    alt: "",
                    src: ""
                }
            },
            listDivision: careerDivision || uniqueDivisions || ["division_name"]
        }
    };
    

    const itemLength = (componentData.content.listDivision.length) || 1;
    const heightFactor = Math.ceil(+itemLength/3);
    const heightFactorMob = +itemLength/2;

    
    const templateColumnWidth = 28;
    const templateColumnWidthmob = 48;

    const autoRowHeight = 28;
    const autoRowHeightMob= 60;

    const divHeight = +heightFactor*(autoRowHeight+10);
    const divHeightMob = (+heightFactorMob*(autoRowHeightMob))+60;
    
    const modHeightFactor = +itemLength % 3;
    const gridRepeat = +itemLength > 2 ? 3 : modHeightFactor;
    const gridRepeatMob = 2;

    const componentStyle={
        height: `${windowWidthClass==="w-mob"?divHeightMob:divHeight}vw`
    }

    const [filteredRoles, setFilteredRoles] = useState(zillientCareers);
    const handleSubmit = (event:any) => {
        event.preventDefault();
        // alert(`Selected Location: ${location}, Selected Division: ${division}, Role Pattern: ${rolePattern}`);

        setFilteredRoles(zillientCareers.filter((career:any) => {
            // career.role.toLowerCase().includes("pattern.toLowerCase()");
            return (
                (career.role.toLowerCase().includes("")) &&
                (career.location.toLowerCase().includes("")) && 
                (career.division.toLowerCase().includes(""))
            )
        }));
        setGlobalDynamicData(zillientCareers.filter((career:any) => {
            // career.role.toLowerCase().includes("pattern.toLowerCase()");
            return (
                (career.role.toLowerCase().includes("")) &&
                (career.location.toLowerCase().includes("")) && 
                (career.division.toLowerCase().includes(""))
            )
        }))

        navigate('/careers/list')
        // alert(`Selected Location: ${location}, Selected Division: ${division}, Role Pattern: ${rolePattern}`);
    };
    return(
        <div ref={screenCareerDivisionCollageRef} className={`${windowWidthClass}-career-division-collage`}
            style={componentStyle}
        >
            <div className="wrapper">
                <div className="background display">
                    <div className="frame">
                        <img
                            alt= {componentData.background.image.alt}
                            src = {componentData.background.image.src}
                         />
                    </div>
                </div>
                <div className="shield">
                    
                </div>
                <div className="content display">
                    <h2>Start your journey here</h2>
                    <div className="wrapper collage"
                        style={
                        {
                            gridTemplateColumns: `repeat(${windowWidthClass==="w-mob"?gridRepeatMob:gridRepeat}, ${windowWidthClass==="w-mob"?templateColumnWidthmob:templateColumnWidth}vw)`,
                            gridAutoRows: `${windowWidthClass==="w-mob"?autoRowHeightMob:autoRowHeight}vw`
                        }
                    }
                    >
                    {
                        componentData.content.listDivision.map((division: any, index:any)=>{
                            const {title, image} = division;
                
                            return (
                                <div id={index} ref={(el:any)=>(cardRef.current[index]=el)} key={index} className="item">

                                    <div className="card wrapper-relative"
                                        onClick={handleSubmit}
                                        onMouseEnter={()=>{
                                            // alert(hoverIndex)
                                            // alert(cardRef.current[index].id);
                                            setCardKey(cardRef.current[index].id);

                                            let temp:any = {};
                                            temp[index] = true;
                                         
                                            // setCardKey(index)
                                            setIsCardHover((prev:any)=>{return({...prev, ...temp})})
                                            
                                        }}
                                        onMouseLeave={()=>{
                                            // setIsCardHover(false)
                                            // setCardKey(cardRef.current[index].id);
                                            let temp:any = {};
                                            temp[index] = false;
                                            setCardKey(null)
                                            setIsCardHover((prev:any)=>{return({...prev, ...temp})})
                                        }}
                                    >
                                        <div className="card-section wrapper-abs background">
                                            <div className="frame">
                                                <img 
                                                    src = {image.src}
                                                    alt = {image.alt}
                                                />
                                            </div>
                                        </div>
                                        <div className={`card-section wrapper-abs shield ${isCardHover[index]?"hover": ""}`}>

                                        </div>
                                        <div className="card-section wrapper-abs content">
                                            <h2>{title}</h2>
                                            <p>7 openings</p>
                                        </div>
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

export default CareerDivisionCollage;