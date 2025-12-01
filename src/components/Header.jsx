import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  // Close menu when a link is clicked
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

        {/* DESKTOP Nav (Hidden on Mobile via CSS) */}
        <div className="desktop-nav" style={{display: 'flex', alignItems: 'center'}}>
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
          
          <button onClick={toggleTheme} className="theme-toggle" style={{marginLeft: '1rem'}}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* --- YOUR CUSTOM BURGER (Visible only on Mobile) --- */}
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

      {/* MOBILE MENU DROPDOWN */}
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
