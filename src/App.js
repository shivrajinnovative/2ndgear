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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App() {
  
const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter basename='/react'>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/buy/:category/"  element={<AllProducts/>}/>
          <Route path="/buy/:category/:subcategory"  element={<AllProducts/>}/>
          <Route path="/rent/*"  element={<AllProducts/>}/>
          <Route path="/sell/*"  element={<AllProducts/>}/>
          <Route path="/equipment-details/:id" element={<ProductDetail/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/testing" element={<TestingComponent/>} />
          <Route path="/*" element={<Home/>} />
        </Routes>
        <Footer/> 
        <Copyright/>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}



// https://2gear.in/react
// https://2gear.in/react/allproduct
// https://2gear.in/react/details