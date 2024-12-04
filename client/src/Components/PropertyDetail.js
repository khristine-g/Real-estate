// PropertyDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

// Sample data for properties
const properties = [
  {
    id: 1,
    title: 'Autumn Breeze Estate',
    location: 'Karen',
    price: 200000,
    bedrooms: 4,
    bathrooms: 2,
    size: 900,
    description: 'A beautiful, spacious estate with modern amenities...',
    image: 'https://en.idei.club/uploads/posts/2023-12/1703234923_en-idei-club-p-beautiful-small-modern-homes-dizain-intere-5.jpg',
  },
  {
    id: 2,
    title: 'Alpine Zenith Chateau',
    location: 'Muthaiga',
    price: 150000,
    bedrooms: 3,
    bathrooms: 2,
    size: 1200,
    description: 'A luxurious chateau located in a prime location...',
    image: 'https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg',
  },
  {
    id: 3,
    title: 'Luxury Villa',
    location: 'Diani',
    price: 400000,
    bedrooms: 5,
    bathrooms: 4,
    size: 5000,
    description: 'A luxury villa with stunning ocean views...',
    image: 'https://architecturebeast.com/wp-content/uploads/2014/09/Most_Beautiful_Houses_In_The_World_House_M_featured_on_architecture_beast_36.jpg',
  },
  {
    id: 4,
    title: 'Amberwood Haven',
    location: 'Runda',
    price: 350000,
    bedrooms: 5,
    bathrooms: 3,
    size: 2000,
    description: 'Elegant and modern, perfect for families...',
    image: 'https://d1y9xwfspocdum.cloudfront.net/story1/2246/4d2c3609329fa253d7a4e9e56b106dee8870_1280x720.jpg',
  },
];

const PropertyDetail = () => {
  const { id } = useParams();  // Get the property ID from the URL
  const property = properties.find((property) => property.id === parseInt(id));

  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <div>
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} width="500" />
      <p>{property.description}</p>
      <p>Location: {property.location}</p>
      <p>Price: ${property.price}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Size: {property.size} sqft</p>
    </div>
  );
};

export default PropertyDetail;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import '../PropertyDetail.css';

// const PropertyDetail = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);

//   useEffect(() => {
//     fetch(`https://real-estate-2-yiyp.onrender.com/listings/${id}`)
//       .then(response => response.json())
//       .then(data => setProperty(data))
//       .catch(error => console.error('Error fetching property:', error));
//   }, [id]);

//   if (!property) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="property-detail">
//       <div className="property-header">
//         <div className="property-title-price">
//           <h1 style={{color:"black"}}>{property.title} </h1>
//           <h2 style={{color:"black"}}>${property.price}</h2>
//         </div>
//         <hr className="header-divider" />
//         <div className="property-meta">
//           <p>
//             <i className="fas fa-bed"></i> {property.bedrooms} Bedrooms
//           </p>
//           <p>
//             <i className="fas fa-bath"></i> {property.bathrooms} Bathrooms
//           </p>
//           <p>
//             <i className="fas fa-expand"></i> {property.size} Sqft
//           </p>
//           <p>
//             <i className="fas fa-map-marker-alt"></i> {property.location}
//           </p>
//         </div>
//       </div>

//       <div className="property-images">
//         <img className="main-property-image" src={property.image} alt={property.title} />
//         {property.images?.length > 0 ? (
//           property.images.map((img, index) => (
//             <img key={index} src={img.url} alt={`${property.title} - ${index}`} />
//           ))
//         ) : (
//           <p>No images available</p>
//         )}
//       </div>

//       <div className="property-overview">
//         <h2>Overview</h2>
//         <p>{property.description}</p>
//         <p>Category: {property.category}</p>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;
