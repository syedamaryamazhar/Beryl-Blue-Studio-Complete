import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/Homepage'
import Productspage from './pages/Productspage'

function App() {
  return (
    <div>
      <Productspage />
    </div>
      
  )
}

export default App
