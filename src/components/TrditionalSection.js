import traditional from '../assests/Screen 3.png'
import '../styles/TraditionalSection.css'

const TraditionalSection = () =>{
    const sectionData = [
        {
          title: "OUTDATED SYSTEMS",
          points: [
            "Costly upgrades",
            "Compatibility issues",
            "Difficult digitization"
          ]
        },
        {
          title: "OVERBURDENED STAFF",
          points: [
            "Staff shortages risk",
            "Patient safety",
            "Delayed responses"
          ]
        },
        {
          title: "MANUAL DATA LOGGING",
          points: [
            "Time-consuming",
            "Error-prone",
            "Delays interventions"
          ]
        }
      ];
    return(
        <>
        <div >
            <img src={traditional} alt="screen-3" className='screen-3-image' />
        </div>
       
         <div className="monitoring-container">
  {/* Background hexagon patterns */}

  {/* Main content */}
  
  <div className="content-wrapper">
  <h1 className="main-title">
      WHAT'S WRONG WITH TRADITIONAL MONITORING
    </h1>
   
    
    <div className="sections-container">
      {sectionData.map((section, index) => (
        <div key={index} className="section">
          <h2 className="section-title">{section.title}</h2>
          <ul className="points-list">
            {section.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {index < sectionData.length - 1 && (
            <div className="divider-container">
              <div className="divider">
                <div className="divider-dot"></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
   
    </>
    )
}
export default TraditionalSection