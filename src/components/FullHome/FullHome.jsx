import React from 'react'
import Header from '../../Header!/Header'
import Main from '../../Header!/Main/Main'
import Section from '../../Header!/Section/Section'
import Product from '../../Header!/Product/Product'
import Section3 from '../../Header!/Section3/Section3'
import Section4 from '../../Header!/Section3/Section4/Section4'
import Footer from '../../Header!/Footer/Footer'



const FullHome = () => {
  return (
    <div>
        <Header />
        <Main/>
        <Section />
        <Product />
        <Section3 />
        <Section4 />
        <Footer />
    </div> 
  )
}

export default FullHome