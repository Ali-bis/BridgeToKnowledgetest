import React from 'react';

const Action = () => {
  return (
    <div className="container">
      <div className="hero-banner">
        <h1>OUR ACTION PLAN</h1>
        <p>From research to real-world impact. Deadline: November 27, 2025.</p>
      </div>

      {/* ... (Keep your Workshops section here from previous if needed) ... */}

      {/* PART 2: FUNDRAISING */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          Part 2: Fundraising
        </h2>
        <p>
          Our primary research identified a critical lack of access to technology. Our fundraising efforts are designed to provide devices (tablets) to students at under-resourced schools.
        </p>

        {/* Updated Ketto Section */}
        <div style={{ background: 'var(--bg-body)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '2rem', textAlign: 'center' }}>
          <h3 style={{ marginTop: 0 }}>Online Fundraiser</h3>
          <p>We are preparing to launch an online fundraiser. These funds will be used to purchase tablets.</p>
          
          {/* DISABLED BUTTON */}
          <button className="btn btn-disabled" style={{ marginTop: '1rem' }} disabled>
            Fundraiser Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Action;
