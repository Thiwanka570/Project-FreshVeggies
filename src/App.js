import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/MainNavbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ItemPage from "./pages/ItemPage";
import OrderPage from "./pages/OrderPage";
import Footer from "./component/Footer";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/order/:itemId" element={<OrderPage />} />
       <Route path="/items/:category" element={ItemPage} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
