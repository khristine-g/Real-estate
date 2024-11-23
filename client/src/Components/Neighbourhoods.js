import React from 'react';
import '../Neighbourhoods.css';

const neighbourhoods = [
  { id: 1, name: "Sunny Heights", description: "A peaceful community with scenic views.", image: "https://media.california.com/media/_versions_jpg/articles/richest_neighborhoods_in_america__5443x3167____v1222x580__.jpg" },
  { id: 2, name: "Green Acres", description: "Spacious homes surrounded by nature.", image: "https://media.california.com/media/_versions_jpg/articlecomponent/short_hills_new_jersey__1000x667____v1220x__.jpg" },
  { id: 3, name: "Downtown Bliss", description: "Vibrant and modern city living.", image: "https://blog.sothebysrealty.co.uk/hubfs/Richest%20Neighbourhoods%20in%20London-jpg.jpeg" },
  { id: 4, name: "Hillside Haven", description: "A serene and quiet retreat on the hillside.", image: "https://koala.sh/api/image/v2-hysgx-ougt8.jpg?width=1216&height=832&dream" },
  { id: 5, name: "Ocean Breeze", description: "Coastal living with stunning ocean views.", image: "https://koala.sh/api/image/v2-k4cfh-u3zlm.jpg?width=1216&height=832&dream" },
  { id: 6, name: "Urban Oasis", description: "A perfect blend of city life and nature.", image: "https://koala.sh/api/image/v2-k4cgg-bbffq.jpg?width=1216&height=832&dream" }
];

const Neighbourhoods = () => {
  return (
    <div className="animate-on-scroll">
    <div className="neighbourhoods-container">
      <div className="intro">
        <h2 className="page-title">Our Neighbourhoods</h2>
        <p className="intro-text">
          Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui sed posuere sem.
          Id molestie mi arcu gravida lorem potenti.
        </p>
      </div>

      {/* Neighbourhood Grid */}
     
      <div className="neighbourhood-grid">
        {neighbourhoods.map((neighbourhood) => (
          <div className="neighbourhood-item" key={neighbourhood.id}>
            <div
              className="neighbourhood-image"
              style={{ backgroundImage: `url(${neighbourhood.image})` }}
            >
              <div className="neighbourhood-caption">
                <h3 className="neighbourhood-title">{neighbourhood.name}</h3>
                <p className="neighbourhood-description">{neighbourhood.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Neighbourhoods;
