// src/pages/Contact.jsx

import React from 'react';
import adminData from '../admin.json'; // Make sure this import is here

function Contact({ data }) {
  return (
    <div className="container">
      {/* This is the main contact section */}
      <section className="page-section">
        <h2>Contact & Get Involved</h2>
        <p>
          We welcome collaboration, questions, and support. You can reach out to us through our project advisors or follow our social media.
        </p>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Follow Our Journey</h3>
            <p>We are documenting our process and sharing facts on Instagram.</p>
            <a 
              href={data.socialMedia.instagram} 
              className="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Follow {data.socialMedia.instagramHandle}
            </a>
          </div>
          <div className="stat-card">
            <h3>Support Our Fundraiser</h3>
            <p>The most direct way to help is by donating to our {data.fundraiserPlatform} campaign.</p>
            <a 
              href={data.fundraiserUrl} 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Donate Now
            </a>
          </div>
          <div className="stat-card">
            <h3>School Contact</h3>
            <p>For official inquiries, please contact our project advisor:</p>
            <p><strong>Miss Samrajni</strong><br />GP Summit Project Advisor<br />(Email placeholder: s.advisor@bis.edu.in)</p>
          </div>
        </div>
      </section>

      {/* This is the new, combined Advisors section */}
      <section className="page-section">
        <h2>Advisors & Mentors</h2>
        <p>
          This project would not have been possible without the guidance and support of our teachers and school advisors.
        </p>
        <div className="team-grid team-grid-3col">
          {data.advisors.map(advisor => (
            <div key={advisor.name} className="team-member">
              <h4>{advisor.name}</h4>
              <p>{advisor.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;