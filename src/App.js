import React from 'react'
import Home from './pages/home/Home'
import Navbar from './components/navigation/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Copyright from './components/copyright/Copyright'
import AllProducts from './pages/allProducts/AllProducts'
import ProductDetail from './pages/produtDetail/ProductDetail'

export default function App() {
  
  return (
    <div>
      <BrowserRouter basename='/react'>
      <Navbar/>
        <Routes>
          <Route path="/s"  element={<Home/>}/>
          <Route path="/s"  element={<AllProducts/>}/>
          <Route path="/" element={<ProductDetail/>} />
        </Routes>
        <Footer/> 
        <Copyright/>
      </BrowserRouter>
      
    </div>
  )
}
