import React from 'react'
import Singlerow from './components/SingleRow/singlerow'
import Navbar from './components/Navbar/navbar'
import HorizontalScroller from './components/HorizontalScroller/horizontalScroller'
import Footer from './Footer/footer'
import "./app.css"
const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Singlerow/>
    <Singlerow/>
    <HorizontalScroller/>
    <Singlerow/>
    <HorizontalScroller/>
    <HorizontalScroller/>
    <HorizontalScroller/>
    <Singlerow/>
    <HorizontalScroller/>
    <HorizontalScroller/>
    <Footer/>
    </div>
    
    
  )
}

export default App