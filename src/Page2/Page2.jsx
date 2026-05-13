import React from 'react'
import img1 from "../assets/Page2/img1.png"
import img2 from "../assets/Page2/sofaImg.png"
import img3 from "../assets/Page2/bedImg.png"

import "./Page2.css"

const Page2 = () => {
  return (
    <div>
      <div className="room">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="rooms">
        <div className="room1">
          <img src={img1} alt="Dining" />
          <h3>Dining</h3>
        </div>
        <div className="room2">
          <img src={img2} alt="Living" />
          <h3>Living</h3>
        </div>
        <div className="room3">
          <img src={img3} alt="Bedroom" />
          <h3>Bedroom</h3>
        </div>
      </div>
    </div>
  )
}

export default Page2
