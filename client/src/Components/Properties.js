// Properties.js
import React from 'react';
import { Link } from 'react-router-dom';

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
    image: 'https://d1y9xwfspocdum.cloudfront.net/story1/2246/4d2c3609329fa253d7a4e9e56b106dee8870_1280x720.jpg',
  },
];

const Properties = () => {
  return (
    <div>
      <h2>Properties</h2>
      <div className="properties-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} width="300" />
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <p>Price: ${property.price}</p>
            <Link to={`/property/${property.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBed, FaBath, FaExpand } from 'react-icons/fa';
// import '../Properties.css';

// const Properties = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     fetch('https://real-estate-2-yiyp.onrender.com/listings')
//       .then((response) => response.json())
//       .then((data) => setProperties(data))
//       .catch((error) => console.error('Error fetching properties:', error));
//   }, []);

//   return (
//     <div className="animate-on-scroll">
//     <div className="properties-container">
//       <h1 className="page-title">Featured Properties</h1>
//       <p className="page-paragraph">Browse our latest hot offers</p>
//       <div className="properties-grid">
//         {properties.map((property) => (
//           <Link
//             key={property.id}
//             to={`/property/${property.id}`}
//             className="property-link"
//           >
//             <div className="property-card">
//               <img
//                 src={property.image}
//                 alt={property.title}
//                 className="property-image"
//               />
//               <div className="property-info">
//                 <h2 className="property-title">{property.title}</h2>
               
//                 <div className="property-icons">
//                   <span>
//                     <FaBed /> {property.bedrooms} Beds
//                   </span>
//                   <span>
//                     <FaBath /> {property.bathrooms} Baths
//                   </span>
//                   <span>
//                     <FaExpand /> {property.size} Sqft
//                   </span>
//                 </div>
//                 <h3 className="property-price">$ {property.price}</h3>

//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Properties;
