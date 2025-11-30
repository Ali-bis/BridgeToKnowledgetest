import React from 'react';

const Research = () => {
  return (
    <div className="container">
      
      {/* HERO */}
      <div className="hero-banner">
        <h1>RESEARCH & METHODS</h1>
        <p>A foundation of secondary data and on-the-ground investigation.</p>
      </div>

      {/* PRIMARY RESEARCH */}
      <div className="page-section">
        <h2>PRIMARY RESEARCH</h2>
        <p>
          Our team conducted direct, on-the-ground research to gather qualitative and quantitative data.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>School Visits</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              We visited a representative sample of schools: public (BMC), private for-profit, and private non-profit.
            </p>
          </div>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Student Interviews</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Conducted structured interviews with students to understand their learning experiences and access to resources.
            </p>
          </div>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Evidence</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Documented the state of facilities, classroom resources (libraries, computer labs), and infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* SECONDARY RESEARCH */}
      <div className="page-section">
        <h2>SECONDARY RESEARCH: KEY FINDINGS</h2>
        <p>
          Our research focused on literacy rates and digital access. We found that the problem isn't just <strong>enrolment</strong>, but <strong>quality of learning</strong> and the <strong>digital divide</strong>.
        </p>

        <h3 style={{ marginTop: '2rem' }}>National Context</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>India Literacy (7+)</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>80.9%</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PLFS 2023-24</span>
          </div>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Gender Gap</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)', margin: 0 }}>12.6%</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Male vs Female</span>
          </div>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Urban-Rural Gap</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>11.4%</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Urban vs Rural</span>
          </div>
        </div>

        <h3>Maharashtra & Mumbai Context</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <div className="highlight-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
            <span>Maharashtra Literacy (2011)</span>
            <strong style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>82.34%</strong>
          </div>
          <div className="highlight-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
            <span>Mumbai Suburban Literacy</span>
            <strong style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>89.91%</strong>
          </div>
          <div className="highlight-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
            <span>Mumbai City Literacy</span>
            <strong style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>89.21%</strong>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Research;
