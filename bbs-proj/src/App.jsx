import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/Homepage'
import Productspage from './pages/Productspage'
import ProductDetail from './pages/Productdetail'
import About from './pages/About'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Cart/>
    </div>
      
  )
}

export default App;
