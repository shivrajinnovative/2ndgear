import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Copyright from "./components/copyright/Copyright";
import AllProducts from "./pages/allProducts/AllProducts";
import ProductDetail from "./pages/produtDetail/ProductDetail";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import AboutUs from "./pages/about/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import TestingComponent from "./test/TestingComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Service from "./pages/services/Service";
import BuyerSpecific from "./pages/buyerRequirements/BuyerSpecific";
import Help from "./pages/help/Help";
import Carrer from "./pages/carrer/Carrer";
import AuthModals from "./modal/AuthModals";
import Terms from "./pages/termsOfCondition/Terms";
import Seller from "./pages/sell/Seller";
import Blog from "./pages/blog/Blog";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/react">
          <ScrollToTop />
          <Navbar />
          <AuthModals/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy/:category/" element={<AllProducts />} />
            <Route
              path="/buy/:category/:subcategmory"
              element={<AllProducts />}
            />
            <Route path="/rent/*" element={<AllProducts />} />
            <Route path="/sell" element={<Seller />} />
            <Route path="/equipment-details/:id" element={<ProductDetail />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/blog/:slug?" element={<Blog/>} />
            <Route path="/terms-and-condition" element={<Terms />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services/:service" element={<Service />} />
            <Route path="/buyer-specific-requirement" element={<BuyerSpecific/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/career" element={<Carrer/>} />
            <Route path="/testing" element={<TestingComponent />} />
            <Route path="/*" element={<Home />} />
          </Routes>
          <Footer />
          
          <Copyright />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}