import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <main className="main-section">
      <div className="main-container">
        <section className="hero-card   ">
          <span className="hero-label">New Arrival</span>
          <h1 className="hero-titlesa">Discover Our New Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button type='button'>BUY Now!</button>
        </section>
        
        <div className="hero-preview"></div>
      </div>
    </main>
  )
}

export default Main