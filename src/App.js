import React from 'react'
import Home from './pages/home/Home'
import Navbar from './components/navigation/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Copyright from './components/copyright/Copyright'
import AllProducts from './pages/allProducts/AllProducts'
import ProductDetail from './pages/produtDetail/ProductDetail'
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy'
import NotFound from './pages/NotFound'
import AboutUs from './pages/about/AboutUs'
import ScrollToTop from './components/ScrollToTop'
import TestingComponent from './test/TestingComponent'

export default function App() {
  
  return (
    <div>
      <BrowserRouter basename='/react'>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/allproduct"  element={<AllProducts/>}/>
          <Route path="/details" element={<ProductDetail/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/testing" element={<TestingComponent/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer/> 
        <Copyright/>
      </BrowserRouter>
      
    </div>
  )
}



// https://2gear.in/react
// https://2gear.in/react/allproduct
// https://2gear.in/react/details