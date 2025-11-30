import React from 'react';

const Home = () => {
  return (
    <div className="container">
      
      {/* 1. HERO SECTION */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '3rem', 
        alignItems: 'center', 
        marginBottom: '4rem' 
      }}>
        
        {/* Left: Titles */}
        <div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: '1', marginBottom: '1rem', fontFamily: 'Bebas Neue' }}>
            BRIDGE TO KNOWLEDGE
          </h1>
          <h2 style={{ fontSize: '1.5rem', color: '#38bdf8', fontWeight: '400', margin: 0 }}>
            BIS Global Perspectives Summit Project
          </h2>
        </div>

        {/* Right: LOGO IMAGE */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/logo.png" 
            alt="Project Logo" 
            style={{ 
              width: '100%', 
              maxWidth: '350px', // Limits size so it doesn't look huge
              borderRadius: '16px',
              border: '2px solid #38bdf8',
              padding: '20px',
              background: 'rgba(15, 23, 42, 0.5)'
            }} 
          />
        </div>
      </div>

      {/* 2. PROJECT TOPIC */}
      <div className="page-section" style={{ borderLeft: '4px solid #38bdf8', marginBottom: '2rem' }}>
        <h3 style={{ color: '#94a3b8', fontSize: '1rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>
          Project Topic
        </h3>
        <p style={{ fontSize: '2rem', fontFamily: 'Bebas Neue', color: '#fff', marginTop: '0.5rem', lineHeight: '1.2' }}>
          Disparity in the Access to Quality of Education in Mumbai
        </p>
      </div>

      {/* 3. RESEARCH QUESTION */}
      <div className="page-section" style={{ borderLeft: '4px solid #ec4899' }}>
        <h3 style={{ color: '#94a3b8', fontSize: '1rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>
          Research Question
        </h3>
        <p style={{ fontSize: '1.25rem', color: '#f8fafc', marginTop: '1rem', fontStyle: 'italic', fontWeight: '300' }}>
          "How does the disparity in access to resources (digital tools, libraries, infrastructure) between public and private schools in Mumbai affect the quality of education and future opportunities for students, and what community-driven solutions can help bridge this gap?"
        </p>
      </div>

    </div>
  );
};

export default Home;