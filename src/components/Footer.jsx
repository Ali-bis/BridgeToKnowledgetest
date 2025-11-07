import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4>{data.projectTitle}</h4>
          <p>A GP Summit project by BIS students exploring educational inequality in Mumbai.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About the Team</Link></li>
            <li><Link to="/research">Our Research</Link></li>
            <li><Link to="/action">Our Action</Link></li>
            <li><Link to="/gallery">Evidence Gallery</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Get Involved</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href={data.fundraiserUrl} target="_blank" rel="noopener noreferrer">Donate Now</a></li>
            <li><a href={data.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Follow on Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} - {data.team.map(m => m.name).join(', ')}.</p>
      </div>
    </footer>
  );
}

export default Footer;