import React from 'react'
import img1 from "../assets/Page1/headImg1.png"

import { FiUserCheck } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";

import "./Header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="head1">
        <img src={img1} alt="headImg1" />
        <h2>Furniro</h2>
      </div>
      <div className="head2">
        <ul>
          <NavLink to="/">Home</NavLink>
          <li>Shop</li>
          <li>About</li>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </div>
      <div className="head3">
          <FiUserCheck className='icon'/>
          <RiSearchLine className='icon'/>
          <GoHeart className='icon'/>
          <HiOutlineShoppingCart className='icon'/>
      </div>
    </div>
  )
}

export default Header
