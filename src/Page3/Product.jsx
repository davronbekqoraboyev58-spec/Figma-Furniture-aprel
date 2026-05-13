import React from 'react'
import img1 from "../assets/Page3/img1.png"
import img2 from "../assets/Page3/img2.png"
import img3 from "../assets/Page3/img3.png"
import img4 from "../assets/Page3/img4.png"
import img5 from "../assets/Page3/img5.png"
import img6 from "../assets/Page3/img6.png"
import img7 from "../assets/Page3/img7.png"
import img8 from "../assets/Page3/img8.png"

import "./Product.css"

const Product = () => {
  return (
    <div className='OurProducts'>
        <h2>Our Products</h2>
      <div className="products">
        <div className="product1">
            <img src={img1} alt="" />
            <h3>Syltherine</h3>
            <p className='h3'>Stylish cafe chair</p>
            <div className="pp">
                <p>Rp 2.500.000</p> 
                <p className='ppp'>Rp 3.500.000</p>
            </div>
        </div>
        <div className="product2">
            <img src={img2} alt="" />
            <h3>Leviosa</h3>
            <p className='h3'>Stylish cafe chair</p>
            <div className="pp">
                <p>Rp 2.500.000</p>
            </div>
        </div>
        <div className="product3">
            <img src={img3} alt="" />
            <h3 >Lolito</h3>
            <p className='h3'>Luxury big sofa</p>
            <div className="pp">
                <p>Rp 7.000.000</p> <p  className='ppp'>Rp 14.000.000</p>
            </div>
        </div>
        <div className="product4">
            <img src={img4} alt="" />
            <h3 >Respira</h3>
            <p className='h3'>Outdoor bar table and stool</p>
            <div className="pp">
                <p>Rp 500.000</p>
            </div>
        </div>
        <div className="product5">
            <img src={img5} alt="" />
            <h3>Grifo</h3>
            <p className='h3'>Night lamp</p>
            <div className="pp">
                <p>Rp 1.500.000</p>
            </div>
        </div>
        <div className="product6">
            <img src={img6} alt="" />
            <h3 >Muggo</h3>
            <p className='h3'>Small mug</p>
            <div className="pp">
                <p>Rp 150.000</p>
            </div>
        </div>
        <div className="product7">
            <img src={img7} alt="" />
            <h3>Pingky</h3>
            <p className='h3'>Cute bed set</p>
            <div className="pp">
                <p>Rp 7.000.000</p> <p className='ppp'>Rp 14.000.000</p>
            </div>
        </div>
        <div className="product8">
            <img src={img8} alt="" />
            <h3>Potty</h3>
            <p className='h3'>Minimalist flower pot</p>
            <div className="pp">
                <p>Rp 500.000</p>
            </div>
        </div>
      </div>
      <div className="showbtn">
        <button>Show More</button>
      </div>
    </div>
  )
}

export default Product
