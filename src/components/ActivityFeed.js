import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      <div className="activity-item">@XYZ uploaded results</div>
      <div className="activity-item">Scan Completed For Website</div>
      <div className="activity-item">Compliance Report Generated</div>
    </div>
  );
}

export default ActivityFeed;
