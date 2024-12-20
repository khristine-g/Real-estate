import React from 'react';
import '../TopProperties.css';
import propertyImage1 from '../images/property1.jpg';
import propertyImage2 from '../images/property2.jpg';
import propertyImage3 from '../images/property3.jpeg';
import propertyImage4 from '../images/property4.jpg';
import propertyImage5 from '../images/property5.jpg';
import propertyImage6 from '../images/property6.jpg';
import agentImage1 from '../images/agent1.jpg';
import agentImage2 from '../images/agent2.jpg';
import agentImage3 from '../images/agent3.jpeg';
import agentImage4 from '../images/agent4.jpg';
import agentImage5 from '../images/agent5.jpeg';
import agentImage6 from '../images/agent6.jpeg';

const TopProperties = () => {
  const properties = [
    {
      image: propertyImage1,
      title: 'Luxury Apartment',
      bedrooms: 3,
      bathrooms: 2,
      size: 1500,
      location: 'Kitisuru, NRB',
      price: 350000,
      agent: { image: agentImage1, name: 'Jane Doe' },
    },
    {
      image: propertyImage2,
      title: 'Modern Villa',
      bedrooms: 5,
      bathrooms: 4,
      size: 3000,
      location: 'Runda, NRB',
      price: 750000,
      agent: { image: agentImage4, name: 'John Smith' },
    },
    {
      image: propertyImage3,
      title: 'Cozy Cottage',
      bedrooms: 2,
      bathrooms: 1,
      size: 800,
      location: 'Karen, NRB',
      price: 200000,
      agent: { image: agentImage2, name: 'Emily Clark' },
    },
    {
      image: propertyImage4,
      title: 'Penthouse Suite',
      bedrooms: 4,
      bathrooms: 3,
      size: 2500,
      location: 'Muthaiga, NRB',
      price: 900000,
      agent: { image: agentImage5, name: 'Michael Brown' },
    },
    {
      image: propertyImage5,
      title: 'Family Home',
      bedrooms: 3,
      bathrooms: 2,
      size: 1800,
      location: 'Runda, NRB',
      price: 400000,
      agent: { image: agentImage3, name: 'Sarah Wilson' },
    },
    {
      image: propertyImage6,
      title: 'Urban Condo',
      bedrooms: 1,
      bathrooms: 1,
      size: 600,
      location: 'Karen, NRB',
      price: 300000,
      agent: { image: agentImage6, name: 'David Lee' },
    },
  ];

  return (
    <div className="animate-on-scroll">
    <div className="top-property">
         <h4 className="top-property-sub-title">Top Properties</h4>

         <h2 className="top-property-title">Best Property Value</h2>
      <div className="top-property-buttons">
        <button className="top-property-button active">Apartment</button>
        <button className="top-property-button">Villa</button>
        <button className="top-property-button">Studio</button>
        <button className="top-property-button">House</button>
        <button className="top-property-button">Office</button>
      </div>
     
      <div className="top-properties-grid">
        {properties.map((property, index) => (
          <div key={index} className="top-property-card">
            <img src={property.image} alt={property.title} className="top-property-image" />
            <div className="top-property-info">
              <h3 className="property-title">{property.title}</h3>
              <p className="top-property-meta">
                <i className="fas fa-bed"></i> {property.bedrooms} Beds
                <span> | </span>
                <i className="fas fa-bath"></i> {property.bathrooms} Baths
                <span> | </span>
                <i className="fas fa-expand"></i> {property.size} Sqft
              </p>
              <p className="top-property-location">
                <i className="fas fa-map-marker-alt"></i> {property.location}
              </p>
            </div>
            <hr className="top-property-divider" />
            <div className="top-agent-info">
              <img src={property.agent.image} alt={property.agent.name} className="top-agent-image" />
              <div className="top-agent-details">
                <p className="top-agent-name">{property.agent.name}</p>
                <p className="top-property-price">${property.price.toLocaleString()}</p>
              </div>
            </div>
           
          </div>
          
        ))}
      </div>
      
    </div>
              <button className="view-all-properties-button">
                     View All Properties <span className="arrow-icon">→</span>
              </button>
    </div>
  );
};

export default TopProperties;
