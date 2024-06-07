import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'

// Pages
import Home from './pages/Home'
import Gallery from './pages/Gallary.jsx'
import Award from './pages/Award.jsx'
import Contact from './pages/Contact.jsx'
import Cards from './pages/Cards.jsx'
// Services
import Services from './pages/services/ServicePage'
import CAFirm from './pages/services/CaFirmService'
import LegalAdvisory from './pages/services/LegalService'
import Startup from './pages/services/StartupService'
import Investor from './pages/services/InvestorService'

//Navbar Footer
import Navbar from './component/ui/Navbar'
import Footer from './pages/Footer'
// import Award from './pages/Award.jsx'

//
function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}
      <Routes>
        {/* Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/award' element={<Award/>} />
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/contact' element={<Contact />} />
        {/* Service */}
        <Route path='/services' element={<Services />} />
        <Route path='/services/ca' element={<CAFirm />} />
        <Route path='/services/legal' element={<LegalAdvisory />} />
        <Route path='/services/startup' element={<Startup />} />
        <Route path='/services/investor' element={<Investor />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
