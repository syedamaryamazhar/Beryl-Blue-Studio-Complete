import { useState } from 'react'
import React from 'react';
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
import CustomizePg1 from './pages/customizepg1';
import CustomizePg2 from './pages/customizepg2';
import CustomizePg3 from './pages/customizepg3';
import DoPayment from './pages/dopayment';

function App() {
  // const [current, setCurrent] = React.useState(1); 

  return (
    <div>
      <DoPayment/>
    </div>
  );
}

export default App;
