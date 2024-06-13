import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'

// Pages
import Home from './pages/Home'
import Gallery from './pages/Gallary.jsx'
import Contact from './pages/Contact.jsx'
import Cards from './pages/WWDCards.jsx'
import ServicePage from './pages/services/ServicePage'

//Navbar Footer
import Navbar from './component/ui/Navbar'
import Footer from './pages/Footer'
import Careers from './pages/Careers.jsx'
import Award from './pages/Award.jsx'
import About from './pages/About.jsx'
import Employee from './pages/Employee.jsx'

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
        <Route path='/about' element={<About />} />
        <Route path='/employee' element={<Employee />} />
        {/* Service */}
        <Route path='/services/:serviceName' element={<ServicePage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
