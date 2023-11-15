import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/burgers" className="button">Burgers</Link></li>
        <li><Link to="/side-dishes" className="button">Side Dishes</Link></li>
        <li><Link to="/drinks" className="button">Drinks</Link></li>
        <li><Link to="/support" className="button">Support</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;