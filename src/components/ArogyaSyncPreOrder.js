import '../styles/ArogyaSyncPreOrder.css'

const ArogyaSyncPreOrder = () =>{
    return(
        <div>
          <div className="marquee-container">
            <span className="marquee-text">
                <span>SAVE 15K ON PRE-ORDER !!</span>
                <span>SAVE 15K ON PRE-ORDER !!</span>
                <span>SAVE 15K ON PRE-ORDER !!</span>
                <span>SAVE 15K ON PRE-ORDER !!</span>
                <span>SAVE 15K ON PRE-ORDER !!</span>
                
            </span>
        </div>
        <div className="arogya-container-wrapper">
      <div className="pricing-container">
      {/* Normal Price Card */}
      

      {/* Pre-Order Price Card */}
      

      {/* Launch Price Card */}
      <div className="pricing-card launch">
      <div className="pricing-card preorder">
      <div className="pricing-card normal">
        <p className="price">₹40,000</p>
        <p className="label">Normal Price</p>
      </div>
        <p className="price">₹25,000</p>
        <p className="label">Pre-Order Price</p>
      </div>
        <p className="price">₹30,000</p>
        <p className="label">Launch Price</p>
      </div>

      {/* Pre-Order Button */}
      <button className="preorder-btn">PRE-ORDER</button>
    </div>
  
      {/* Main content */}
      <div className="arogya-main">
        <h1 className="arogya-title">
          EXCLUSIVE PRE-ORDER OFFER- SECURE YOUR AROGYA SYNC TODAY!
        </h1>
        
        {/* Flow chart */}
        <div className="flow-chart">
          {/* Step 1 */}
          <div className="step-box">
            <p>Pay ₹5K Now (Secure Your Pre-Order)</p>
          </div>
          
          {/* Arrow */}
          <div className="arrow">↓</div>
          
          {/* Step 2 */}
          <div className="step-box">
            <p>Pay ₹20K Before <br/> Delivery</p>
          </div>
          
          {/* Arrow */}
          <div className="arrow">↓</div>
          
          {/* Step 3 */}
          <div className="step-box">
            <p>Receive Your Arogya Sync Device</p>
          </div>
          
          {/* Delivery time */}
          <p className="delivery-info">
            Receive the product in 12-16 months
          </p>
        </div>
      </div>
    </div>
        </div>

    )
}

export default ArogyaSyncPreOrder