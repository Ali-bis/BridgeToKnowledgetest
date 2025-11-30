import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      
      <section className="hero-banner">
        {/* LOGO ADDED */}
        <img src="/images/logo.png" alt="Logo" style={{width: '120px', marginBottom: '1.5rem', display: 'inline-block'}} />
        
        <h1 style={{ fontSize: '5rem', marginBottom: '0.5rem' }}>BRIDGE TO KNOWLEDGE</h1>
        
        {/* CENTERED TEXT */}
        <h2 style={{ fontSize: '1.5rem', fontFamily: 'Inter', color: 'var(--primary)', fontWeight: '400', letterSpacing: '2px', border: 'none', margin: '0 auto 1.5rem auto', textAlign: 'center', display: 'block' }}>
          BIS Global Perspectives Summit Project
        </h2>
        
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-muted)' }}>
          Investigating and acting upon the disparity in the <strong>quality</strong> and <strong>accessibility</strong> of education for different backgrounds in Mumbai.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-disabled" disabled>
            Fundraiser Coming Soon
          </button>
          <Link to="/about" className="btn btn-secondary">
            Meet the Team
          </Link>
        </div>
      </section>

      <section className="stats-section-container">
        <div className="stats-content-left">
          <h2 style={{fontSize: '2rem', textAlign: 'left'}}>THE PROBLEM</h2>
          <p>
            Our research confirmed that "access" to school isn't the only problem. The real issue is a deep gap in the <strong>quality</strong> of education and a growing <strong>digital divide</strong>.
          </p>
          <p style={{ marginTop: '1rem' }}>
            While Mumbai's literacy rate is high, many students in our Partnered Municipal School lack the digital skills and tools needed for modern employment. Our mission is to take direct action to help bridge this gap.
          </p>
          <div style={{ width: '100%', height: '200px', background: 'var(--bg-body)', marginTop: '1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: '1px dashed var(--primary)' }}>
            [Photo: Students in Workshop]
          </div>
        </div>

        <div className="stats-bar-right">
          <div className="stat-item">
            <span className="stat-item-number">19.1%</span>
            <span className="stat-item-label">of India’s population is illiterate (~280M adults)</span>
          </div>
          <div className="stat-item">
            <span className="stat-item-number">14.1%</span>
            <span className="stat-item-label">of students drop out by secondary levels</span>
          </div>
          <div className="stat-item">
            <span className="stat-item-number">12.5%</span>
            <span className="stat-item-label">gap in education between economic classes</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
