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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
          
          {/* STAT 1: NEVER ATTENDED */}
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Never Attended School</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>414 Million</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>People in India (Census 2011)</span>
          </div>

          {/* STAT 2: OUT OF SCHOOL CHILDREN */}
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Out of School (Ages 6-17)</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)', margin: 0 }}>47.4 Million</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>UDISE 2023-24 Data</span>
          </div>

          {/* STAT 3: WOMEN EXCLUDED */}
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Women Left Behind</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>242 Million</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Women who never attended school</span>
          </div>
        </div>

        <h3>Mumbai Context: The Urban Gap</h3>
        <p style={{ marginBottom: '1rem' }}>
          Even in a developed city like Mumbai, thousands of children slip through the cracks.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Out-of-School Children</h4>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>10,820</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official Mumbai Survey</span>
          </div>
          
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Never Enrolled</h4>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>7,806</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Children in Mumbai</span>
          </div>

          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Child Labor</h4>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>288</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Identified cases in survey</span>
          </div>
        </div>

        <div style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <strong>Comment:</strong> The high "Never Enrolled" count (7,806) shows that despite infrastructure, many children in Mumbai are completely disconnected from the education system from birth.
        </div>
      </div>

    </div>
  );
};

export default Research;
