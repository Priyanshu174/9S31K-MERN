import React from 'react'
import "./styles.css"
import "../../app.css"
const HorizontalScroller = () => {
  return (
    <div className='horizontal-scroller'>
      <span style={{ fontSize:"1.5rem"}}><strong>Up to 75% off | Unique products from new businesses </strong></span>
      
      <a href="">see all offers</a>
      <div className='h-images'>
        <img src="https://m.media-amazon.com/images/I/51F5ptic+GL._AC_SY200_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/51F5ptic+GL._AC_SY200_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/51F5ptic+GL._AC_SY200_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/51F5ptic+GL._AC_SY200_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/51F5ptic+GL._AC_SY200_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/51F5ptic+GL._AC_SY200_.jpg" alt="" />
        
      </div>
    </div>
  )
}

export default HorizontalScroller