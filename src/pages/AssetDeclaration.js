import React from 'react';
import logo from '../assets/logo.png'; // Update the path based on your project structure
import './AssetDeclaration.css';


const AssetDeclaration = () => {
  return (
    <div className="asset-declaration">
      <header className="asset-header">
        <img src={logo} alt="Logo" className="asset-logo" />
      </header>
      <div className="asset-body">
        <h1>Company Name</h1>
        <div className="filters">
          <button className="filter-button">Filters</button>
          <button className="filter-button">User ID</button>
          <button className="filter-button">Score</button>
          <button className="filter-button">Risk</button>
        </div>
        <div className="table-container">
          <table className="asset-table">
            <thead>
              <tr>
                <th>Users</th>
                <th>Email</th>
                <th>Permission</th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat this row as needed */}
              <tr>
                <td><input type="text" placeholder="Enter user name" /></td>
                <td><input type="email" placeholder="Enter email" /></td>
                <td><input type="text" placeholder="Enter permission" /></td>
              </tr>
            </tbody>
          </table>
          <div className="table-buttons">
            <button className="table-button add">Add</button>
            <button className="table-button edit">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDeclaration;
