import React, { useState, useEffect } from 'react';

const Gallery = () => {
  // Base images: 1-5 have NO captions. 6 (Group) has a caption.
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
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const img = new Image();
    img.src = image.src;
    
    img.onload = () => setStatus('loaded');
    img.onerror = () => setStatus('error');
    
    // Cleanup to avoid memory leaks if component unmounts
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [image.src]);

  // If loading or error, render NOTHING.
  // This prevents empty boxes for missing images.
  if (status !== 'loaded') return null;

  return (
    <div className="gallery-item">
      <img 
        src={image.src} 
        alt={image.alt} 
      />
      
      {/* STRICT CAPTION LOGIC:
          Only render this div if:
          1. The image is specifically the group image
          2. AND the caption text is not empty.
      */}
      {image.src.includes('group.png') && image.caption && (
        <div className="caption">{image.caption}</div>
      )}
    </div>
  );
};

export default Gallery;
