import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar.jsx'
import Home from './Home/Home.jsx'
import IntakeForm from './Intake Form/IntakeForm.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  

  return (
    <>
      <Navbar />
      <IntakeForm />
      {/* <Home /> */}
      <Footer />
    </>
  )
}

export default App
