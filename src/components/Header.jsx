// src/components/Header.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">
            <img src="/images/logo.png" alt="GP Summit Logo" />
            <div className="logo-text">
              <h1>{data.projectTitle}</h1>
              <span>{data.projectSubtitle}</span>
            </div>
          </NavLink>
        </div>
        <button 
          className="mobile-nav-toggle" 
          aria-label="Toggle navigation" 
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/timeline" onClick={() => setMenuOpen(false)}>Timeline</NavLink></li>
            <li><NavLink to="/research" onClick={() => setMenuOpen(false)}>Research</NavLink></li>
            <li><NavLink to="/action" onClick={() => setMenuOpen(false)}>Action</NavLink></li>
            <li><NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact & Advisors</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;