import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Agents.css";
import { motion } from 'framer-motion';

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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
      <motion.h1
        className="agent-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Professional Agents
      </motion.h1>
      <motion.p
        className="agent-paragraph"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        We pair the industry's top technology with unmatched local expertise to bring you the best real estate experience.
      </motion.p>

      

      <motion.h2
        className="team-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Meet The Awesome Team
      </motion.h2>
      <motion.p
        className="team-paragraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Realar makes it easy to connect with the best agents in the business. Whether you're buying, selling, or renting, we've got you covered.
      </motion.p>

      <div className="agents-list">
        {agents.map((agent) => (
          <motion.div
            key={agent.id}
            className="agent-card"
            onClick={() => viewAgentDetails(agent.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: agent.id * 0.1 }}
          >
            <img src={agent.image} alt={agent.name} className="agent-photo" />
            <h3 className='agent-content'>{agent.name}</h3>
            <p className='agent-content'>{agent.email}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
