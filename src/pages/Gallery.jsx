import React, { useState } from 'react';

const Gallery = () => {
  // Base images: Removed captions for 1-5 as requested. Only keeping it for the group image.
  const baseImages = [
    { id: 1, src: '/images/1.png', alt: 'Gallery Image 1', caption: '' },
    { id: 2, src: '/images/2.png', alt: 'Gallery Image 2', caption: '' },
    { id: 3, src: '/images/3.png', alt: 'Gallery Image 3', caption: '' },
    { id: 4, src: '/images/4.png', alt: 'Gallery Image 4', caption: '' },
    { id: 5, src: '/images/5.png', alt: 'Gallery Image 5', caption: '' },
    { id: 6, src: '/images/group.png', alt: 'Team Picture', caption: 'Our team at the school visit.' },
  ];

  // Auto-generate a list for potential images 7 to 20
  const autoImages = Array.from({ length: 14 }, (_, i) => {
    const num = i + 7;
    return {
      id: num,
      src: `/images/${num}.png`,
      alt: `Gallery Image ${num}`,
      caption: '' // No caption for auto-added images
    };
  });

  const allPotentialImages = [...baseImages, ...autoImages];

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GALLERY</h1>
        <p>A visual journey of our research and interactions.</p>
      </div>

      <div className="gallery-grid">
        {allPotentialImages.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

// Sub-component to handle image loading errors gracefully
const GalleryItem = ({ image }) => {
  // 'loading' | 'loaded' | 'error'
  const [status, setStatus] = useState('loading');

  // If error, don't render anything (removes the box completely)
  if (status === 'error') return null;

  return (
    <div 
      className="gallery-item" 
      // Hide the container while loading so empty white boxes don't show up.
      style={status === 'loading' ? { display: 'none' } : {}}
    >
      <img 
        src={image.src} 
        alt={image.alt} 
        loading="lazy" 
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')} 
      />
      
      {/* Conditionally render the caption div ONLY if:
         1. The image source is the group image (specific request)
         OR
         2. The caption is not an empty string (general safety)
      */}
      {image.src === '/images/group.png' && image.caption && (
        <div className="caption">{image.caption}</div>
      )}
    </div>
  );
};

export default Gallery;
