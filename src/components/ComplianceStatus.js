import React from 'react';
import './ComplianceStatus.css';

const ComplianceStatus = () => {
  return (
    <div className="compliance-status">
      <h2>Compliance Status</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: '72%' }}>72%</div>
      </div>
      <button>View Scanned Docs</button>
    </div>
  );
}

export default ComplianceStatus;
