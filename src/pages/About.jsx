import React from 'react';

const About = () => {
  // UPDATED ROLES FROM YOUR REQUEST
  const team = [
    { 
      name: "Ali Malbari", 
      role: "Communications, Bake Sale Logistics, Poster Head, Website Head, Fundraiser Head, Research", 
      img: "/images/Ali.jpg" 
    },
    { 
      name: "Sumer Kothari", 
      role: "Communications, Bake Sale Logistics, Social Media Head, Presentation Help, Curriculum Designer, Research", 
      img: "/images/Sumer.jpg" 
    },
    { 
      name: "Raghav Jatia", 
      role: "Communications, Bake Sale Logistics, Poster Head, Presentation Head, Newspaper Head, Research", 
      img: "/images/Raghav.jpg" 
    },
    { 
      name: "Shai Variava", 
      role: "Social Media Head, Bake Sale Logistics, PPT Head, Newspaper Head, Research", 
      img: "/images/Shai.jpg" 
    },
    { 
      name: "Ayush Rao", 
      role: "Website Head, Fundraiser Help, Secondary & Primary Research", 
      img: "/images/Ayush.jpg" 
    }
  ];

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>ABOUT US</h1>
        <p style={{ color: 'var(--accent)' }}>The mission, the method, and the team.</p>
      </div>

      <div className="page-section">
        <h2>About the Project</h2>
        <p>
          This project is part of the Global Perspectives (GP) Summit at Bombay International School. Our team of five students chose to focus on the theme of <strong>Poverty & Inequality</strong> by investigating the topic: <strong>"Access to Quality Education in Mumbai"</strong>.
        </p>
        <p>
          Our goal was not just to research, but to combine primary evidence with a meaningful action plan. We combined primary research (school visits, interviews, photographs) with secondary research (national statistics) and an action plan (digital-literacy workshops, a book drive, and fundraising).
        </p>

        <h3 style={{ marginTop: '2rem' }}>Objectives & Research Questions</h3>
        <ul>
          <li>To investigate the core question: "Is the quality of education in Mumbai shaped by demographics and socio-economic background?"</li>
          <li>To compare the facilities, resources, and learning outcomes of public (BMC), private, and non-profit schools.</li>
          <li>To identify key areas of need, particularly in digital literacy and access to technology.</li>
          <li>To take direct action to help bridge the resource gap we identified.</li>
        </ul>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>MEET THE TEAM</h2>

        {/* TOP ROW */}
        <div className="team-grid-4col">
          {team.slice(0, 4).map((member, index) => (
            <div key={index} className="team-member">
              <img 
                src={member.img} 
                alt={member.name} 
                className="team-icon" 
                style={{ objectPosition: 'top' }} 
              />
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>{member.name}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{member.role}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="team-grid-2col">
          <div className="team-member">
            <img 
              src={team[4].img} 
              alt={team[4].name} 
              className="team-icon" 
              style={{ objectPosition: 'top' }} 
            />
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>{team[4].name}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{team[4].role}</p>
          </div>

          <div className="team-description-box">
            <h3>MISSION STATEMENT</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              We are committed to addressing the problem of access to quality education in Mumbai for different groups. 
              We are excited to investigate the issue regarding the disparity in access, and to take action to help solve the problem.
            </p>
            <div className="team-hashtag">#EDUCATIONFORALL</div>
          </div>
        </div>
      </div>

      <div className="subtle-disclaimer" style={{textAlign:'center', marginTop:'3rem', fontStyle:'italic', color:'var(--text-muted)'}}>
        *All research involving human subjects was conducted following strict ethical guidelines.
      </div>
    </div>
  );
};

export default About;
