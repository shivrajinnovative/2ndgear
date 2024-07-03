import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import Copyright from "./components/copyright/Copyright";
import ScrollToTop from "./components/ScrollToTop";

import AuthModals from "./modal/AuthModals";
import Home from "./pages/home/Home";
import AllProducts from "./pages/allProducts/AllProducts";
import ProductDetail from "./pages/produtDetail/ProductDetail";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import AboutUs from "./pages/about/AboutUs";
import Service from "./pages/services/Service";
import BuyerSpecific from "./pages/buyerRequirements/BuyerSpecific";
import Help from "./pages/help/Help";
import Carrer from "./pages/carrer/Carrer";
import Terms from "./pages/termsOfCondition/Terms";
import Seller from "./pages/sell/Seller";
import Blog from "./pages/blog/Blog";
import NotFound from "./pages/NotFound";
import { useDispatch } from "react-redux";
import { checkLogin } from "./store/slices/authSlice";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navigation/Navbar";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false, 
        refetchOnWindowFocus: false,
      },
    },
  });
const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(checkLogin())
  },[])

  const baseUrl = process.env.REACT_APP_BASE_URL || "/";

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter  basename={baseUrl} >
          <ScrollToTop />
          <ToastContainer />
          <Navbar />
          <AuthModals/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy/:category?/:subcategory?" element={<AllProducts type="sell" />} />
            <Route path="/rent/:category?/:subcategory?" element={<AllProducts type="rent" />} />
            <Route path="/sell" element={<Seller />} />
            <Route path="/equipment-details/:slug" element={<ProductDetail />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/blog/:slug?" element={<Blog/>} />
            <Route path="/terms-and-condition" element={<Terms />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services/:service?" element={<Service />} />
            <Route path="/buyer-specific-requirement" element={<BuyerSpecific/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/career" element={<Carrer/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
          <Footer />
          <Copyright />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}
