// src/components/Step.js
import React from 'react';
import './Step.css';

const Step = ({ number, title, content }) => {
  return (
    <div className="step">
      <h2>Step {number}</h2>
      <h3>{title}</h3>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Step;
