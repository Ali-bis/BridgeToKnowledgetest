import React from 'react';

const Action = () => {
  return (
    <div className="container">
      
      {/* HERO SECTION */}
      <div className="hero-banner">
        <h1>OUR ACTION PLAN</h1>
        <p>From research to real-world impact. Deadline: November 27, 2025.</p>
      </div>

      {/* INTRO */}
      <div className="page-section">
        <p style={{ fontSize: '1.1rem' }}>
          Based on our research, we developed a multi-part action plan to address the resource and skills gaps we identified.
        </p>
      </div>

      {/* NEW SECTION: DATA COLLECTION (Google Forms & Interviews) */}
      <div className="page-section" style={{ borderLeft: '4px solid #ec4899' }}>
        <h2 style={{ color: '#ec4899' }}>Benchmarking: Private School Data</h2>
        <p>
          Before intervening, we needed a benchmark. We conducted a <strong>Google Forms survey</strong> and structured interviews with students from Mumbai's leading private and international schools.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
          <div className="info-box">
            <h4 style={{ color: '#ec4899' }}>The Survey</h4>
            <p style={{ fontSize: '0.9rem' }}>
              We collected data on class sizes, device availability, and teacher attention from students at schools like Don Bosco, Oberoi International, and Aditya Birla World Academy.
            </p>
          </div>
          <div className="info-box">
            <h4 style={{ color: '#ec4899' }}>The Insight</h4>
            <p style={{ fontSize: '0.9rem' }}>
              This data confirmed a "Resource Surplus" in private schools (90% device access), which highlighted the severity of the deficit in the public schools we visited later.
            </p>
          </div>
        </div>
      </div>

      {/* PART 1: WORKSHOPS */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '2rem' }}>
          Part 1: Digital Literacy Workshops
        </h2>
        
        {/* CAROUSEL PLACEHOLDER */}
        <div style={{ 
          background: '#1e293b', 
          border: '2px dashed #38bdf8', 
          borderRadius: '12px', 
          height: '300px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '2rem',
          position: 'relative'
        }}>
          <span style={{ fontSize: '2rem', color: '#38bdf8', cursor: 'pointer', position: 'absolute', left: '20px' }}>❮</span>
          <p style={{ color: '#94a3b8' }}>[Image Carousel: Students learning Canva & PPT]</p>
          <span style={{ fontSize: '2rem', color: '#38bdf8', cursor: 'pointer', position: 'absolute', right: '20px' }}>❯</span>
        </div>

        <div style={{ display: 'grid', mdGridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3 style={{ color: '#38bdf8' }}>Objective</h3>
            <p>To teach essential digital skills to students in public (BMC) schools to help solve the problem of access to quality digital education.</p>
          </div>
          <div>
            <h3 style={{ color: '#38bdf8' }}>Lesson Plan</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#fff' }}>Canva:</strong> How to create basic posters, presentations, and graphics.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#fff' }}>PowerPoint/Slides:</strong> How to build a simple presentation, add images, and present information.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#fff' }}>Basic E-Skills:</strong> Safe searching, email etiquette, and using online forms.
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px' }}>
          <strong>Needs Confirmation:</strong> More student feedback from the workshops will be added here after they are completed.
        </div>
      </div>

      {/* PART 2: FUNDRAISING */}
      <div className="page-section">
        <h2 style={{ borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '2rem' }}>
          Part 2: Fundraising
        </h2>
        <p>
          Our primary research identified a critical lack of access to technology. Our fundraising efforts are designed to provide devices (tablets) to students at under-resourced schools.
        </p>

        {/* Ketto Section */}
        <div style={{ background: '#0f172a', padding: '2rem', borderRadius: '12px', border: '1px solid #334155', marginBottom: '2rem', textAlign: 'center' }}>
          <h3 style={{ marginTop: 0 }}>Online Fundraiser (Ketto)</h3>
          <p>We have launched an online fundraiser to collect donations. These funds will be used to purchase tablets.</p>
          <button className="btn" style={{ marginTop: '1rem' }}>Donate Now on Ketto</button>
        </div>

        {/* Why Tablets Section */}
        <div style={{ marginBottom: '3rem' }}>
          <h3>Why Tablets?</h3>
          <p>Based on our research, these are the cost-effective tools we aim to provide:</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <div className="info-box" style={{ flex: 1, textAlign: 'center' }}>
              <h4 style={{ color: '#fff' }}>Lenovo Tab</h4>
              <p style={{ fontSize: '1.2rem', color: '#38bdf8', fontWeight: 'bold' }}>₹9.5k</p>
              <span style={{ color: '#22c55e' }}>53% Discount</span>
            </div>
            <div className="info-box" style={{ flex: 1, textAlign: 'center' }}>
              <h4 style={{ color: '#fff' }}>HONOR Pad</h4>
              <p style={{ fontSize: '1.2rem', color: '#38bdf8', fontWeight: 'bold' }}>₹10k</p>
              <span style={{ color: '#22c55e' }}>50% Discount</span>
            </div>
            <div className="info-box" style={{ flex: 1, textAlign: 'center' }}>
              <h4 style={{ color: '#fff' }}>Motorola Tab</h4>
              <p style={{ fontSize: '1.2rem', color: '#38bdf8', fontWeight: 'bold' }}>₹13k</p>
              <span style={{ color: '#22c55e' }}>18% Discount</span>
            </div>
          </div>
        </div>

        {/* Bake Sale Table */}
        <div>
          <h3>Bake Sale (Nov 11, 2025)</h3>
          <p>We held an in-school bake sale to raise funds. This event was proposed and approved by school leadership, following all protocols.</p>
          
          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#1e293b', textAlign: 'left' }}>
                  <th style={{ padding: '12px', borderBottom: '2px solid #334155' }}>Product</th>
                  <th style={{ padding: '12px', borderBottom: '2px solid #334155' }}>Price</th>
                  <th style={{ padding: '12px', borderBottom: '2px solid #334155' }}>Person Responsible</th>
                  <th style={{ padding: '12px', borderBottom: '2px solid #334155' }}>Homemade?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155' }}>Pizza</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155', color: '#38bdf8' }}>₹100</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155' }}>Ayush</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155', color: '#ef4444' }}>No</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155' }}>Popsicles</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155', color: '#38bdf8' }}>₹50</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155' }}>Raghav</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155', color: '#ef4444' }}>No</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155' }}>Brownies</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155', color: '#38bdf8' }}>₹50</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155' }}>Shai</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155', color: '#22c55e' }}>Yes</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155' }}>Cookies</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155', color: '#38bdf8' }}>₹50</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155' }}>Sumer</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155', color: '#22c55e' }}>Yes</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155' }}>Tang</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155', color: '#38bdf8' }}>₹20</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155' }}>Ali</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #334155', color: '#22c55e' }}>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Action;