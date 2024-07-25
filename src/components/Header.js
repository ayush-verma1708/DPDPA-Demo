import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Update the path based on your project structure
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>
      <header className="asset-header">
        <img src={logo} alt="Logo" className="asset-logo" />
      </header>
      <nav className="nav">
        <Link to="/dashboard">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/policy">Policy</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
      <div className="user-info">
        <span>User ID</span>
        <span>Score</span>
        <span>Risk</span>
      </div>
    </header>
  );
};

export default Header;
