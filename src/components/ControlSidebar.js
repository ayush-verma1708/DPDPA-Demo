// src/components/ControlSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './ControlSidebar.css';

const controlFamilies = [
  { id: 'CF01', controls: ['C1', 'C2'] },
  { id: 'CF02', controls: ['C3', 'C4'] },
  { id: 'CF03', controls: ['C5', 'C6'] }
];

const ControlSidebar = ({ isOpen }) => {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Control Families</h2>
      {controlFamilies.map((family) => (
        <div key={family.id}>
          <h3>{family.id}</h3>
          {family.controls.map((control) => (
            <NavLink key={control} to={`/actions/${control}`}>
              {control}
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default ControlSidebar;
