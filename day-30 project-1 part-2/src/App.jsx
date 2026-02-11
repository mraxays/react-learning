import React from "react";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Footer from "./components/Footer";
import Create from "./components/Create";

function App() {
  return (
    // SideBar & Main
    <>
      <Header />
      <ScrollToTop /> {/* Scroll to top on route change */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
