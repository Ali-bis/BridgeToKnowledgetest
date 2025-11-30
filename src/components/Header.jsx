import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={() => setIsMobileNavOpen(false)} style={{display:'flex', alignItems:'center'}}>
            <img src="/logo.png" alt="Logo" style={{height:'40px', marginRight:'10px'}} /> 
            <div className="logo-text">
              <h1 style={{fontSize:'1.5rem', margin:0}}>BRIDGE TO KNOWLEDGE</h1>
            </div>
          </Link>
        </div>

        {/* Desktop Nav + Theme Toggle */}
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

          <button className="mobile-nav-toggle" style={{marginLeft:'1rem'}} onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>☰</button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileNavOpen && (
        <div style={{ position: 'absolute', top: '70px', left: 0, width: '100%', background: 'var(--bg-card)', padding: '1rem', borderBottom: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 9999 }}>
           <Link to="/" onClick={() => setIsMobileNavOpen(false)}>Home</Link>
           <Link to="/about" onClick={() => setIsMobileNavOpen(false)}>About</Link>
           <Link to="/action" onClick={() => setIsMobileNavOpen(false)}>Action</Link>
           <Link to="/analytics" onClick={() => setIsMobileNavOpen(false)}>Analytics</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
