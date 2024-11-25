import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Properties from './Components/Properties';
import PropertyDetail from './Components/PropertyDetail';
import Contact from './Components/Contact';
import useScrollAnimation from "./Components/useScrollAnimation.js";

// import Agents from './Components/Agents';


function App() {
  useScrollAnimation(); 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/agents" element={<Agents />} /> */}
          

         
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
