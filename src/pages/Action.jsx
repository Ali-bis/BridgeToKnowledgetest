import React from 'react';

const Action = () => {
  return (
    <div className="container">
      
      {/* HERO SECTION */}
      <div className="hero-banner">
        <h1>OUR ACTION PLAN</h1>
        <p>From research to real-world impact. Deadline: November 27, 2025.</p>
      </div>

      {/* INTRO */}
      <div className="page-section">
        <p style={{ fontSize: '1.1rem' }}>
          Based on our research, we developed a multi-part action plan to address the resource and skills gaps we identified.
        </p>
      </div>

      {/* PART 1: WORKSHOPS */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          Part 1: Digital Literacy Workshops
        </h2>
        
        {/* CAROUSEL PLACEHOLDER */}
        <div style={{ 
          background: 'var(--bg-body)', 
          border: '2px dashed var(--primary)', 
          borderRadius: '12px', 
          height: '300px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '2rem',
          position: 'relative'
        }}>
          <p style={{ color: 'var(--text-muted)' }}>[Image Carousel: Students learning Canva & PPT]</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ color: 'var(--primary)' }}>Objective</h3>
            <p>To teach essential digital skills to students in public (BMC) schools to help solve the problem of access to quality digital education.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary)' }}>Lesson Plan</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Canva:</strong> How to create basic posters, presentations, and graphics.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>PowerPoint/Slides:</strong> How to build a simple presentation, add images, and present information.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Basic E-Skills:</strong> Safe searching, email etiquette, and using online forms.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* PART 2: FUNDRAISING */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          Part 2: Fundraising
        </h2>
        <p>
          Our primary research identified a critical lack of access to technology. Our fundraising efforts are designed to provide devices (tablets) to students at under-resourced schools.
        </p>

        {/* Ketto Section (Replaced inline style with class) */}
        <div className="highlight-card">
          <h3 style={{ marginTop: 0 }}>Online Fundraiser</h3>
          <p>We are preparing to launch an online fundraiser. These funds will be used to purchase tablets.</p>
          <button className="btn btn-disabled" style={{ marginTop: '1rem' }} disabled>
            Fundraiser Coming Soon
          </button>
        </div>

        {/* Why Tablets Section */}
        <div style={{ marginBottom: '3rem' }}>
          <h3>Why Tablets?</h3>
          <p>Based on our research, these are the cost-effective tools we aim to provide:</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <div className="highlight-card" style={{ flex: 1, marginBottom: 0 }}>
              <h4>Lenovo Tab</h4>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 'bold' }}>₹9.5k</p>
              <span style={{ color: '#22c55e', fontWeight: 'bold' }}>53% Discount</span>
            </div>
            <div className="highlight-card" style={{ flex: 1, marginBottom: 0 }}>
              <h4>HONOR Pad</h4>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 'bold' }}>₹10k</p>
              <span style={{ color: '#22c55e', fontWeight: 'bold' }}>50% Discount</span>
            </div>
            <div className="highlight-card" style={{ flex: 1, marginBottom: 0 }}>
              <h4>Motorola Tab</h4>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 'bold' }}>₹13k</p>
              <span style={{ color: '#22c55e', fontWeight: 'bold' }}>18% Discount</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Action;
