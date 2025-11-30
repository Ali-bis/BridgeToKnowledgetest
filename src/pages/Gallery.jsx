import React from 'react';

const Gallery = () => {
  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GALLERY</h1>
        <p>Moments from our journey.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {/* Placeholder Images - Replace src with your real images later */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} style={{ background: '#1e293b', padding: '10px', borderRadius: '12px' }}>
            <img 
              src={`https://via.placeholder.com/300?text=Image+${item}`} 
              alt="Gallery" 
              style={{ width: '100%', borderRadius: '8px', display: 'block' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;