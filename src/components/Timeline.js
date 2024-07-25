// src/components/Timeline.js
import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="timeline-step">
          {step}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
