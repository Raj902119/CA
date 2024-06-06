import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'

// Pages
import Home from './pages/Home'
import Gallery from './pages/Gallary.jsx'
import Awards from './pages/Awards.jsx'
import Contact from './pages/Contact.jsx'
// Services
import Services from './pages/services/ServicePage'
import CAFirm from './pages/services/CaFirmService'
import LegalAdvisory from './pages/services/LegalService'
import Startup from './pages/services/StartupService'
import Investor from './pages/services/InvestorService'
import Navbar from './component/ui/Navbar'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        {/* Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/contact' element={<Contact />} />
        {/* Services */}
        <Route path='/services' element={<Services />} />
        <Route path='/services/ca' element={<CAFirm />} />
        <Route path='/services/legal' element={<LegalAdvisory />} />
        <Route path='/services/startup' element={<Startup />} />
        <Route path='/services/investor' element={<Investor />} />
      </Routes>
    </>
  )
}

export default App
