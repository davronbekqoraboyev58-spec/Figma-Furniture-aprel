import React from 'react'
import img1 from "../assets/Page5/left1.png"
import img2 from "../assets/Page5/left2.png"
import img3 from "../assets/Page5/left3.png"
import img4 from "../assets/Page5/left4.png"
import img5 from "../assets/Page5/middle.png"
import img6 from "../assets/Page5/right1.png"
import img7 from "../assets/Page5/right2.png"
import img8 from "../assets/Page5/right3.png" 
import img9 from "../assets/Page5/right4.png"

import "./Page5.css"

const Page5 = () => {
  return (
    <div>
      <div className="matn">
        <h3>Share your setup with</h3>
        <h2>#FuniroFurniture</h2>
      </div>
      <div className="rasmlar">
        <div className="left">
          <div className="left1">
            <img src={img1} alt="" className='leftImg'/>
            <img src={img2} alt="" className='leftImg1'/>
          </div>
          <div className="left2">
            <img src={img3} alt="" />
            <img src={img4} alt="" className='leftImg2'/>
          </div>
        </div>
        <div className="middle">
          <img src={img5} alt="" />
        </div>
        <div className="right">
          <div className="right1">
            <img src={img6} alt="" className='rightImg1'/>
            <img src={img7} alt="" />
          </div>
          <div className="right2">
            <img src={img8} alt="" />
            <img src={img9} alt="" className='rightImg2'/>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Page5
