import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../AgentDetail.css';

const AgentDetail = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/agents/${id}`)
      .then(response => response.json())
      .then(data => setAgent(data))
      .catch(error => console.error('Error fetching agent details:', error));
  }, [id]);

  if (!agent) {
    return <div>Loading agent details...</div>;
  }

  return (
    <div className="agent-detail">
      <img src={agent.image} alt={agent.name} className="agent-photo-large" />
      <h1>{agent.name}</h1>
      <p><strong>Email:</strong> {agent.email}</p>
      <p><strong>Phone:</strong> {agent.phone}</p>
      <p><strong>About:</strong> {agent.about}</p>
    
    </div>
  );
};

export default AgentDetail;
