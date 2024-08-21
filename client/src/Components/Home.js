import React from "react";
import '../Home.css';
import Properties from './Properties';
import Services from "./Services";
import Agents from "./Agents";

const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="image-container">
        <img className="home-img" src="https://images.ctfassets.net/rg5y8r6t6cjr/6OtgaBRnouvW7gdQNRtCEA/a277d04af7a42c63f8d5a418fa2d9b58/nojhproduct-moderncoastal-interior-3birdsrenovations-house14-jameshardie-198.jpg" alt="house interior" />
        <div className="overlay">
          <h1 className="home-heading">Find Your Future Home</h1>
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search for a home..." />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>
    <Properties />
    <Services />
    <Agents />
    </>
  );
};

export default Home;







