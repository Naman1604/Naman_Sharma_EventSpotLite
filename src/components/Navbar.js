import React from 'react';
import './Navbar.css';

function Navbar({ searchName, searchLocation, onNameChange, onLocationChange }) {
  return (
    <nav className="navbar animate__animated animate__slideInDown">
      <h1>EventSpot Lite</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchName}
          onChange={onNameChange}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Search by location..."
          value={searchLocation}
          onChange={onLocationChange}
          className="search-input"
        />
      </div>
    </nav>
  );
}

export default Navbar;
