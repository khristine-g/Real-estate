import React from 'react';
import '../Services.css';

const serviceDetails = [
  {
    title: 'Find your future home',
    description: 'We help you find a new home by offering a smart real estate experience',
  },
  {
    title: 'Experienced agents',
    description: 'Find an agent who knows your market best',
  },
  {
    title: 'Buy or rent homes',
    description: 'Millions of houses and apartments in your favourite cities',
  },
  {
    title: 'List your own property',
    description: 'Sign up now and sell or rent your own properties',
  },
];

const Services = () => {
  return (
    <div className="animate-on-scroll">
    <div className="services-container">
    <h2 className="services-page-title">Our Services</h2>
        <p className="services-intro-text">
          Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui sed posuere sem.
          Id molestie mi arcu gravida lorem potenti.
        </p>
      <img src=" https://www.mcdonaldjoneshomes.com.au/sites/default/files/inline-images/Miami-Encore-modern-interior-design-style-Lounge-Dining.jpg" alt="Services" className="services-image" />
      <div className="services-cards">
        {serviceDetails.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;
