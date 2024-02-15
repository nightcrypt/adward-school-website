
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,Route,
} from 'react-router-dom' ;
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
      </Routes>
   <Footer/>
   </Router>
  );
}
// import { Form } from "react-router-dom";

export default App;
