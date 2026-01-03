import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
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
import OrderConfirm from './pages/orderconfirmation';
import Header from "./components/header";
import Footer from "./components/footer"

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/customizepg1" element={<CustomizePg1 />} />
        <Route path="/customizepg2" element={<CustomizePg2 />} />
        <Route path="/customizepg3" element={<CustomizePg3 />} />
        <Route path="/dopayment" element={<DoPayment />} />
        <Route path="/orderconfirmation" element={<OrderConfirm />} />
        <Route path="/" element={<Home />}/>
        <Route path="/Productspage" element={<Productspage />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
