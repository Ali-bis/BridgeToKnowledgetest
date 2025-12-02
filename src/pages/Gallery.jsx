import React, { useState } from 'react';

// Smart Component: Only shows the image if it loads successfully
const GalleryImage = ({ src, caption }) => {
  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <div className="highlight-card" style={{ padding: '0', overflow: 'hidden' }}>
      <img 
        src={src} 
        alt="Gallery" 
        style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }}
        onError={() => setIsVisible(false)} // Magically hides if file doesn't exist
      />
      {/* Only show caption box if text is provided */}
      {caption && (
        <div style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>{caption}</p>
        </div>
      )}
    </div>
  ) : null;
};

const Gallery = () => {
  // 1. AUTO-LOADER: Tries to find images numbered 1 to 20
  // If you upload "6.png", it will automatically appear!
  const numberedImages = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GALLERY</h1>
        <p>Moments from our journey.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* 1. Numbered Images (No Caption) */}
        {numberedImages.map((num) => (
          <GalleryImage 
            key={num} 
            src={`/images/${num}.png`} 
            caption="" 
          />
        ))}

        {/* 2. Team Photo (With Caption) */}
        <GalleryImage 
          src="/images/group.png" 
          caption="The Bridge to Knowledge Team" 
        />

      </div>
    </div>
  );
};

export default Gallery;
