import { useContext, useEffect, useRef, useState } from "react";
import globalStates from "../../utils/global";
import "./CareerMeaningful.css";
import { useNavigate } from "react-router-dom";
// import { BannerCoffee1, BannerCoffee2 } from "../../assets";

const CareerMeaningful = () =>{

    const navigate = useNavigate();

    const [isCardHover, setIsCardHover] = useState({}) as any;

    const [cardKey, setCardKey] = useState(null) as any;
    const cardRef = useRef([]) as any;

    const meaningfulCareerGallery = globalStates && globalStates.meaningfulCareerGallery;

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const setGlobalDynamicData = globalContext && globalContext.setGlobalDynamicData;

    const zillientCareers = globalStates && globalStates.zillientCareers;
    const divisions = zillientCareers.map((career:any) => career.division);
    const uniqueDivisions = [...new Set(divisions)];

    const careerDivision = globalStates && globalStates.careerDivision;

    const screenCareerMeaningfulRef = useRef(null) as any;
    
    // console.log({})
    useEffect(()=>{
        const cardElement = cardRef.current;
        setCardKey(cardElement.id)

        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenCareerMeaningful = screenCareerMeaningfulRef.current.getBoundingClientRect();
            const top = screenCareerMeaningful.top;
            const bottom = screenCareerMeaningful.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetscreenCareerMeaningful: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetscreenCareerMeaningful: true,
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
                title: "Create Meaningful Career Paths and Make Positive Impacts on Our Planet",
                desc: "Our company is driven by a deep passion for creating positive change on the planet. We're looking for passionate and talented individuals to become a part of a dynamic global team making a real difference in the world for People, Planet, and Prosperity."
            },
            list: meaningfulCareerGallery || []
        }
    };
    

    const itemLength = (componentData.content.list.length) || 1;
    const heightFactor = Math.ceil(+itemLength/3);
    const heightFactorMob = +itemLength/2;

    
    const templateColumnWidth = 18;
    const templateColumnWidthMob = 48;
    const autoRowHeight = 20;
    const autoRowHeightMob = 50;


    const divHeight = +heightFactor*(autoRowHeight+3);
    const divHeightMob = (+heightFactorMob*(autoRowHeightMob)+100);
    
    const modHeightFactor = +itemLength % 4;
    const gridRepeat = +itemLength > 3 ? 4 : modHeightFactor;
    const gridRepeatMob = 2;

    const componentStyle={
        height: `${windowWidthClass==="w-mob"?divHeightMob:divHeight}vw`
    }

    const wrapperStyle={
        gridTemplateColumns: `repeat(${windowWidthClass==="w-mob"?gridRepeatMob:gridRepeat}, ${windowWidthClass==="w-mob"?templateColumnWidthMob:templateColumnWidth}vw)`,
        gridAutoRows: `${windowWidthClass==="w-mob"?autoRowHeightMob:autoRowHeight}vw`
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
        <div ref={screenCareerMeaningfulRef} className={`${windowWidthClass}-career-meaningful`}
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
                    <div className="text-wrapper">
                        <h2>
                            {componentData.content.screen.title}
                        </h2>
                        <p>
                            {componentData.content.screen.desc}
                        </p>
                    </div>
                    <div className="gallery"
                        style={wrapperStyle}
                    >
                        {
                            componentData.content.list.map((galleryItem:any, index:any)=>{

                                const {type, image, title} = galleryItem;

                                return (
                                    <div className="item">
                                        <div className="card">
                                            <div className="frame">
                                                <img 
                                                    src={image.src}
                                                    alt={image.alt}
                                                />
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

export default CareerMeaningful;