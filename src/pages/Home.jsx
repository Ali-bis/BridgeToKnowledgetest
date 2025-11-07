// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import adminData from '../admin.json';

function Home({ data }) {
  return (
    <div className="container">
      
      {/* --- NEW HERO BANNER --- */}
      <section className="hero-banner">
        <div className="hero-banner-logo">
          <img src="/images/logo.png" alt="Bridge to Knowledge Logo" />
        </div>
        <div className="hero-banner-content">
          <h1>Bridge to Knowledge</h1>
          <h2>Access to Quality Education in Mumbai</h2>
          <p>
            Investigating and acting upon the disparity in the <strong>quality</strong> and <strong>accessibility</strong> of education for different backgrounds in Mumbai.
          </p>
          <div className="btn-group">
            <a href={data.fundraiserUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Donate to our Fundraiser
            </a>
            <Link to="/about" className="btn btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* --- STATISTICS SECTION --- */}
      <section className="page-section stats-section-container">
        <div className="stats-content-left">
          <h2>The Problem We Found</h2>
          <p>
            Our research confirmed that "access" to school isn't the only problem. The real issue is a deep gap in the <strong>quality</strong> of education and a growing <strong>digital divide</strong>.
          </p>
          <p>
            While Mumbai's literacy rate is high, many students in under-resourced schools lack the digital skills and tools needed for modern employment. Our mission is to take direct action to help bridge this gap.
          </p>
          <img src="/images/placeholder-gallery-2.png" alt="Students in a workshop" />
        </div>
        <div className="stats-bar-right">
          
          {/* --- YOUR NEW STATS --- */}
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
}

export default Home;