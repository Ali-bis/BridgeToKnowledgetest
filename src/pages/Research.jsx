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
          Our research focused on the sheer scale of the education crisis. We moved beyond percentages to understand the <strong>actual number of lives affected</strong>.
        </p>

        <h3 style={{ marginTop: '2rem' }}>National Context (India)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
          
          {/* STAT 1: OUT OF SCHOOL */}
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Out of School (Ages 6-17)</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)', margin: 0 }}>47.4 Million</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Source: UDISE+ (2023-24)</span>
          </div>

          {/* STAT 2: WOMEN EXCLUDED */}
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Women Left Behind</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>242 Million</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Women never attended school (Census 2011)</span>
          </div>

           {/* STAT 3: HIGHER ED */}
           <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Higher Ed Access</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>71.6%</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Students never reach college (AISHE 2021-22)</span>
          </div>
        </div>

        <h3>Local Context: Mumbai & Maharashtra</h3>
        <p style={{ marginBottom: '1rem' }}>
          Even in a developed city like Mumbai, thousands of children slip through the cracks.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          
          {/* STAT 1: OOSC MUMBAI */}
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Out-of-School (Mumbai)</h4>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>10,820</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>BMC Survey (2020-21)</span>
          </div>
          
          {/* STAT 2: NEVER ENROLLED */}
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Never Enrolled</h4>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>7,806</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Children in Mumbai (2020-21)</span>
          </div>

          {/* STAT 3: TEACHER ABSENTEEISM */}
          <div className="highlight-card">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Teacher Absenteeism</h4>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0 }}>24%</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>In Public Schools (vs 7% Private)</span>
          </div>
        </div>

        <div style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <strong>Comment:</strong> The high "Never Enrolled" count (7,806) shows that despite infrastructure, many children in Mumbai are completely disconnected from the education system from birth.
        </div>
      </div>

      {/* CITATIONS */}
      <div className="page-section" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-body)', border: '1px dashed var(--border-color)' }}>
        <h4 style={{ marginTop: 0, fontSize: '1rem', marginBottom: '1rem' }}>Works Cited (MLA 9)</h4>
        <ul style={{ fontSize: '0.85rem', color: 'var(--text-muted)', paddingLeft: '1.2rem', marginBottom: 0, lineHeight: '1.6' }}>
          <li style={{ marginBottom: '0.8rem' }}>
            ASER Centre. <em>Annual Status of Education Report (Rural) 2023: Beyond Basics</em>. ASER Centre, 2024, www.asercentre.org.
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            "Education: Out of School Children." <em>UDISE+ 2023-24</em>, Department of School Education and Literacy, Ministry of Education, Government of India, 2024.
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            "Mumbai Records Highest Number of Out-of-School Children in the State." <em>EducationWorld</em>, 16 Feb. 2021, www.educationworld.in/mumbai-records-highest-number-of-out-of-school-children-in-the-state.
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            Office of the Registrar General & Census Commissioner, India. "C-8: Educational Level by Age and Sex for Population Age 7 and Above." <em>Census of India 2011</em>, Ministry of Home Affairs, Government of India, 2011.
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            "Teacher Absenteeism in Government Schools." <em>The Indian Express</em>, Indian Express Group, 8 Feb. 2025, www.indianexpress.com/article/cities/mumbai/maharashtra-steady-dip-seen-in-performance-of-govt-school-students-in-higher-classes-7954519.
          </li>
          <li>
            "All India Survey on Higher Education (AISHE) 2021-2022." <em>Ministry of Education</em>, Government of India, 2024, aishe.gov.in.
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Research;
