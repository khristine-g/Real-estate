import React from "react";
import "../Agents.css";

const Agents = () => {
    return (
      <>
      <div className="agent-container">
        <h1>Our Agents</h1>
        <p>Pairing the industry's top technology with unsurpassed local expertise.</p>
        <img className="agent-image"  src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/06/GettyImages-1352105665-1440x864.jpg " alt="agents speaking" />

        <div className="agent-finder">
          <h1>Find an Agent</h1>


       <label>Location</label> <input type="text" className="search-bar" placeholder="Neighbourhood/City" />
        <input type="text" className="search-bar" placeholder="Neighbourhood/City" />
        <input type="text" className="search-bar" placeholder="Neighbourhood/City" />
       
        </div>


        
      </div>
      
      </>
    );
  };
  
  export default Agents;
  