import React from 'react'
import './Section.css'
import img54 from '../../assets/img54.png'

const Section = () => {
  return (
    <section>
      <div className="section-container">
        <div className="section-content">
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="section-image">
          <div>
            <img src={img54} alt="Dining" />
            <h3>Dining</h3>
          </div>
          <div>
            <img src={img54} alt="Living" />
            <h3>Living</h3>
          </div>
          <div>
            <img src={img54} alt="Bedroom" />
            <h3>Bedroom</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section