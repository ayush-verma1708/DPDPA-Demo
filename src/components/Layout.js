import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './Layout.css'; // Optional: For additional styling

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  // Handle closing sidebar when clicking outside sidebar
  const handleOutsideClick = (event) => {
    if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.hamburger')) {
      setSidebarOpen(false);
    }
  };

  // Add event listener on component mount for clicks outside sidebar
  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isSidebarOpen]);
  
  return (
    <div className={`layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
