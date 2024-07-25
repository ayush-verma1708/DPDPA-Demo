import React, { useState } from 'react';
import './StepsComponent.css';

const StepsComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSteps, setShowSteps] = useState(true);

  const steps = [
    {
      title: 'Step 1',
      heading: 'User Management',
      description: `User Management: Implement A Robust User Management System To Handle Different User Roles (Admin, Employee, Company).`,
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      linkUrl: '/user-management' // Replace with actual link URL
    },
    {
      title: 'Step 2',
      heading: 'Asset Declaration',
      description: `Asset Declaration: Ensure all IT assets are declared and managed efficiently.`,
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      linkUrl: '/it-assets-management' // Replace with actual link URL
    },
    {
      title: 'Step 3',
      heading: 'List of Actions',
      description: `List of Actions: Provides information on actions required to upload evidence when tasks are completed.`,
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      linkUrl: '/upload-scanned-results' // Replace with actual link URL
    },
    {
      title: 'Step 4',
      heading: 'Compliance Score Check',
      description: `Compliance Score Check: Check compliance scores and ensure all criteria are met.`,
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      linkUrl: '/compliance-score-overview' // Replace with actual link URL
    },
    {
      title: 'Step 5',
      heading: 'Alerts and Recommendations',
      description: `Alerts and Recommendations: Check for alerts and get recommendations for compliance improvements.`,
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      linkUrl: '/notification' // Replace with actual link URL
    }
  ];

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  const handleClose = () => {
    setShowSteps(false);
  };

  return (
    <>
      {showSteps && (
        <div className="steps-container">
          <div className="close-button" onClick={handleClose}>
            <button className="button">
              <span className="X"></span>
              <span className="Y"></span>
              <div className="close">Close</div>
            </button>
          </div>
          <div className="steps-header">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step ${index === currentStep ? 'active' : ''}`}
                onClick={() => setCurrentStep(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="steps-content">
            <div className="steps-text">
              <h2>{steps[currentStep].title}</h2>
              <h3>{steps[currentStep].heading}</h3>
              <p>{steps[currentStep].description}</p>
            </div>
            <div className="steps-image">
              <a href={steps[currentStep].linkUrl}>
                <img src={steps[currentStep].imageUrl} alt="Step visual" />
              </a>
            </div>
          </div>
          <div className="steps-navigation">
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
    </>
  );
};

export default StepsComponent;
