import React,{Suspense,lazy  } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import Copyright from "./components/copyright/Copyright";
import ScrollToTop from "./components/ScrollToTop";

const AuthModals = React.lazy(() => import("./modal/AuthModals"));
const Home = React.lazy(() => import("./pages/home/Home"));
const AllProducts = React.lazy(() => import("./pages/allProducts/AllProducts"));
const ProductDetail = React.lazy(() => import("./pages/produtDetail/ProductDetail"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacyPolicy/PrivacyPolicy"));
const AboutUs = React.lazy(() => import("./pages/about/AboutUs"));
const Service = React.lazy(() => import("./pages/services/Service"));
const BuyerSpecific = React.lazy(() => import("./pages/buyerRequirements/BuyerSpecific"));
const Help = React.lazy(() => import("./pages/help/Help"));
const Carrer = React.lazy(() => import("./pages/carrer/Carrer"));
const Terms = React.lazy(() => import("./pages/termsOfCondition/Terms"));
const Seller = React.lazy(() => import("./pages/sell/Seller"));
const Blog = React.lazy(() => import("./pages/blog/Blog"));


export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false, 
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
    },
  });

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/react">
          <ScrollToTop />
          <Navbar />
          <Suspense fallback={<div></div>}>
            <AuthModals/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buy/:category?/:subcategory?" element={<AllProducts type="buy" />} />
              <Route path="/rent/:category?/:subcategory?" element={<AllProducts type="rent" />} />
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
              <Route path="/*" element={<Home />} />
            </Routes>
          </Suspense>
          <Footer />
          <Copyright />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}