// src/pages/About.jsx

import React from 'react';
// We no longer need to import PlaceholderBanner
import adminData from '../admin.json'; 

function About({ data }) {
  return (
    <div className="container">
      <section className="page-section">
        <h2>About the Project</h2>
        <p>
          This project is part of the Global Perspectives (GP) Summit at Bombay International School. Our team of five students chose to focus on the theme of <strong>Poverty & Inequality</strong> by investigating the topic: <strong>"Access to Quality Education in Mumbai"</strong>.
        </p>
        <p>
          Our goal was not just to research, but to combine primary evidence with a meaningful action plan. We combined primary research (school visits, interviews, photographs) with secondary research (national statistics) and an action plan (digital-literacy workshops, a book drive, and fundraising).
        </p>
        <h3>Objectives & Research Questions</h3>
        <ul>
          <li>To investigate the core question: "Is the quality of education in Mumbai shaped by demographics and socio-economic background?"</li>
          <li>To compare the facilities, resources, and learning outcomes of public (BMC), private, and non-profit schools.</li>
          <li>To identify key areas of need, particularly in digital literacy and access to technology.</li>
          <li>To take direct action to help bridge the resource gap we identified.</li>
        </ul>
      </section>

      {/* --- THIS IS YOUR 4 + 2 LAYOUT --- */}
      <section className="page-section">
        <h2>Meet the Team</h2>
        
        {/* Row 1: 4 Members */}
        <div className="team-grid team-grid-4col">
          {data.team.slice(0, 4).map(member => (
            <div key={member.name} className="team-member">
              <img src={member.image} alt={member.name} className="team-icon" />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {/* Row 2: Ayush (at index 4) + Info Box */}
        <div className="team-grid team-grid-2col">
          <div key={data.team[4].name} className="team-member">
            <img src={data.team[4].image} alt={data.team[4].name} className="team-icon" />
            <h4>{data.team[4].name}</h4>
            <p>{data.team[4].role}</p>
          </div>
          
          <div className="team-description-box">
            <h3>We are Project Bridge to Knowledge!</h3>
            <p>
              We are committed to addressing the problem of access to quality education in Mumbai for different groups.
            </p>
            <p>
              We are excited to investigate the issue regarding the disparity in the access to Quality Education in Mumbai, and to take action to help solve the problem.
            </p>
            <p className="team-hashtag">
              #educationforall
            </p>
          </div>
        </div>
      </section>
      
      <section className="page-section">
        <h2>Ethics & Permissions</h2>
        <p>
          All research involving human subjects was conducted following strict ethical guidelines. We obtained permissions from school administrators before visiting, and all student interviews were conducted only after receiving informed consent. All photographic evidence published on this site has been approved for use.
        </p>
        
        {/* --- REPLACED PlaceholderBanner with this .info-box --- */}
        <div className="info-box">
          <strong>Note:</strong> Detailed permission letters and consent forms will be uploaded here as a downloadable pack upon project completion.
        </div>
      </section>
    </div>
  );
}

export default About;