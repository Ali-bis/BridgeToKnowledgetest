import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand & Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Bridge To Knowledge</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
            Bridging the gap between potential and opportunity in Mumbai's educational landscape.
          </p>
          
          {/* BIGGER FOOTER LOGO */}
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            style={{ width: '120px', marginTop: '1.5rem', display: 'block' }} 
          />
        </div>

        {/* Column 2: Links */}
        <div>
          <h4>Navigate</h4>
          <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/timeline">Timeline</Link></li>
            <li><Link to="/action">Action</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="mailto:samrajni.dasgupta@bis.edu.in" style={{ textDecoration: 'none', color: 'var(--primary)' }}>
                samrajni.dasgupta@bis.edu.in
              </a>
            </li>
            <li style={{ color: 'var(--text-muted)' }}>Mumbai, India</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom" style={{ textAlign: 'left', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
        &copy; {new Date().getFullYear()} Project Bridge to Knowledge. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
