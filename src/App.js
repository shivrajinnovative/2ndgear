import React from 'react'
import Home from './pages/home/Home'
import Navbar from './components/navigation/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Copyright from './components/copyright/Copyright'
import AllProducts from './pages/allProducts/AllProducts'

export default function App() {
  
  return (
    <div>
      <BrowserRouter basename='/'>
      <Navbar/>
        <Routes>
          <Route path="/ji"  element={<Home/>}/>
          <Route path="/"  element={<AllProducts/>}/>
        </Routes>
        <Footer/> 
        <Copyright/>
      </BrowserRouter>
      
    </div>
  )
}
