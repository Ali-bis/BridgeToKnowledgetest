import React from 'react';

const About = () => {
  const team = [
    { name: "Ali Malbari", role: "Primary Research (Private Schools)", img: "/images/Ali.jpg" },
    { name: "Sumer Kothari", role: "Primary Research (BMC Schools)", img: "/images/Sumer.jpg" },
    { name: "Raghav Jatia", role: "Primary Research (BMC Schools)", img: "/images/Raghav.jpg" },
    { name: "Shai Variava", role: "Primary Research (BMC Schools)", img: "/images/Shai.jpg" },
    { name: "Ayush Rao", role: "Primary Research (Private Schools)", img: "/images/Ayush.jpg" }
  ];

  return (
    <div className="container">
      
      {/* HEADER */}
      <div className="hero-banner" style={{ padding: '2rem' }}>
        <h1>MEET THE TEAM</h1>
        <p style={{ color: 'var(--accent)' }}>The students behind the initiative.</p>
      </div>

      {/* TOP ROW */}
      <div className="team-grid-4col">
        {team.slice(0, 4).map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} className="team-icon" />
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{member.name}</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{member.role}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM ROW */}
      <div className="team-grid-2col">
        {/* Ayush */}
        <div className="team-member">
          <img src={team[4].img} alt={team[4].name} className="team-icon" />
          <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{team[4].name}</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{team[4].role}</p>
        </div>

        {/* The Info Block */}
        <div className="team-description-box">
          <h3>MISSION STATEMENT</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            We are committed to addressing the problem of access to quality education in Mumbai for different groups. 
            We are excited to investigate the issue regarding the disparity in access, and to take action to help solve the problem.
          </p>
          <div className="team-hashtag">#EDUCATIONFORALL</div>
        </div>
      </div>

      {/* Fixed Ethics Note */}
      <div className="subtle-disclaimer">
        *All research involving human subjects was conducted following strict ethical guidelines.
      </div>

    </div>
  );
};

export default About;
