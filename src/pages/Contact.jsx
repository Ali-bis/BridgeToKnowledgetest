import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GET IN TOUCH</h1>
        <p>Have questions or want to contribute? Reach out to us.</p>
      </div>

      <div className="page-section" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>Name</label>
            <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: 'none' }} placeholder="Your Name" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>Email</label>
            <input type="email" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: 'none' }} placeholder="Your Email" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>Message</label>
            <textarea rows="5" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: 'none' }} placeholder="How can we help?"></textarea>
          </div>
          <button className="btn" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;