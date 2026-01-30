import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { AnimalsProvider } from './AnimalsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimalsProvider>
        <App />
      </AnimalsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
