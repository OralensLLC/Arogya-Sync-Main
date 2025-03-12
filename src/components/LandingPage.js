import HeroSection from "./HeroSection"
import Navbar from "./Navbar" 
import '../styles/Landing.css'
import AiPowerSection from "./AiPowerSection";
import TraditionalSection from "./TrditionalSection";
import CarouselSection from "./CarouselSection";
import MonitoringSection from "./MonitoringSection";
import HowItWorks from "./HowItWorksSection";
import SmartMonitoring from "./SmartMonitoring";
import ScrollerPrice from "./ArogyaSyncPreOrder";
import Footer from './Footer'
import ContactUs from "./ContactUs";

const LandingPage = () =>{
    return(
        <div >
            <div >
            <Navbar/>
            <HeroSection/>

            </div>
           
          
            <div className="second-containers">
            <AiPowerSection/>
            <TraditionalSection/>
            <CarouselSection/>
            <MonitoringSection/>
            <HowItWorks/>
            <SmartMonitoring/>
            <ScrollerPrice/>
            <div>
            <ContactUs/>
            <Footer/>
            </div>
            
            </div>
            
        </div>
        
    )
}

export default LandingPage