import React from 'react';

const Research = () => {
  return (
    <div className="container">
      
      {/* 1. HERO SECTION */}
      <div className="hero-banner">
        <h1>RESEARCH & METHODS</h1>
        <p>A foundation of secondary data and on-the-ground investigation.</p>
      </div>

      {/* 2. PRIMARY RESEARCH */}
      <div className="page-section">
        <h2>Primary Research</h2>
        <p>
          Our project is built on a foundation of both secondary and primary research to understand the full scope of educational disparity in Mumbai. 
          Our team is conducting direct, on-the-ground research to gather qualitative and quantitative data.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div className="info-box">
            <h4 style={{ color: '#38bdf8', marginBottom: '0.5rem' }}>School Visits</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              We are visiting a representative sample of schools: public (BMC), private for-profit, and private non-profit.
            </p>
          </div>
          <div className="info-box">
            <h4 style={{ color: '#38bdf8', marginBottom: '0.5rem' }}>Student Interviews</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Conducting structured interviews with students to understand their learning experiences, access to resources, and future aspirations.
            </p>
          </div>
          <div className="info-box">
            <h4 style={{ color: '#38bdf8', marginBottom: '0.5rem' }}>Photographic Evidence</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Documenting the state of facilities, classroom resources (libraries, computer labs), and general infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SECONDARY RESEARCH INTRO */}
      <div className="page-section" style={{ borderLeft: '4px solid #ec4899' }}>
        <h2 style={{ color: '#ec4899' }}>Secondary Research: Key Findings</h2>
        <p>
          Our secondary research focused on literacy rates and digital access to frame our primary investigation. 
          We found that the problem isn't just <strong>enrolment</strong>, but <strong>quality of learning</strong> and the <strong>digital divide</strong>.
        </p>
      </div>

      {/* 4. NATIONAL CONTEXT (Stats Grid) */}
      <div className="page-section">
        <h3>National Context: Literacy & Learning Gaps</h3>
        <p>
          While India has achieved near-universal primary enrolment, large national surveys (like ASER) find that many students lack grade-level reading and arithmetic skills. 
          This shows a gap between "schooling" and "learning".
        </p>

        {/* Data Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #334155' }}>
            <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>India Literacy (7+)</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>80.9%</p>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>PLFS 2023-24</span>
          </div>
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #334155' }}>
            <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>Gender Gap</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ec4899', margin: 0 }}>12.6%</p>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Male: 87.2% vs Female: 74.6%</span>
          </div>
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #334155' }}>
            <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>Urban-Rural Gap</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#38bdf8', margin: 0 }}>11.4%</p>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Urban: 88.9% vs Rural: 77.5%</span>
          </div>
        </div>

        <p style={{ fontStyle: 'italic', color: '#94a3b8', borderTop: '1px solid #334155', paddingTop: '1rem' }}>
          <strong>Comment:</strong> These gaps show that large segments (women, rural populations) are left behind. Our project explores if similar gaps exist <em>within</em> Mumbai between affluent and low-income areas.
        </p>
      </div>

      {/* 5. MAHARASHTRA & MUMBAI CONTEXT */}
      <div className="page-section">
        <h3>Maharashtra & Mumbai Context</h3>
        <p>
          Within Maharashtra, literacy varies widely. While Mumbai districts have high literacy rates, this still leaves ~10-11% illiterate and doesn't guarantee <em>quality</em> education, <em>digital</em> literacy, or job skills.
        </p>

        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', marginBottom: '1rem' }}>
          <li style={{ padding: '1rem', background: '#1e293b', marginBottom: '0.5rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between' }}>
            <span>Maharashtra Literacy (2011)</span>
            <strong style={{ color: '#38bdf8' }}>82.34%</strong>
          </li>
          <li style={{ padding: '1rem', background: '#1e293b', marginBottom: '0.5rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between' }}>
            <span>Mumbai Suburban Literacy</span>
            <strong style={{ color: '#38bdf8' }}>89.91%</strong>
          </li>
          <li style={{ padding: '1rem', background: '#1e293b', marginBottom: '0.5rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between' }}>
            <span>Mumbai City Literacy</span>
            <strong style={{ color: '#38bdf8' }}>89.21%</strong>
          </li>
        </ul>

        <p style={{ fontStyle: 'italic', color: '#94a3b8' }}>
          <strong>Comment:</strong> This high rate suggests our focus should move beyond basic literacy to functional literacy, digital readiness, and skills for employment, justifying our digital workshops.
        </p>
      </div>

      {/* 6. THE DIGITAL DIVIDE */}
      <div className="hero-banner" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #fff', marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>The Digital Divide</h2>
        <p style={{ color: '#fff' }}>
          While India has 800-880+ million internet users, access is unequal. Many low-income users rely on shared devices, intermittent connectivity, and lack basic e-skills (email, app navigation).
        </p>
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px' }}>
          <strong style={{ color: '#38bdf8' }}>Our Action Plan:</strong> Providing devices (via fundraising) and skills (via workshops) is critical to bridge the digital divide and translate raw internet access into real educational gains.
        </div>
      </div>

    </div>
  );
};

export default Research;