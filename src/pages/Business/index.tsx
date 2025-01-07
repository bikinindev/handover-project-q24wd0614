import { AppFooter, AppNavbar } from "../../components";
import { BusinessScreen3, BusinessScreen1, HomeScreen3, ZillientScreenBanner, BannerScreen, TestimonyConveyorNext, RevolutionaryConveyor } from "../../containers";
import OurPartner from "../../containers/OurPartnerScreen";
import globalStates from "../../utils/global";


const Careers =()=>{

    const businessIds={
        ZILLIENT_FARM: "zillient-farm",
        ZILLIENT_EDUCATION: "zillient-education",
        ZILLIENT_CONSTRUCTION: "zillient-construction",
        ZILLIENT_TOUR: "zillient-tour",
        ZILLIENT_CONSULTATION: "zillient-consultation"
    }
    const businessZillient = globalStates && globalStates.businessZillient;
    const businessDetailFarm = businessZillient && businessZillient[`${businessIds.ZILLIENT_FARM}`];
    const businessDetailEducation = businessZillient && businessZillient[`${businessIds.ZILLIENT_EDUCATION}`];
    const businessDetailConstruction = businessZillient && businessZillient[`${businessIds.ZILLIENT_CONSTRUCTION}`];
    const businessDetailTour = businessZillient && businessZillient[`${businessIds.ZILLIENT_TOUR}`];
    const businessDetailConsultation = businessZillient && businessZillient[`${businessIds.ZILLIENT_CONSULTATION}`];
    return(
        <div className="">
            <AppNavbar/>
            {/* <BusinessScreen1/> */}
            <BannerScreen data={{
                title: "Business",
            }} />
            <HomeScreen3/>
            <TestimonyConveyorNext/>
            <RevolutionaryConveyor/>
            <OurPartner/>
            {/* <ZillientScreenBanner data={businessDetailFarm}/>
            <ZillientScreenBanner data={businessDetailEducation}/>
            <ZillientScreenBanner data={businessDetailConstruction}/>
            <ZillientScreenBanner data={businessDetailTour}/>
            <ZillientScreenBanner data={businessDetailConsultation}/> */}
            {/* <BusinessScreen3/> */}
            <AppFooter/>
        </div>
    )
};

export default Careers;