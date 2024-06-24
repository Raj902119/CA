import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
// import {BrowserRouter} from "react-router-dom";
// Pages
import Home from './pages/Home'
import Gallary from './pages/Gallary.jsx'
import Contact from './pages/Contact.jsx'
import Cards from './pages/WWDCards.jsx'
import ServicePage from './pages/services/ServicePage'

//Navbar Footer
import Navbar from './component/ui/Navbar'
import Footer from './pages/Footer'
import Careers from './pages/Careers.jsx'
import MainAchieve from './pages/MainAchieve.jsx'
import Profile from './pages/Profile.jsx'
import NewsBlogs from './pages/NewsBlogs.jsx'

function App() {
  return (
    <>
    {/* <BrowserRouter basename='/'> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallary' element={<Gallary />} />
        {/* <Route path='/award' element={<Award />} /> */}
        <Route path='/cards' element={<Cards />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<Careers />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/employee' element={<Employee />} /> */}
        <Route path='/mainachieve' element={<MainAchieve />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/newsblogs' element={<NewsBlogs />}/>
        {/* Service */}
        <Route path='/services/:serviceName' element={<ServicePage />} />
      </Routes>
      {/* Footer */}
      <Footer />
      {/* </BrowserRouter> */}
    </>
  )
}

export default App