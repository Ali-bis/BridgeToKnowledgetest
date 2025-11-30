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

      {/* DATA COLLECTION */}
      <div className="page-section">
        <h2 style={{ color: 'var(--accent)' }}>Benchmarking</h2>
        <p>
          Before intervening, we needed a benchmark. We conducted a Google Forms survey and structured interviews with students from Mumbai's leading private and international schools to compare with our Partnered Municipal School.
        </p>
      </div>

      {/* WORKSHOPS */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          Part 1: Digital Literacy Workshops
        </h2>
        
        <div className="highlight-card" style={{border: '2px dashed var(--primary)', background: 'transparent'}}>
           <p style={{ color: 'var(--text-muted)' }}>[Image Carousel: Students learning Canva & PPT]</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ color: 'var(--primary)' }}>Objective</h3>
            <p>To teach essential digital skills to students in our Partnered Municipal School to help solve the problem of access to quality digital education.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary)' }}>Lesson Plan</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}><strong>Canva:</strong> Graphic design basics.</li>
              <li style={{ marginBottom: '1rem' }}><strong>PowerPoint:</strong> Presentation skills.</li>
              <li style={{ marginBottom: '1rem' }}><strong>E-Skills:</strong> Safe searching & email.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FUNDRAISING */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          Part 2: Fundraising
        </h2>
        
        <div className="highlight-card">
          <h3 style={{ marginTop: 0 }}>Online Fundraiser</h3>
          <p>We are preparing to launch an online fundraiser. These funds will be used to purchase tablets.</p>
          <button className="btn btn-disabled" style={{ marginTop: '1rem' }} disabled>
            Fundraiser Coming Soon
          </button>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3>Why Tablets?</h3>
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
          </div>
        </div>
      </div>

    </div>
  );
};

export default Action;
