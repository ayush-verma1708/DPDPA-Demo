// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import About from './pages/about';
import Policy from './pages/Policy';
import ContactUs from './pages/ContactUs';
import UploadScannedResults from './pages/UploadScannedResults';
import ITAssetsManagement from './pages/ITAssetsManagement';
import ComplianceConfiguration from './pages/ComplianceConfiguration';
import ComplianceScoreOverview from './pages/ComplianceScoreOverview';
import Reports from './pages/Reports';
import EvidenceRepository from './pages/EvidenceRepository';
import UserManagement from './pages/UserManagement';
import Notification from './pages/Notification';
import Settings from './pages/Settings';
import StepsComponent from './components/StepsComponent';
import ListOfActions from './pages/ListOfActions';
import ControlSidebar from './components/ControlSidebar';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><StepsComponent /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/upload-scanned-results" element={<Layout><UploadScannedResults /></Layout>} />
        <Route path="/it-assets-management" element={<Layout><ITAssetsManagement /></Layout>} />
        <Route path="/compliance-configuration" element={<Layout><ComplianceConfiguration /></Layout>} />
        <Route path="/compliance-score-overview" element={<Layout><ComplianceScoreOverview /></Layout>} />
        <Route path="/reports" element={<Layout><Reports /></Layout>} />
        <Route path="/evidence-repository" element={<Layout><EvidenceRepository /></Layout>} />
        <Route path="/user-management" element={<Layout><UserManagement /></Layout>} />
        <Route path="/notification" element={<Layout><Notification /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/policy" element={<Layout><Policy /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
        <Route path="/actions/:control" element={
          <Layout>
            <div className="d-flex">
              <ControlSidebar />
              <ListOfActions />
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
