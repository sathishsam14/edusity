import React from 'react'
import "./Campus.css"
import gallery_1 from "../../assets/gallery-1.png"
import gallery_2 from "../../assets/gallery-2.png"
import gallery_3 from "../../assets/gallery-3.png"
import gallery_4 from "../../assets/gallery-4.png"
import White_arrow from "../../assets/white-arrow.png"

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
        <img src={gallery_1} alt=""/>    
        <img src={gallery_2} alt=""/>  
        <img src={gallery_3} alt=""/>  
        <img src={gallery_4} alt=""/>  
        </div>
<button className='btn dark-btn'>see more <img src={White_arrow} alt=""/></button>
    </div>
  )
}

export default Campus