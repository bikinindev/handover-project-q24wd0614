import { AppFooter, AppNavbar } from "../../components";
import { CareerDivisionCollage, CareerMeaningful, CareersScreen1, ProvaConveyor, WorldMap } from "../../containers";


const Careers =()=>{

    
    return(
        <div className="">
            <AppNavbar/>
            <CareersScreen1/>
            <ProvaConveyor/>
            <CareerMeaningful/>
            <CareerDivisionCollage/>
            <WorldMap/>
            <AppFooter/>
        </div>
    )
};

export default Careers;