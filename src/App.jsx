import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar.jsx'
import Home from './Dashboard/Dashboard.jsx'
import IntakeForm from './Intake Form/IntakeForm.jsx'
import Footer from './Footer/Footer.jsx'
import AnimalProfile from './Animal Profile/AnimalProfile'

function App() {
  

  return (
    <>
      <Navbar />
      <IntakeForm />
      <Home />
      <AnimalProfile animalId={1} />
      <Footer />
    </>
  )
}

export default App
