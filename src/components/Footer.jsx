import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand */}
        <div>
          <h4>Bridge To Knowledge</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Bridging the gap between potential and opportunity in Mumbai's educational landscape.
          </p>
        </div>

        {/* Column 2: Navigation (Fixed Broken Links) */}
        <div>
          <h4>Navigate</h4>
          {/* Using a simple grid layout for links to save space */}
          <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
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
          <ul>
            <li><a href="mailto:info@bridgetoknowledge.org">info@bridgetoknowledge.org</a></li>
            <li style={{ color: 'var(--text-muted)' }}>Mumbai, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Project Bridge to Knowledge. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
