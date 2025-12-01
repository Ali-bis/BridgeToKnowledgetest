import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand */}
        <div>
          <h4>Bridge To Knowledge</h4>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Bridging the gap between potential and opportunity in Mumbai's educational landscape.
          </p>
        </div>

        {/* Column 2: Quick Links (No Underlines) */}
        <div>
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact (Plain Text Look) */}
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:samrajni.dasgupta@bis.edu.in">samrajni.dasgupta@bis.edu.in</a></li>
            <li style={{ color: '#94a3b8' }}>Mumbai, India</li>
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
