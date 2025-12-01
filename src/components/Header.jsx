import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu} style={{display:'flex', alignItems:'center'}}>
            <img src="/images/logo.png" alt="Logo" /> 
            <div className="logo-text">
              <h1>BRIDGE TO KNOWLEDGE</h1>
            </div>
          </Link>
        </div>

        {/* RIGHT SIDE CONTROLS */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          
          {/* DESKTOP NAV */}
          <nav className="nav-menu">
            <ul>
              <li><Link to="/" className={isActive('/')}>Home</Link></li>
              <li><Link to="/about" className={isActive('/about')}>About</Link></li>
              <li><Link to="/timeline" className={isActive('/timeline')}>Timeline</Link></li>
              <li><Link to="/action" className={isActive('/action')}>Action</Link></li>
              <li><Link to="/research" className={isActive('/research')}>Research</Link></li>
              <li><Link to="/gallery" className={isActive('/gallery')}>Gallery</Link></li>
              <li><Link to="/analytics" className={isActive('/analytics')}>Analytics</Link></li>
              <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
            </ul>
          </nav>
          
          {/* THEME TOGGLE */}
          <button onClick={toggleTheme} className="theme-toggle" title="Switch Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* HAMBURGER (Mobile Only) */}
          <label className="burger" htmlFor="burger-check">
            <input 
              type="checkbox" 
              id="burger-check" 
              checked={isOpen} 
              onChange={() => setIsOpen(!isOpen)} 
            />
            <span></span>
            <span></span>
            <span></span>
          </label>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/timeline" onClick={closeMenu}>Timeline</Link>
        <Link to="/action" onClick={closeMenu}>Action</Link>
        <Link to="/research" onClick={closeMenu}>Research</Link>
        <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link to="/analytics" onClick={closeMenu}>Analytics</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </header>
  );
};

export default Header;
