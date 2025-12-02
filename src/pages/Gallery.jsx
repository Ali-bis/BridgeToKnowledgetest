import React, { useState } from 'react';

const Gallery = () => {
  // Your base images with specific captions
  const baseImages = [
    { id: 1, src: '/images/1.png', alt: 'Gallery Image 1', caption: 'Caption for image 1' },
    { id: 2, src: '/images/2.png', alt: 'Gallery Image 2', caption: 'Caption for image 2' },
    { id: 3, src: '/images/3.png', alt: 'Gallery Image 3', caption: 'Caption for image 3' },
    { id: 4, src: '/images/4.png', alt: 'Gallery Image 4', caption: 'Caption for image 4' },
    { id: 5, src: '/images/5.png', alt: 'Gallery Image 5', caption: 'Caption for image 5' },
    { id: 6, src: '/images/group.png', alt: 'Team Picture', caption: 'Our team at the school visit.' },
  ];

  // Auto-generate a list for potential images 7 to 20
  // If you upload 7.png, 8.png etc., they will be checked
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
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="gallery-item">
      <img 
        src={image.src} 
        alt={image.alt} 
        loading="lazy" 
        onError={() => setIsVisible(false)} // Hides the box if image fails to load
      />
      {/* Only show caption for the group image */}
      {image.src === '/images/group.png' && (
        <div className="caption">{image.caption}</div>
      )}
    </div>
  );
};

export default Gallery;
