import React, { useState } from 'react';

// A smart component that only renders if the image exists
const GalleryImage = ({ src, caption }) => {
  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <div className="highlight-card" style={{ padding: '0', overflow: 'hidden' }}>
      <img 
        src={src} 
        alt={caption} 
        style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }}
        onError={() => setIsVisible(false)} // Hides itself if image is missing
      />
      {/* Only show caption if it has text */}
      {caption && (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>{caption}</p>
        </div>
      )}
    </div>
  ) : null;
};

const Gallery = () => {
  // CONFIG: How many numbered images do you want to support? (e.g., 1 to 50)
  const imageCount = 50; 
  const numberedImages = Array.from({ length: imageCount }, (_, i) => i + 1);

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GALLERY</h1>
        <p>Moments from our journey.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* 1. AUTO-LOADER for 1.png to 50.png */}
        {numberedImages.map((num) => (
          <GalleryImage 
            key={num} 
            src={`/images/${num}.png`} 
            caption="" // No caption as requested
          />
        ))}

        {/* 2. MANUAL ADDITIONS (Like the Group Photo) */}
        <GalleryImage 
          src="/images/group.png" 
          caption="The Bridge to Knowledge Team" 
        />

      </div>
    </div>
  );
};

export default Gallery;
