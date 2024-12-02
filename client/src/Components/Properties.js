import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaExpand } from 'react-icons/fa';
import '../Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/listings')
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div className="animate-on-scroll">
    <div className="properties-container">
      <h1 className="page-title">Featured Properties</h1>
      <p className="page-paragraph">Browse our latest hot offers</p>
      <div className="properties-grid">
        {properties.map((property) => (
          <Link
            key={property.id}
            to={`/property/${property.id}`}
            className="property-link"
          >
            <div className="property-card">
              <img
                src={property.image}
                alt={property.title}
                className="property-image"
              />
              <div className="property-info">
                <h2 className="property-title">{property.title}</h2>
               
                <div className="property-icons">
                  <span>
                    <FaBed /> {property.bedrooms} Beds
                  </span>
                  <span>
                    <FaBath /> {property.bathrooms} Baths
                  </span>
                  <span>
                    <FaExpand /> {property.size} Sqft
                  </span>
                </div>
                <h3 className="property-price">$ {property.price}</h3>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Properties;
