import trad from  '../assests/Traditional.png'
import ai from '../assests/AiMasked.png'
import '../styles/AiPowerSection.css'
import traditional from '../assests/Traditional flowchart.png'
import aipower from '../assests/AI powered flowchart.png'
import traditionalmobileimg from "../assests/tradition-img-mobile.png"
import aimobileimg from "../assests/ai-image-mobile.png"
const AiPowerSection = () =>{
    return(
        <>
        <div className="ai-container">
            <h2 className='digitilize-text'>Digitize your hospital’s<br/> existing monitors at a faction <br/>of cost.</h2>
            <div className='traditional-container'>
                 {/* Left Image Animation */}
                <div
                >
                    <img src={trad} alt="traditionalImg" className='traditional-image'/>
                    
                </div>
                <div>
                    <img src={ai} alt="traditionalImg" className='traditional-image'/>
                   
                </div>
            </div>
            <div className='flow-charts-container'> 
                <img src={traditional} alt='flow1' className='flow-image'/>
                <img src={aipower}  alt='flow2'  className='flow-image'/>
            </div>
        </div>

            <div className="ai-container-mobile">
            <h2 className='digitilize-text'>Digitize your hospital’s<br/> existing monitors at a faction <br/>of cost.</h2>
            <div className='traditional-container'>
                <div className='traditional-mobile-container'>
                    <img src={traditionalmobileimg} alt="traditionalImg" className='traditional-image-mobile'/>
                    <div className='traditional-mobile-text-container'>
                        <h4  className='tradition-mobile-title'>TRADITIONAL</h4>
                        <img src={traditional} alt='flow1' className='flow-images'/>
                    </div>
                    
                    
                </div>
                <div  className='ai-mobile-container'>
                    <img src={aimobileimg} alt="traditionalImg" className='ai-image-mobile'/>
                    <div className='ai-mobile-text-container'>
                        <h4  className='ai-mobile-title'>AI-MONITORING</h4>
                        <img src={aipower}  alt='flow2'  className='flow-images'/>
                    </div>

                  
                
                </div>
            </div>
            </div>
            </>

    )
}

export default AiPowerSection