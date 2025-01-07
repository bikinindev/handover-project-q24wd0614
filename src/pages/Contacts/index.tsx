import { AppFooter, AppNavbar } from "../../components";
import { BannerScreen, BannerScreen2, ContactScreen1Alt, ContactsScreen1 } from "../../containers";
// import BannerScreen from "../../containers/BannerScreen2";


const Careers =()=>{

    
    return(
        <div className="">
            <AppNavbar/>
            {/* <BannerScreen2 data={{title: "Contact Us"}}/> */}
            {/* <ContactsScreen1/> */}
            <ContactScreen1Alt/>
            <AppFooter/>
        </div>
    )
};

export default Careers;