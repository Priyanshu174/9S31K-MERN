import React from 'react'
import QuadImage from "../QuadImage/quadImage"
import Advertisement from '../advertisement'
import "./styles.css"

const Singlerow = () => {
  return (
    <div className='single-row'>
        <QuadImage/>
        <QuadImage/>
        <QuadImage/>
        <QuadImage/>
        
    </div>
  )
}

export default Singlerow