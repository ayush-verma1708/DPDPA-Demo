// src/pages/HomePage.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ControlSidebar from '../components/ControlSidebar';
import ListOfActions from './ListOfActions';
import './HomePage.css';

const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="home-page">
        <ControlSidebar isOpen={isSidebarOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/actions/:control" element={<ListOfActions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default HomePage;
