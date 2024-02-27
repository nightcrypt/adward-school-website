
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Website from './Component/Website';
import Teacher from './Component/Teacher';
import Contact from './Components/contact/Contact';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,Route,
} from 'react-router-dom' ;
import './App.css';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route 
        exact
        path="/"
        element={<Home/>}
      ></Route>
      <Route 
        exact
        path="/"
        element={<Teacher/>}
      ></Route>
      <Route 
        exact
        path="/"
        element={<Website/>}
      ></Route>
      <Route 
        exact
        path="/"
        element={<Contact/>}
      ></Route>
    </Routes>
 <Footer/>
 </Router>
  );
}
// import { Form } from "react-router-dom";

export default App;
