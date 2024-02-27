import Footer from "./Component/footer/Footer";
import Header from "./Component/navbar/Navbar";
import Home from "./Component/Home";
import Website from "./Component/Website";
import Teacher from "./Component/Teacher";
import Contact from "./Component/contact/Contact";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import VechicleFacility from "./Component/Vechicle_Facility";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Teacher" element={<Teacher />}></Route>
        <Route exact path="/about" element={<Website />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
        <Route exact path="/Vehicle" element={<VechicleFacility />}></Route>
      </Routes>
      <Teacher />
      <Website />
      <VechicleFacility />
      <Contact/>
      <Footer />
    </Router>
  );
}

export default App;
