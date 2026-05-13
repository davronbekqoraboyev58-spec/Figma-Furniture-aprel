import React from 'react'
import img1 from "../assets/Page1/main.png"
import "./Main.css"

const Main = () => {
  return (
    <div>
      <div className="main" style={{ backgroundImage: `url(${img1})` }}>
        <div className="main1">
          <div className="card">
            <h3>New Arrival</h3>
            <h2>Discover Our <br />New Collection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />elit tellus, luctus nec ullamcorper mattis.</p>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
