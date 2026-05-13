import React from 'react'
import Header from '../../Header!/Header'
import AboutHEders from '../AboutHEders/AboutHEders'
import AboutMain from '../AboutMain/AboutMain'
import AboutSection from '../AboutSection/AboutSection'
import AboutProduct from '../AboutProduct/AboutProduct'
import Footer from '../../Header!/Footer/Footer'

const AboutHeader = () => {
  return (
    <div>
      <Header />
      <AboutHEders />
      <div className='container'>
        <AboutMain />
      </div>
      <div className='container'>
        <AboutSection />
      </div>
      <AboutProduct />
      <Footer />
    </div>
  )
}

export default AboutHeader
