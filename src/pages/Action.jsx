import React from 'react';

const Action = () => {
  return (
    <div className="container">
      <div className="hero-banner">
        <h1>OUR ACTION PLAN</h1>
        <p>From research to real-world impact. Deadline: November 27, 2025.</p>
      </div>

      <div className="page-section">
        <p style={{ fontSize: '1.1rem' }}>
          Based on our research, we developed a multi-part action plan to address the resource and skills gaps we identified.
        </p>
      </div>

      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          PART 1: WORKSHOPS
        </h2>
        
        <div className="highlight-card" style={{textAlign:'center', marginBottom:'2rem'}}>
          <p style={{ color: 'var(--text-muted)' }}>[Image Carousel Placeholder]</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="highlight-card">
            <h3 style={{ color: 'var(--primary)', marginTop: 0 }}>Objective</h3>
            <p>To teach essential digital skills to students in our Partnered Municipal School to help solve the problem of access to quality digital education.</p>
          </div>
          <div className="highlight-card">
            <h3 style={{ color: 'var(--primary)', marginTop: 0 }}>Lesson Plan</h3>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Canva:</strong> Graphic design basics.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>PowerPoint:</strong> Presentation skills.</li>
              <li><strong>E-Skills:</strong> Safe searching & email.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          PART 2: FUNDRAISING
        </h2>
        
        <div className="highlight-card">
          <h3 style={{ marginTop: 0 }}>Online Fundraiser</h3>
          <p>We are preparing to launch an online fundraiser. These funds will be used to purchase Soundbars and Projectors.</p>
          <button className="btn btn-disabled" style={{ marginTop: '1rem' }} disabled>
            Fundraiser Coming Soon
          </button>
        </div>
      </div>

    </div>
  );
};

export default Action;
