import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/" onClick={() => setIsMobileNavOpen(false)}>
            {/* LOGO IMAGE */}
            <img 
              src="/logo.png" 
              alt="Bridge To Knowledge" 
            /> 
            <div className="logo-text"><h1>BRIDGE TO KNOWLEDGE</h1></div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul>
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about')}>About</Link></li>
            <li><Link to="/timeline" className={isActive('/timeline')}>Timeline</Link></li>
            <li><Link to="/action" className={isActive('/action')}>Action</Link></li>
            <li><Link to="/research" className={isActive('/research')}>Research</Link></li>
            <li><Link to="/gallery" className={isActive('/gallery')}>Gallery</Link></li>
            <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
            <li><Link to="/analytics" className={isActive('/analytics')}>Analytics</Link></li>
          </ul>
        </nav>

        <button className="mobile-nav-toggle" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>☰</button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileNavOpen && (
        <div style={{ position: 'absolute', top: '70px', left: 0, width: '100%', background: '#0f172a', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 9999 }}>
           <Link to="/" style={{color:'white'}}>Home</Link>
           {/* Add other mobile links here if needed */}
        </div>
      )}
    </header>
  );
};

export default Header;