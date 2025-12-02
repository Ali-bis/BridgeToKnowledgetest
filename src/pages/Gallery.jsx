import React, { useState } from 'react';

const Gallery = () => {
  // Base images: 1-5 + Group Photo.
  const baseImages = [
    { id: 1, src: '/images/1.png', alt: 'Gallery Image 1', caption: '' },
    { id: 2, src: '/images/2.png', alt: 'Gallery Image 2', caption: '' },
    { id: 3, src: '/images/3.png', alt: 'Gallery Image 3', caption: '' },
    { id: 4, src: '/images/4.png', alt: 'Gallery Image 4', caption: '' },
    { id: 5, src: '/images/5.png', alt: 'Gallery Image 5', caption: '' },
    { id: 6, src: '/images/group.png', alt: 'Team Picture', caption: 'The Bridge to Knowledge Team' },
  ];

  // Auto-generate a list for potential images 6 to 20
  // Starts from 6.png so you don't miss any files between 5 and 7
  const autoImages = Array.from({ length: 15 }, (_, i) => {
    const num = i + 6;
    return {
      id: `auto-${num}`,
      src: `/images/${num}.png`,
      alt: `Gallery Image ${num}`,
      caption: '' 
    };
  });

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GALLERY</h1>
        <p>A visual journey of our research and interactions.</p>
      </div>

      <div className="gallery-grid">
        {/* 1. Render Base Images */}
        {baseImages.map((image) => (
          <StaticGalleryItem key={image.id} image={image} />
        ))}

        {/* 2. Render Auto Images (Only if they exist) */}
        {autoImages.map((image) => (
          <DynamicGalleryItem key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

// Component for known images
const StaticGalleryItem = ({ image }) => {
  return (
    <div className="highlight-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <img 
        src={image.src} 
        alt={image.alt} 
        loading="lazy" 
        style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }}
      />
      {/* Caption Box: Only for the team picture */}
      {image.src.includes('group.png') && image.caption && (
        <div style={{ padding: '1.5rem', textAlign: 'center', borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card)', flexGrow: 1 }}>
          <p style={{ margin: 0, color: 'var(--text-main)', fontWeight: 'bold', fontSize: '1.1rem' }}>{image.caption}</p>
        </div>
      )}
    </div>
  );
};

// Component for auto-generated images
const DynamicGalleryItem = ({ image }) => {
  // Default to true (show the box). If image fails, set to false (hide the box).
  const [isValid, setIsValid] = useState(true);

  if (!isValid) return null;

  return (
    <div className="highlight-card" style={{ padding: '0', overflow: 'hidden' }}>
      <img 
        src={image.src} 
        alt={image.alt} 
        style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }}
        onError={() => setIsValid(false)} // Hides the component if image 404s
      />
    </div>
  );
};

export default Gallery;
