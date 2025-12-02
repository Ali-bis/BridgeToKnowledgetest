import React from 'react';

const Gallery = () => {
  const galleryImages = [
    { src: "/images/1.png", caption: "" }, // Caption removed
    { src: "/images/2.png", caption: "" }, // Caption removed
    { src: "/images/3.png", caption: "" }, // Caption removed
    { src: "/images/group.png", caption: "The Bridge to Knowledge Team" }, // Kept
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
            <img 
              src={item.src} 
              alt="Gallery Image" 
              style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} 
            />
            {/* Only show this box if a caption exists */}
            {item.caption && (
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>{item.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
