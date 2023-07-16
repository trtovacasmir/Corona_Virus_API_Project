
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import CountryStats from "./components/CountryStatus";
import CovidStats from "./components/CovidStatus";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/country" element={<CountryStats />} />
          <Route path="/covid" element={<CovidStats />} />
        </Routes>
       
      </div>
      <Footer/>
    </Router>
   
    </>
  );
}

export default App;
