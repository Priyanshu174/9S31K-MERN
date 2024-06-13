import React from 'react'
import "./styles.css"
const QuadImage = () => {
  return (
    <div className='quad-box'>
      <h2>Appliances for your home | Up to 55% off</h2>
      <div className="container">
      <div className="row">
        <div className="image">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="Image 1"  />
          <span>Refrigrator</span>
        </div>
        <div  className="image">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="Image 2" />
          <span>Refrigrator</span>
        </div>
      </div>
      <div className="row">
      <div  className="image">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="Image 3"  />
      <span>Refrigrator</span>
        </div>
        <div  className="image">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="Image 4"  />
          <span>Refrigrator</span>
        </div>
      </div>
    </div>
    <p> <a href="">See more</a></p>
     
    </div>
  )
}

export default QuadImage