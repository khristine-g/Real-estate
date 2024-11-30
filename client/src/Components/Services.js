import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../Services.css';
import propertyImage7 from '../images/property7.jpg';
import propertyImage8 from '../images/property8.jpg';
import propertyImage9 from '../images/property9.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Buy A New Home',
      description: 'Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.',
      image: propertyImage7,
    },
    {
      id: 2,
      title: 'Sell a Home',
      description: 'Sell confidently with expert guidance and effective strategies, showcasing your property\'s best features for a successful sale.',
      image: propertyImage8, 
    },
    {
      id: 3,
      title: 'Rent a Home',
      description: 'Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.',
      image: propertyImage9, 
    },
  ];

  return (
    <>
    <div id="services">
    <div className="animate-on-scroll">
    <section className="services">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">What We Do?</p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div
                className="service-image"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="learn-more-btn">
                  Learn More <FaArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>
    </>
  );
};

export default Services;
