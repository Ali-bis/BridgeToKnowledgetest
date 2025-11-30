import React from 'react';

const About = () => {
  // UPDATED PATHS: /images/Name.jpg
  const teamMembers = [
    { 
      name: "Ali Malbari", 
      role: "Primary Research (Private Schools)", 
      logistics: "Bake Sale Logistics (Tang)",
      img: "/images/Ali.jpg"
    },
    { 
      name: "Sumer Kothari", 
      role: "Primary Research (BMC Schools) & Social Media Lead", 
      logistics: "Bake Sale Logistics (Cookies)",
      img: "/images/Sumer.jpg"
    },
    { 
      name: "Raghav Jatia", 
      role: "Primary Research (BMC Schools)", 
      logistics: "Bake Sale Proposal & Logistics (Popsicles)",
      img: "/images/Raghav.jpg"
    },
    { 
      name: "Shai Variava", 
      role: "Primary Research (BMC Schools) & Social Media", 
      logistics: "Bake Sale Logistics (Brownies)",
      img: "/images/Shai.jpg"
    },
    { 
      name: "Ayush Rao", 
      role: "Primary Research (Private Schools)", 
      logistics: "Bake Sale Logistics (Pizza)",
      img: "/images/Ayush.jpg"
    }
  ];

  return (
    <div className="container">
      
      {/* 1. HERO SECTION */}
      <div className="hero-banner">
        <h1>ABOUT THE PROJECT</h1>
        <p style={{ color: '#38bdf8', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Bombay International School | Global Perspectives Summit
        </p>
      </div>

      {/* 2. PROJECT OVERVIEW */}
      <div className="page-section">
        <h2>The Mission</h2>
        <p>
          This project is part of the Global Perspectives (GP) Summit at Bombay International School. 
          Our team of five students chose to focus on the theme of <strong>Poverty & Inequality</strong> by investigating the topic: 
          <em> "Access to Quality Education in Mumbai".</em>
        </p>
        <p>
          Our goal was not just to research, but to combine primary evidence with a meaningful action plan. 
          We combined primary research (school visits, interviews, photographs) with secondary research (national statistics) 
          and an action plan (digital-literacy workshops, a book drive, and fundraising).
        </p>
      </div>

      {/* 3. OBJECTIVES */}
      <div className="page-section" style={{ borderLeft: '4px solid #ec4899' }}>
        <h2 style={{ color: '#ec4899' }}>Objectives & Research Questions</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
            <span style={{ color: '#ec4899' }}>➤</span> 
            To investigate the core question: "Is the quality of education in Mumbai shaped by demographics and socio-economic background?"
          </li>
          <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
            <span style={{ color: '#ec4899' }}>➤</span> 
            To compare the facilities, resources, and learning outcomes of public (BMC), private, and non-profit schools.
          </li>
          <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
            <span style={{ color: '#ec4899' }}>➤</span> 
            To identify key areas of need, particularly in digital literacy and access to technology.
          </li>
          <li style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
            <span style={{ color: '#ec4899' }}>➤</span> 
            To take direct action to help bridge the resource gap we identified.
          </li>
        </ul>
      </div>

      {/* 4. MEET THE TEAM */}
      <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>MEET THE TEAM</h2>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img 
                src={member.img} 
                alt={member.name} 
                className="team-icon"
                onError={(e) => {
                  e.target.style.display = 'none'; 
                  // If image fails, you can verify path in console
                }}
              />
              
              <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>{member.name}</h4>
              <p style={{ color: '#38bdf8', marginBottom: '0.5rem', fontWeight: 'bold' }}>{member.role}</p>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{member.logistics}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. MANIFESTO */}
      <div className="hero-banner" style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid #38bdf8' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>We are Project Bridge to Knowledge!</h2>
        <p style={{ fontSize: '1.1rem', color: '#fff' }}>
          We are committed to addressing the problem of access to quality education in Mumbai for different groups.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#fff' }}>
          We are excited to investigate the issue regarding the disparity in the access to Quality Education in Mumbai, and to take action to help solve the problem.
        </p>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#38bdf8', letterSpacing: '2px' }}>
          #educationforall
        </p>
      </div>

      {/* 6. ETHICS */}
      <div className="page-section" style={{ marginTop: '3rem' }}>
        <h3>Ethics & Permissions</h3>
        <p>
          All research involving human subjects was conducted following strict ethical guidelines. We obtained permissions from school administrators before visiting, and all student interviews were conducted only after receiving informed consent. All photographic evidence published on this site has been approved for use.
        </p>
        <p style={{ fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic', marginTop: '1rem' }}>
          Note: Detailed permission letters and consent forms will be uploaded here as a downloadable pack upon project completion.
        </p>
      </div>

    </div>
  );
};

export default About;