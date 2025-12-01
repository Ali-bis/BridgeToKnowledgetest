import React from 'react';

const Gallery = () => {
  // UPDATED: Removed 4.png, renamed others to "Student Visit"
  const galleryImages = [
    { src: "BridgeToKnowledgetest/public/images/1.png", caption: "Student Visit" },
    { src: "/images/2.png", caption: "Student Visit" },
    { src: "/images/3.png", caption: "Student Visit" },
    { src: "/images/group.png", caption: "The Bridge to Knowledge Team" },
  ];

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GALLERY</h1>
        <p>Moments from our journey.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {galleryImages.map((item, index) => (
          <div key={index} className="highlight-card" style={{ padding: '0', overflow: 'hidden' }}>
            {/* 'objectFit: cover' ensures they all look uniform regardless of size */}
            <img 
              src={item.src} 
              alt={item.caption} 
              style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} 
            />
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
