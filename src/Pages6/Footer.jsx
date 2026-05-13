import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer1'>
      <hr />
      <div className="footer">
          <div className="raw">
            <h2>Funiro.</h2>
            <p>400 University Drive Suite 200 Coral <br />Gables, <br />
            FL 33134 USA</p>
          </div>
          <div className="raw1">
            <li className='link'>Links</li>
            <ul className='ull'>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="raw2">
            <li className='help'>Help</li>
            <ul className='ull'>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div className="raw3">
            <p className='news'>Newsletter</p>
            <div className="raw31">
              <div className="raw311">
                <p>Enter Your Email Address</p>
                <hr />
              </div>
              <div className="raw312">
                <p>SUBSCRIBE</p>
                <hr />
              </div>
            </div>
          </div>
      </div>
      <hr className='hr2' />
      <div className="rights">
        <p>2023 furino. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
