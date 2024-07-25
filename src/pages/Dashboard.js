import React, { useState } from 'react';
import StepsComponent from '../components/StepsComponent';

const Dashboard = () => {
  const [showSteps, setShowSteps] = useState(true);

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={toggleSteps} style={{ float: 'right', margin: '10px' }}>
        {showSteps ? 'Hide Steps' : 'Show Steps'}
      </button>
      {showSteps && <StepsComponent />}
      {/* Other content of your Dashboard */}
    </div>
  );
};

export default Dashboard;
