import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'

// Pages
import Home from './pages/Home'
import Gallery from './pages/Gallary.jsx'
// import Award from './pages/Award.jsx'
import Contact from './pages/Contact.jsx'
import Cards from './pages/WWDCards.jsx'
// Services
import Services from './pages/services/ServicePage'
import CAFirm from './pages/services/CafirmServices/CaFirmService.jsx'
import LegalAdvisory from './pages/services/LegalServices/LegalService.jsx'
import Startup from './pages/services/StartupServices/StartupService.jsx'
import Investor from './pages/services/InvestorServices/InvestorService.jsx'

//Navbar Footer
import Navbar from './component/ui/Navbar'
import Footer from './pages/Footer'
import Careers from './pages/Careers.jsx'
import Award from './pages/Award.jsx'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/award' element={<Award />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<Careers />} />
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
