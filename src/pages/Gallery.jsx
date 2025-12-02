import React, { useState, useEffect } from 'react';

const Gallery = () => {
  // Base images: 1-6. We assume these exist, so we render them immediately.
  const baseImages = [
    { id: 1, src: '/images/1.png', alt: 'Gallery Image 1', caption: '' },
    { id: 2, src: '/images/2.png', alt: 'Gallery Image 2', caption: '' },
    { id: 3, src: '/images/3.png', alt: 'Gallery Image 3', caption: '' },
    { id: 4, src: '/images/4.png', alt: 'Gallery Image 4', caption: '' },
    { id: 5, src: '/images/5.png', alt: 'Gallery Image 5', caption: '' },
    { id: 6, src: '/images/group.png', alt: 'Team Picture', caption: 'The Bridge to Knowledge Team' },
  ];

  // Auto-generate a list for potential images 7 to 20
  const autoImages = Array.from({ length: 14 }, (_, i) => {
    const num = i + 7;
    return {
      id: num,
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
        {/* 1. Render Base Images Immediately (No waiting) */}
        {baseImages.map((image) => (
          <StaticGalleryItem key={image.id} image={image} />
        ))}

        {/* 2. Render Auto Images Only If They Exist (Prevents white boxes) */}
        {autoImages.map((image) => (
          <DynamicGalleryItem key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

// Component for known images (1-6) - Renders immediately
const StaticGalleryItem = ({ image }) => {
  return (
    <div className="gallery-item">
      <img 
        src={image.src} 
        alt={image.alt} 
        loading="lazy" 
      />
      {/* Strict Caption Check: Only for group.png */}
      {image.src.includes('group.png') && image.caption && (
        <div className="caption">{image.caption}</div>
      )}
    </div>
  );
};

// Component for auto-generated images (7-20) - Checks existence first
const DynamicGalleryItem = ({ image }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => setIsVisible(true);
    img.onerror = () => setIsVisible(false);
  }, [image.src]);

  // If image doesn't exist yet, render NOTHING (no white box)
  if (!isVisible) return null;

  return (
    // FIXED: Added the wrapper div "gallery-item" to restore the box styling
    <div className="gallery-item">
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default Gallery;
