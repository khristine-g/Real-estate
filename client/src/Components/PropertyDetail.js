import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    console.log(`Fetching property with id: ${id}`); // Check the value of id
    fetch(`/listings/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Property data:', data);
        setProperty(data);
      })
      .catch(error => console.error('Error fetching property:', error));
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  console.log('Images:', property.images); // Log images

  return (
    <div>
    <div className="property-detail">
      <h2>{property.title}</h2>
      <h2>{property.location}</h2>
      <h2>  ${property.price}</h2>
      <p >{property.bedrooms} Bedrooms</p>
      <p>{property.bathrooms} Bathrooms</p>
      <p>{property.size} Sqft</p>
      </div>
      
      
      <div className="property-images">
      <img  className='main-property-image'src={property.image} alt={property.title} />
        {property.images && property.images.length > 0 ? (
          property.images.map((img, index) => (
            <img key={index} src={img.url} alt={`${property.title} - ${index}`} />
          ))
        ) : (
          <p>No images available</p>
        )}
      
      
      </div>
      <div className='property-overview'>
      <h2>Overview</h2>
      <p>{property.description}</p>
    
      
      <p>Agent: {property.agent}</p>
      <p>Category: {property.category}</p>
    </div>
    </div>
  );
};

export default PropertyDetail;
