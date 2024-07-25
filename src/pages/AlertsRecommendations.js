// src/pages/AlertsRecommendations.js
import React from 'react';

const AlertsRecommendations = () => {
  return (
    <div>
           <div className="hamburger-menu" onClick={() => document.querySelector('.sidebar').classList.toggle('active')}>
        &#9776;
      </div>
      <h1>Alerts & Recommendations</h1>
      <p>Check alerts and recommendations here.</p>
    </div>
  );
};

export default AlertsRecommendations;
