import React, { useState, useEffect } from "react";
import '../Home.css';
import Properties from './Properties';
import TopProperties from "./TopProperties";
import Services from "./Services";
import CountSection from "./CountSection";
import Agents from "./Agents";
import Recommended from "./Recommended";
import Neighbourhoods from "./Neighbourhoods";
import Schedule from "./Schedule";
import Footer from "./Footer";



const Home = () => {
  const slides = [
    {
      image: 'https://images.ctfassets.net/rg5y8r6t6cjr/6OtgaBRnouvW7gdQNRtCEA/a277d04af7a42c63f8d5a418fa2d9b58/nojhproduct-moderncoastal-interior-3birdsrenovations-house14-jameshardie-198.jpg',
      text: 'Elevate Your Lifestyle Where Luxury Meets Comfort'
    },
    {
      image: 'https://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798',
  
      text: 'Discover Your Comfortable & Flexible living Space'
    },
    {
      image: 'https://st.hzcdn.com/simgs/58b1008305ae661c_14-3836/home-design.jpg',
      text: 'Experience The Harmonious Blend Of Luxury'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Slide changes every 5 seconds
    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <>
     <div id="home">
      
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h1 className="home-heading">{slide.text}</h1>
              <div className="visit-container">
                
              <button className="visit-button">
                     Schedule a Visit <span className="arrow-icon">→</span>
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    
      <Properties />
      <Recommended />
      <Neighbourhoods />
      <TopProperties />
     

      <Services />
      <CountSection />
      <Schedule />
     
      <Agents />
     
      <Footer />
    </>
  );
};

export default Home;






