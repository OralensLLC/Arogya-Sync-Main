import flow from '../assests/How it works(flow chart).png'
import working from '../assests/Working image.png'
import mobileHowitwork from '../assests/How-it-works-mobile.png'
import '../styles/HowItWorks.css'

const HowItWorks = () =>{
    return(
        <div>
            
            <div className='how-images-container'>
                <div className='flow-container'>
                 <h1 className='how-heaing'>HOW IT WORKS</h1>
                 <img src={mobileHowitwork} alt='how-it-works' className='how-it-works-mobile'/>
                <img src={flow} alt="flow-chart" className='flow-image'/>
                </div>
                <img src={working} alt="Working-doctors" className='working-image'/>
            </div>
            

        </div>
    )
}
export default HowItWorks