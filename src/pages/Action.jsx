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

      {/* PART 1: WORKSHOPS */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          Part 1: Digital Literacy Workshops
        </h2>
        
        <div style={{ 
          background: 'var(--bg-body)', 
          border: '2px dashed var(--primary)', 
          borderRadius: '12px', 
          height: '300px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '2rem'
        }}>
          <p style={{ color: 'var(--text-muted)' }}>[Image Carousel: Students learning Canva & PPT]</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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

      {/* PART 2: FUNDRAISING */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          Part 2: Fundraising
        </h2>
        
        <div className="highlight-card">
          <h3 style={{ marginTop: 0 }}>Online Fundraiser</h3>
          <p>We are preparing to launch an online fundraiser. These funds will be used to purchase Soundbars and Projectors for the classrooms.</p>
          <button className="btn btn-disabled" style={{ marginTop: '1rem' }} disabled>
            Fundraiser Coming Soon
          </button>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3>Why Audio-Visual Equipment?</h3>
          <p>Our research showed that while students were eager to learn, the lack of AV tools made teaching digital concepts difficult. Soundbars and projectors allow for:</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <div className="highlight-card" style={{ flex: 1, marginBottom: 0 }}>
              <h4>Smart Projector</h4>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 'bold' }}>Visual Learning</p>
              <p style={{ fontSize: '0.9rem' }}>Allows the entire class to see demonstrations clearly.</p>
            </div>
            <div className="highlight-card" style={{ flex: 1, marginBottom: 0 }}>
              <h4>Soundbar</h4>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 'bold' }}>Clear Audio</p>
              <p style={{ fontSize: '0.9rem' }}>Essential for language learning and video tutorials.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Action;
