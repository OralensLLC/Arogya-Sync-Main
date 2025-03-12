
import img from '../assests/MobileLandingBg.png'
import '../styles/HeroSection.css'


const HeroSection = () =>{
	console.log(window.innerWidth);

    return(

		<>
  
		<div
		className="hero-section"
	  >
	  <div className="hero-text">
		<h1>
		  EMPOWERING HEALTHCARE WITH <br /> REAL-TIME MONITORING
		</h1>
		<p>
		  Designed for hospitals & nursing <br/> homes to streamline patient  <br/> monitoring effortlessly.
		</p>
		<button className="pre-order">PRE-ORDER</button>
	  </div>
	
	</div>
	<div className="hero-section-mobile">
		<img src={img} alt='bg' className='mobileBgImage'/>
		 <div className="hero-text-mobile">
		<h1>
		  EMPOWERING HEALTHCARE WITH <br /> REAL-TIME MONITORING
		</h1>
		<p>
		  Designed for hospitals & nursing <br/> homes to streamline patient  <br/> monitoring effortlessly.
		</p>
		<button className="pre-order">GET STARTED</button>
	  </div>
		
	 
	
	</div>

	</>

    )
}
export default HeroSection