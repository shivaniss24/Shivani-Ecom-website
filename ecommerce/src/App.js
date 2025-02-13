import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Mockman from "mockman-js"




const App = () => {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/mockman" element={<Mockman />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
