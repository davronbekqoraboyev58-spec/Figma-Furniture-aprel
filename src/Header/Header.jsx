import React from 'react'
import img1 from "../assets/Page1/headImg1.png"
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="head1">
        <img src={img1} alt="headImg1" />
        <h2>Furniro</h2>
      </div>
      <div className="head2">
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className="head3">
        
      </div>
    </div>
  )
}

export default Header
