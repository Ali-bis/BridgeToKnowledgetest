import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GET INVOLVED</h1>
        <p>Connect with us, support the cause, or reach out to our mentors.</p>
      </div>

      {/* CONTACT & SOCIALS */}
      <div className="page-section">
        <h2>CONTACT & SOCIALS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          
          <div className="highlight-card">
            <h3>Follow Our Journey</h3>
            <p>We are documenting our process and sharing facts on Instagram.</p>
            {/* Added marginTop for spacing */}
            <a 
              href="https://www.instagram.com/bridge_to_knowledge_/" 
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
            {/* Added marginTop for spacing */}
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

      {/* ADVISORS SECTION */}
      <div className="page-section">
        <h2>ADVISORS & MENTORS</h2>
        <p style={{ marginBottom: '2rem' }}>
          This project would not have been possible without the guidance and support of our teachers and school advisors.
        </p>
        
        <div className="team-grid-4col" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="team-member">
            <h4>Miss Samrajni</h4>
            <p style={{ color: 'var(--text-muted)' }}>GP Summit Project Advisor</p>
          </div>
          <div className="team-member">
            <h4>Ms. Deepti</h4>
            <p style={{ color: 'var(--text-muted)' }}>NGO & BMC School Liaison</p>
          </div>
          <div className="team-member">
            <h4>Miss Azmin</h4>
            <p style={{ color: 'var(--text-muted)' }}>Head of Student Life</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
