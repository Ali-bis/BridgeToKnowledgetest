import React from 'react';

const Gallery = () => {
  const galleryImages = [
    { src: "/images/1.png", caption: "" }, // No caption
    { src: "/images/2.png", caption: "" }, // No caption
    { src: "/images/3.png", caption: "" }, // No caption
    { src: "/images/group.png", caption: "The Bridge to Knowledge Team" }, // Keep this one
  ];

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GALLERY</h1>
        <p>Moments from our journey.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {galleryImages.map((item, index) => (
          <div key={index} className="highlight-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img 
              src={item.src} 
              alt="Gallery" 
              style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block', flexGrow: 1 }} 
            />
            
            {/* LOGIC: Only render this box if there is text. Otherwise, it disappears. */}
            {item.caption && (
              <div style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
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
