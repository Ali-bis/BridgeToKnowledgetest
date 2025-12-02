import React from 'react';
// Import data directly to prevent "undefined" errors
import adminData from '../admin.json'; 

const Contact = () => {
  // Use local variable for easier reading
  const data = adminData;

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GET INVOLVED</h1>
        <p>Connect with us, support the cause, or reach out to our mentors.</p>
      </div>

      <div className="page-section">
        <h2>Contact & Socials</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          
          <div className="highlight-card">
            <h3>Follow Our Journey</h3>
            <p>We are documenting our process and sharing facts on Instagram.</p>
            <a 
              href={data.socialMedia.instagram} 
              className="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginTop: '2rem', display: 'inline-block' }}
            >
              @bridge_to_knowledge_
            </a>
          </div>

          <div className="highlight-card">
            <h3>Support Us</h3>
            <p>The most direct way to help is by donating to our campaign.</p>
            <button 
              className="btn btn-disabled" 
              disabled 
              style={{ marginTop: '2rem' }}
            >
              Fundraiser Coming Soon
            </button>
          </div>

          <div className="highlight-card">
            <h3>School Contact</h3>
            <p>For official inquiries, please contact our project advisor.</p>
            <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Miss Samrajni</p>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>GP Summit Project Advisor</span>
          </div>

        </div>
      </div>

      <div className="page-section">
        <h2>Advisors & Mentors</h2>
        <p style={{ marginBottom: '2rem' }}>
          This project would not have been possible without the guidance and support of our teachers and school advisors.
        </p>
        
        <div className="team-grid-4col" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {data.advisors.map((advisor, index) => (
            <div key={index} className="team-member">
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{advisor.name}</h4>
              <p style={{ color: 'var(--text-muted)' }}>{advisor.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Contact;
