import smart from '../assests/Smarter monitoring.png'
import '../styles/SmartMonitor.css'

const SmartMonitoring =() =>{

    return(
        <div>
            <div className='smartMonitoringContainer'>
                <img src={smart} alt="small-monitors" className='small-monitors'/>

            </div>
            <h2 className='title-heading'>Central Multipara System</h2>
            <div className='title-container'>
                <p className='title'>INITIAL COST</p>
                <p className='title'>AMC</p>
                <p className='title'>LIFECYCLE COST (3Y)</p>
            </div>
            <div className='table-container'> 
            <p className='title-table'>₹1-2L / MONITOR</p>
                <p className='title-table'>₹1.6L / YEAR</p>
                <p className='title-table'>₹25-31L</p>
            </div>
            <p className='vs-para'>V/S</p>
            <h3 className='arogya-heading'>AROGYA SYNC</h3>
            <div className='title-container'>
                <p className='title'>INITIAL COST</p>
                <p className='title'>AMC</p>
                <p className='title'>LIFECYCLE COST (3Y)</p>
            </div>
            <div className='table-container'> 
            <p className='title-table'>₹2.5L <br/>(FOR 10 monitors)</p>
                <p className='title-table'>₹10K / YEAR</p>
                <p className='title-table'>₹2.8L</p>
            </div>
            <div className='button-container-preorder'>
            <button className="smart-preorder-btn">Pre-order Now</button>
            </div>
        </div>
    )
}
export default SmartMonitoring