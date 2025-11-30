import React from 'react';

const Action = () => {
  return (
    <div className="container">
      <div className="hero-banner">
        <h1>OUR ACTION PLAN</h1>
        <p>From research to real-world impact. Deadline: November 27, 2025.</p>
      </div>

      {/* ... (Workshops section same as before) ... */}

      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          PART 2: FUNDRAISING
        </h2>
        
        <div className="highlight-card">
          <h3 style={{ marginTop: 0 }}>Online Fundraiser</h3>
          <p>We are preparing to launch an online fundraiser. These funds will be used to purchase Soundbars and Projectors for the classrooms.</p>
          <button className="btn btn-disabled" style={{ marginTop: '1rem' }} disabled>
            Fundraiser Coming Soon
          </button>
        </div>
        
        {/* ... (Soundbars/Projectors section same as before) ... */}
      </div>
    </div>
  );
};

export default Action;
