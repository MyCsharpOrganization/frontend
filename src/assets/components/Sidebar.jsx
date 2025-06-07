import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Sidebar.css'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Events</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
