import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/listings')
      .then(response => response.json())
      .then(data => {
        setProperties(data);
      })
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div>
      <h1 className='page-title'>Featured Properties</h1>
      <p className='page-paragraph'>Browse our latest hot offers</p>
      <div className="properties-list">
        {properties.map(property => (
          <Link key={property.id} to={`/property/${property.id}`} className="property-link">
            <div className="property-card">
              <img src={property.image} alt={property.title} />
              <div className="property-info">
                <h2 className='property-title'>{property.title}</h2>
                <h3 className="property-price">$ {property.price}</h3>
                <p>{property.bedrooms} BD</p>
                <p>{property.bathrooms} BA</p>
                <p>{property.size} Sqft</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Properties;
