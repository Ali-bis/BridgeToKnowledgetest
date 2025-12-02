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
          Our research focused on the sheer scale of the education crisis. We moved beyond percentages to understand the <strong>actual number of lives affected</strong> by the lack of access and quality.
        </p>

        <h3 style={{ marginTop: '2rem' }}>National Context: The Scale of Exclusion</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
          
          {/* STAT 1: OUT OF SCHOOL */}
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Out of School (Ages 6-17)</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)', margin: 0 }}>47.4 Million</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>UDISE 2023-24 Data</span>
          </div>

          {/* STAT 2: WOMEN EXCLUDED */}
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Women Left Behind</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>242 Million</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Women who never attended school</span>
          </div>
          
          {/* STAT 3: COLLEGE DROPOUT */}
          <div className="highlight-card">
             <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Higher Ed Gap</h4>
             <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>71.6%</p>
             <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Students never reach college</span>
          </div>
        </div>

        <h3>Mumbai Context: The Urban Gap</h3>
        <p style={{ marginBottom: '1rem' }}>
          Even in Mumbai, thousands of children remain excluded from the education system.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Out-of-School Children</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>10,820</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official Mumbai Survey</span>
          </div>
          
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Never Enrolled</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>7,806</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Children in Mumbai</span>
          </div>
        </div>

        <div style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <strong>Comment:</strong> The high "Never Enrolled" count (7,806) shows that despite infrastructure, many children in Mumbai are completely disconnected from the education system from birth.
        </div>

        {/* CITATIONS SECTION */}
        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
          <h4>Sources</h4>
          <ul style={{ fontSize: '0.85rem', color: 'var(--text-muted)', columns: 2, listStylePosition: 'inside' }}>
            <li>UDISE+ 2023-24 Report</li>
            <li>ASER 2024 National Findings</li>
            <li>Periodic Labour Force Survey (PLFS) 2023-24</li>
            <li>Mumbai Municipal Corporation Education Survey</li>
            <li>MOSPI "Children in India" Report</li>
            <li>Census 2011 Data (Baseline)</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Research;
