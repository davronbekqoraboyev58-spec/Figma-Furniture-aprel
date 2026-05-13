import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./Header!/Header"
import Main from "./Header!/Main/Main"
import Product from "./Header!/Product/Product"
import Section from "./Header!/Section/Section"
import Section3 from "./Header!/Section3/Section3"
import Section4 from "./Header!/Section3/Section4/Section4"
import Footer from "./Header!/Footer/Footer"
import Shop from "./Shop/header/Shop"
import AboutHeader from "./About/AboutHeader/AboutHeader"
import Checkout from "./About/Checkout/Checkout"
import Contact from "./Contact/Contact"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutHeader />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  )
} 

export default App  