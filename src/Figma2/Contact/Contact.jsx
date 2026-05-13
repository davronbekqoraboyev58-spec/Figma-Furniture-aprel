import React from 'react'
import img1 from "../../assets/Figma2/contact.png"
import img2 from "../../assets/Page1/headImg1.png"

import { FaChevronRight } from "react-icons/fa";

import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <div className="contact" style={{ backgroundImage: `url(${img1})` }}>
        <div className="contact1">
            <img src={img2} alt="headImg" />
            <h2>Contact</h2>
            <div className="contact2">
                <p>Home</p>
                <FaChevronRight />
                <p>Contact</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
