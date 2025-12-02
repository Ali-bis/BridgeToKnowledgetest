import React from 'react';
import adminData from '../admin.json'; 

const Contact = () => {
  const data = adminData;

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GET INVOLVED</h1>
        <p>Connect with us, support the cause, or reach out to our mentors.</p>
      </div>

      {/* CONTACT & SOCIALS */}
      <div className="page-section">
        <h2>Contact & Socials</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          {/* INSTAGRAM CARD */}
          <div className="highlight-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h3>Follow Us</h3>
            <p>We are documenting our process and sharing facts on Instagram.</p>
            <a 
              href={data.socialMedia.instagram} 
              className="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginTop: 'auto' }} 
            >
              @bridge_to_knowledge_
            </a>
          </div>

          {/* FUNDRAISER CARD */}
          <div className="highlight-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h3>Support Us</h3>
            <p>The most direct way to help is by donating to our campaign.</p>
            <button 
              className="btn btn-disabled" 
              disabled 
              style={{ marginTop: 'auto' }}
            >
              Fundraiser Coming Soon
            </button>
          </div>

          {/* CONTACT CARD */}
          <div className="highlight-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h3>School Contact</h3>
            <p>For official inquiries, please contact our project advisor.</p>
            <div style={{ marginTop: 'auto' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>Miss Samrajni</p>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>GP Summit Project Advisor</span>
            </div>
          </div>

        </div>
      </div>

      {/* ADVISORS SECTION - FIXED 2x2 GRID */}
      <div className="page-section">
        <h2>Advisors & Mentors</h2>
        <p style={{ marginBottom: '2rem' }}>
          This project would not have been possible without the guidance and support of our teachers and school advisors.
        </p>
        
        {/* FIXED: 'repeat(2, 1fr)' forces exactly 2 columns, creating a balanced 2x2 square */}
        <div className="team-grid-4col" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          
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

          <div className="team-member">
            <h4>Miss Zeeba</h4>
            <p style={{ color: 'var(--text-muted)' }}>Permission for Action & Fundraiser</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
