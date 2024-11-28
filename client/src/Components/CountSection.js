import React, { useEffect, useState } from 'react';
import { FaBuilding, FaHome, FaSmile, FaUsers } from 'react-icons/fa';
import '../CountSection.css';

const CountSection = () => {
  const counters = [
    { id: 1, count: 850, label: 'Elegant Apartments', icon: <FaBuilding /> },
    { id: 2, count: 950, label: 'Luxury Houses', icon: <FaHome /> },
    { id: 3, count: 18000, label: 'Satisfied Guests', icon: <FaSmile /> },
    { id: 4, count: 2000, label: 'Happy Owners', icon: <FaUsers /> },
  ];

  return (
    <div className="animate-on-scroll">
   
    
    <section className="count-section">
      <div className="count-container">
        <div className="count-grid">
          {counters.map((counter) => (
            <Counter key={counter.id} count={counter.count} label={counter.label} icon={counter.icon} />
          ))}
        </div>
      
      </div>
    </section>
    </div>
    
  );
};

const Counter = ({ count, label, icon }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = count / duration * 10;

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= count) {
        setDisplayCount(count.toLocaleString());
        clearInterval(counterInterval);
      } else {
        setDisplayCount(Math.ceil(start).toLocaleString());
      }
    }, 10);

    return () => clearInterval(counterInterval);
  }, [count]);

  return (
    <div className="counter-item">
      <div className="counter-icon">{icon}</div>
      <h3 className="counter-number">{displayCount}+</h3>
      <p className="counter-label">{label}</p>
    </div>
  );
};

export default CountSection;
