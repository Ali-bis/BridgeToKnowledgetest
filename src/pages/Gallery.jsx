import React from 'react';

const Gallery = () => {
  // 1. AUTO-IMPORT MAGIC
  // This searches the 'src/assets/images' folder for ANY image file
  const imageModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', { eager: true });

  // 2. Convert the messy import data into a clean list
  const galleryImages = Object.keys(imageModules).map((path) => {
    // 'path' looks like "../assets/images/1.png"
    const src = imageModules[path].default;
    
    // Extract just the filename for a simple caption (optional)
    // e.g., "1.png" -> "Image 1"
    const fileName = path.split('/').pop();
    
    // Special check for the team photo
    const isGroup = fileName.toLowerCase().includes('group');
    
    return {
      src: src,
      caption: isGroup ? "The Bridge to Knowledge Team" : "" // Only caption the group photo
    };
  });

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>GALLERY</h1>
        <p>Moments from our journey.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {galleryImages.length > 0 ? (
          galleryImages.map((item, index) => (
            <div key={index} className="highlight-card" style={{ padding: '0', overflow: 'hidden' }}>
              <img 
                src={item.src} 
                alt="Gallery" 
                style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} 
              />
              {/* Only show caption if it exists */}
              {item.caption && (
                <div style={{ padding: '1rem', textAlign: 'center' }}>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>{item.caption}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p style={{textAlign: 'center', color: 'var(--text-muted)'}}>
            No images found in src/assets/images/
          </p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
