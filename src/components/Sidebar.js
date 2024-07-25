import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/upload-scanned-results">Upload Scanned Results</Link>
      <Link to="/it-assets-management">IT Assets Management</Link>
      <Link to="/compliance-configuration">Compliance Configuration</Link>
      <Link to="/compliance-score-overview">Compliance Score Overview</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/evidence-repository">Evidence Repository</Link>
      <Link to="/user-management">User Management</Link>
      <Link to="/notification">Notification</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Sidebar;
