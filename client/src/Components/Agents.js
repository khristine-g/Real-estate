import React from 'react';
import '../Agents.css';
import agentImage1 from '../images/agent1.jpg';
import agentImage2 from '../images/agent2.jpg';
import agentImage3 from '../images/agent3.jpeg';

const agents = [
  {
    image: agentImage1,
    name: 'Leah Clement',
    title: 'Senior Real Estate Agent',
    contact: 'janedoe@example.com',
  },
  {
    image: agentImage2,
    name: 'Tina Smith',
    title: 'Real Estate Agent',
    contact: 'johnsmith@example.com',
  },
  {
    image: agentImage3,
    name: 'Emily Clark',
    title: 'Property Consultant',
    contact: 'emilyclark@example.com',
  },
  
];

const Agents = () => {
  return (
    <div id="agents">
    <div className="animate-on-scroll">
    <div className="agents-container">
      <h2 className="agents-sub-title">Team Members</h2>

      <h2 className="agents-title">Meet Our Agents</h2>
      <div className="agents-grid">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <div className="agent-image-container">
              <img src={agent.image} alt={agent.name} className="agent-image" />
              <div className="social-icons">
                <a href={`https://facebook.com/${agent.name}`} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={`https://twitter.com/${agent.name}`} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={`https://linkedin.com/in/${agent.name}`} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="agent-info">
              <h3 className="agent-name">{agent.name}</h3>
              <p className="agent-title">{agent.title}</p>
              <div className="contact-info">
                <a href={`mailto:${agent.contact}`} className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href={`tel:${agent.contact}`} className="contact-icon">
                  <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Agents;
