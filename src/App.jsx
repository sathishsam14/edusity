import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { Programs } from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
  const[playstate,setPlaystate] = useState(false)
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle="our Program" title="What We Offer"/>
      <Programs/>
      <About setPlaystate = {setPlaystate}/>
      <Title subTitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subTitle="TESTIMONIALS" title="What Student Says"/>
      <Testimonials/>
      <Title subTitle="Contact US" title="Get in Touch"/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playstate={playstate} setPlaystate={setPlaystate}/>
    </div>
  )
}

export default App