import { Route, Routes } from "react-router-dom"
import FullContact from "./Components/FullContact/FullContact"
import Header from './Header/Header'
import Footer from './Pages6/Footer'
import FullHome from "./Components/FullHome/FullHome"

const App = () => {
  return (
    <div>
      <Header />
       <Routes>
        <Route path="/" element={<FullHome />} />
        <Route path="/contact" element={<FullContact />} />
       </Routes>
        <Footer />
    </div>
  )
}

export default App
