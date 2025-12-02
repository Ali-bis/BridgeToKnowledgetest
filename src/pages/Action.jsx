import React from 'react';
import Carousel from '../components/Carousel';

const Action = () => {
  const actionImages = [
    { src: "/images/4.png.jpg", caption: "Workshop 1: Newsletter Writing" },
    { src: "/images/5.png", caption: "Workshop 2: Word Search & Vocab" },
    { src: "/images/3.png", caption: "Workshop 3: Comic Strip Creation" }
  ];

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

      {/* BENCHMARKING */}
      <div className="page-section">
        <h2 style={{ color: 'var(--accent)' }}>BENCHMARKING</h2>
        <p>
          Before intervening, we needed a benchmark. We conducted a Google Forms survey and structured interviews with students from Mumbai's leading private and international schools to compare with our Partnered Municipal School.
        </p>
      </div>

      {/* PART 1: WORKSHOPS */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          PART 1: WORKSHOPS
        </h2>
        
        {/* CAROUSEL (Now with fixed buttons) */}
        <div style={{ marginBottom: '2rem' }}>
          <Carousel images={actionImages} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div className="highlight-card">
            <h3 style={{ color: 'var(--primary)', marginTop: 0 }}>Objective</h3>
            <p>To teach essential digital & creative skills to students in our Partnered Municipal School to help bridge the quality gap.</p>
          </div>
          
          {/* UPDATED LESSON PLAN FROM LOG SHEET */}
          <div className="highlight-card">
            <h3 style={{ color: 'var(--primary)', marginTop: 0 }}>Curriculum Delivered</h3>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Session 1: Newsletter Writing</strong><br/>
                <span style={{fontSize:'0.9rem', color:'var(--text-muted)'}}>Focus on Environment/Pollution. Taught article structure and formatting.</span>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Session 2: Vocabulary & Word Search</strong><br/>
                <span style={{fontSize:'0.9rem', color:'var(--text-muted)'}}>Interactive puzzles to build English vocabulary. Conducted a quiz.</span>
              </li>
              <li>
                <strong>Session 3: Creative Expression</strong><br/>
                <span style={{fontSize:'0.9rem', color:'var(--text-muted)'}}>Comic-strip writing and drawing skills to foster creativity and storytelling.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* PART 2: FUNDRAISING */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          PART 2: FUNDRAISING
        </h2>
        
        <div className="highlight-card" style={{ textAlign: 'center' }}>
          <h3 style={{ marginTop: 0 }}>Online Fundraiser</h3>
          <p>We are preparing to launch an online fundraiser. These funds will be used to purchase Soundbars and Projectors.</p>
          
          <button 
            className="btn btn-disabled" 
            disabled 
            style={{ marginTop: '1.5rem' }}
          >
            Fundraiser Coming Soon
          </button>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3>Audio-Visual Equipment</h3>
          <p>We are shifting focus from personal tablets to classroom-wide impact tools.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div className="highlight-card" style={{ marginBottom: 0 }}>
              <h4>Smart Projector</h4>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 'bold' }}>Visual Learning</p>
              <p style={{ fontSize: '0.9rem' }}>Allows the entire class to see demonstrations clearly.</p>
            </div>
            <div className="highlight-card" style={{ marginBottom: 0 }}>
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
