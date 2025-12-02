import React, { useState, useEffect } from 'react';

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
    <div className="gallery-card">
      <img 
        src={image.src} 
        alt={image.alt} 
        loading="lazy" 
      />
      {/* Caption Box: Only render if a caption exists (like for the team photo) */}
      {image.caption && (
        <div className="gallery-caption">
          {image.caption}
        </div>
      )}
    </div>
  );
};

// Component for auto-generated images
const DynamicGalleryItem = ({ image }) => {
  const [status, setStatus] = useState('loading'); // loading, loaded, error

  useEffect(() => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => setStatus('loaded');
    img.onerror = () => setStatus('error');
  }, [image.src]);

  // If image fails to load, do not render ANYTHING
  if (status === 'error') return null;

  return (
    <div className="gallery-card">
      {status === 'loaded' ? (
        <img 
          src={image.src} 
          alt={image.alt} 
        />
      ) : (
        // Placeholder skeleton while loading
        <div style={{ width: '100%', height: '300px', backgroundColor: 'var(--bg-body)', opacity: 0.5 }} />
      )}
    </div>
  );
};

export default Gallery;
