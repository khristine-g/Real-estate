import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Agents.css";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch agents from the API
    fetch('http://localhost:3000/agents')
      .then(response => response.json())
      .then(data => setAgents(data))
      .catch(error => console.error('Error fetching agents:', error));
  }, []);

  const viewAgentDetails = (id) => {
    navigate(`/agents/${id}`);
  };

  return (
    <div className="agent-container">
      <h1 className='agent-header'>Our Agents</h1>
      <p className='agent-paragraph'> Pairing the industry's top technology with unsurpassed local expertise.</p>
      <div  className='agent-image-container'>
      <img className="agent-image" src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/06/GettyImages-1352105665-1440x864.jpg" alt="agents speaking" />
     
      <h1 className='agent-finder-header'>Find an Agent</h1>
      </div>
    
      <div className="agent-finder">
  
        <label>Location
          <input type="text" className="search-bar" placeholder="Neighbourhood/City" />
        </label>
     
        <label>Name 
          <input type="text" className="search-bar" placeholder="Agent name" />
        </label> 
      
        <label>Service needed
          <select className="search-bar">
            <option value="">Select service</option>
            <option value="selling">Selling a property</option>
            <option value="buying">Buying a property</option>
            <option value="renting">Renting a property</option>
          </select>
        </label>
   
   
      </div>
      

      <div className="agents-list">
        {agents.map(agent => (
          <div key={agent.id} className="agent-card" onClick={() => viewAgentDetails(agent.id)}>
            <img src={agent.image} alt={agent.name} className="agent-photo" />
            <h3>{agent.name}</h3>
            <p>{agent.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
