import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import IntakeForm from './Intake Form/IntakeForm.jsx'
import Footer from './Footer/Footer.jsx'
import AnimalProfile from './Animal Profile/AnimalProfile'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/intake-form" element={<IntakeForm />} />
        <Route path="/animals/:animalId" element={<AnimalProfile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
