import React from 'react'
import { Link } from 'react-router-dom'
import { TbUserExclamation } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import './Header.css'
import img51 from '../assets/img51.png'

const Header = () => {
  return (
    <div>
      <header>
        <div className="header container">
            <div className="header-logo">
                <img src={img51} alt="logo" />
                <h1>Furniture</h1>
            </div>
            <div className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="header-actions">
                <TbUserExclamation className='header-actions-icon' />
                <FaSearch className='header-actions-icon' />
                <FaRegHeart className='header-actions-icon' />  
                <FaCartShopping className='header-actions-icon' />
            </div>
        </div>
        </header>        
    </div>
  )
}

export default Header