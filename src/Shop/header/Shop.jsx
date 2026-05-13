import React from 'react'
import ShopHeader from '../../Header!/Header'
import Main from '../Main/Main'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Footer from '../Footer/Footer'

const Shop = () => {
  return (
    <div className='shop-page'>
      <ShopHeader />
      <Main />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  )
}

export default Shop
