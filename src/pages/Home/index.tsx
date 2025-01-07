
import "./Home.css";
import { HomeScreen1, HomeScreen1b, HomeScreen2, HomeScreen2alt, HomeScreen3, HomeScreen4, HomeScreen4alt, HomeScreen5, HomeScreen5alt, HomeScreen5b, HomeScreen6, HomeScreen6alt } from "../../containers";
import { AppFooter, AppNavbar } from "../../components";

const Home = () =>{
    
    return(
        <div>
            <AppNavbar/>
            <HomeScreen1/>
            <HomeScreen1b/>
            <HomeScreen2alt/>
            <HomeScreen3/>
            <HomeScreen4alt/>
            <HomeScreen5alt/>
            <HomeScreen5b/>
            <HomeScreen6alt/>
            <AppFooter/>
        </div>
    )
};

export default Home;