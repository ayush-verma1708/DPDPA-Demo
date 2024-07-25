import React from 'react';
import Header from './Header';
import ActivityFeed from './ActivityFeed';
import ComplianceStatus from './ComplianceStatus';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <Header />
      <div className="content">
        <ActivityFeed />
        <ComplianceStatus />
      </div>
    </div>
  );
}

export default MainContent;
