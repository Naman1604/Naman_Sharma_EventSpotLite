import React from 'react';
import './Navbar.css';

function Navbar({ searchTerm, onSearchChange }) {
  return (
    <nav className="navbar">
      <h1>EventSpot Lite</h1>
      <input 
        type="text" 
        placeholder="Search events..." 
        value={searchTerm}
        onChange={onSearchChange}
      />
    </nav>
  );
}

export default Navbar;
