import React from 'react';

function Speakers({ data }) {
  return (
    <div className="container">
      <section className="page-section">
        <h2>Advisors & Mentors</h2>
        <p>
          This project would not have been possible without the guidance and support of our teachers and school advisors.
        </p>
        <div className="team-grid">
          {data.advisors.map(advisor => (
            <div key={advisor.name} className="team-member">
              <h4>{advisor.name}</h4>
              <p>{advisor.role}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="page-section">
        <h2>Proposed Speakers / Guests</h2>
        <p>
          While our project did not involve formal guest speakers, we would propose inviting experts from the following fields for a future summit to broaden the discussion:
        </p>
        <ul>
          <li>An administrator or principal from a BMC school.</li>
          <li>A policy-maker from the Brihanmumbai Municipal Corporation (BMC) education department.</li>
          <li>A representative from a non-profit organization working on education equity in Mumbai (e.g., Akanksha Foundation).</li>
        </ul>
      </section>
    </div>
  );
}

export default Speakers;