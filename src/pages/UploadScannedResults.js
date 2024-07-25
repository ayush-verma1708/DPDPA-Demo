// src/pages/ListOfActions.js
import React from 'react';
import { useParams } from 'react-router-dom';
// import './ListOfActions.css';

const actions = {
  C1: [
    { sno: 1, action: 'MFA Implementation', criticality: 'Critical', dueDate: '01-01-2024', status: 'Completed', evidence: true },
    { sno: 2, action: 'Access Control List Update', criticality: 'High', dueDate: '05-01-2024', status: 'Hold', evidence: false },
    { sno: 3, action: 'User Access Review', criticality: 'Mid', dueDate: '01-02-2024', status: 'Delegate', evidence: false },
    { sno: 4, action: 'SIEM System Configuration', criticality: 'Low', dueDate: '10-01-2024', status: 'Disable', evidence: false },
  ],
  C2: [
    // Add actions for C2
  ],
  // Add actions for other controls
};

const ListOfActions = () => {
  const { control } = useParams();
  const controlActions = actions[control] || [];

  return (
    <div>
      <h1>List of Actions for {control}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Actions</th>
            <th>Criticality</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Evidence</th>
          </tr>
        </thead>
        <tbody>
          {controlActions.map((action) => (
            <tr key={action.sno}>
              <td>{action.sno}</td>
              <td>{action.action}</td>
              <td>{action.criticality}</td>
              <td>{action.dueDate}</td>
              <td>{action.status}</td>
              <td>
                {action.evidence ? (
                  <button className="btn btn-success">Upload</button>
                ) : (
                  <button className="btn btn-danger" disabled>Upload</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfActions;
