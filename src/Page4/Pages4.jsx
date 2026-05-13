import React from 'react'
import img1 from  "../assets/Page4/img1.png"
import img2 from "../assets/Page4/img2.png"
import img3 from "../assets/Page4/img3.png"

import { BsArrowRight } from "react-icons/bs";

import "./Pages4.css"

const Pages4 = () => {
  return (
    <div className='cards'>
      <div className="card1">
        <h2>50+ Beautiful rooms <br />inspiration</h2>
        <p>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
        <button>Explore More</button>
      </div>
      <div className="card2" style={{backgroundImage: `url(${img1})`}}>
          <div className="card21">
             <div className="card211">
                <p>01 <hr /> Bed Room</p>
             </div>
             <h3>Inner Peace</h3>
          </div>
          <button> <BsArrowRight /> </button>
      </div>
      <div className="card3">
          <img src={img2} alt="img2" />
          <div className="card31">
            <button className='btns'><button></button></button>
            <button className='btn1'></button>
            <button className='btn2'></button>
            <button className='btn3'></button>
          </div>
      </div>
      <div className="card4">
          <img src={img3} alt="img3" />
      </div>
    </div>
  )
}

export default Pages4
