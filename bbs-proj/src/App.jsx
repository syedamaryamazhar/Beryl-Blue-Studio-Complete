import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
      
  )
}

export default App
