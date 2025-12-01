import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      
      <section className="hero-banner">
        {/* Logo with Responsive Class */}
        <img src="/images/logo.png" alt="Logo" className="home-logo" />
        
        <h1 style={{ marginBottom: '0.5rem' }}>BRIDGE TO KNOWLEDGE</h1>
        
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
          
          <a href="https://www.instagram.com/bridge_to_knowledge_/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Follow on Instagram
          </a>
        </div>
      </section>

      <section className="stats-section-container">
        <div className="stats-content-left">
          <h2>THE PROBLEM</h2>
          <p>
            Our research confirmed that "access" to school isn't the only problem. The real issue is a deep gap in the <strong>quality</strong> of education and a growing <strong>digital divide</strong>.
          </p>
          <p style={{ marginTop: '1rem' }}>
            While Mumbai's literacy rate is high, many students in our Partnered Municipal School lack the digital skills and tools needed for modern employment. Our mission is to take direct action to help bridge this gap.
          </p>
          <div style={{ width: '100%', height: '200px', marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
             <img 
               src="/images/group.png" 
               alt="Students in Workshop" 
               style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', marginTop: 0 }} 
             />
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
