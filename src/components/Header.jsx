import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" /> 
            <div className="logo-text">
              <h1>BRIDGE TO KNOWLEDGE</h1>
            </div>
          </Link>
        </div>

        {/* Nav Links (Always Visible) */}
        <div style={{display:'flex', alignItems:'center'}}>
          <nav className="nav-menu">
            <ul>
              <li><Link to="/" className={isActive('/')}>Home</Link></li>
              <li><Link to="/about" className={isActive('/about')}>About</Link></li>
              <li><Link to="/timeline" className={isActive('/timeline')}>Timeline</Link></li>
              <li><Link to="/action" className={isActive('/action')}>Action</Link></li>
              <li><Link to="/research" className={isActive('/research')}>Research</Link></li>
              <li><Link to="/gallery" className={isActive('/gallery')}>Gallery</Link></li>
              <li><Link to="/analytics" className={isActive('/analytics')}>Analytics</Link></li>
            </ul>
          </nav>

          {/* Theme Button */}
          <button onClick={toggleTheme} className="theme-toggle" title="Switch Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
