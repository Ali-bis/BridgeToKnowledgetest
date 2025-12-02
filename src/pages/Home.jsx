import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      
      <section className="hero-banner">
        {/* Logo */}
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
            Our research reveals a staggering reality: <strong>47.4 million children</strong> in India are out of school (UDISE 2023-24). But access is only half the battle.
          </p>
          <p style={{ marginTop: '1rem' }}>
            The quality of learning is in crisis. <strong>50% of Grade 5 students</strong> cannot read a Grade 2 text. Even in a developed city like Mumbai, thousands of children slip through the cracks, disconnected from the education system entirely.
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
            <span className="stat-item-number">47.4 M</span>
            <span className="stat-item-label">Children (ages 6-17) are out of school in India.</span>
          </div>
          <div className="stat-item">
            <span className="stat-item-number">71.6%</span>
            <span className="stat-item-label">Students never make it to higher education (College).</span>
          </div>
          <div className="stat-item">
            <span className="stat-item-number">12x</span>
            <span className="stat-item-label">Spending gap between Urban Private & Rural Govt schools.</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
