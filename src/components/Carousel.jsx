import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div style={{textAlign:'center', padding:'2rem', color:'grey'}}>No images available</div>;
  }

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
      {/* IMAGE */}
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          backgroundImage: `url(${images[currentIndex].src})`, 
          backgroundPosition: 'center', 
          backgroundSize: 'cover',
          transition: 'background-image 0.5s ease-in-out'
        }} 
      />

      {/* OVERLAY CAPTION */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        background: 'rgba(0,0,0,0.7)',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
        backdropFilter: 'blur(4px)'
      }}>
        <p style={{ margin: 0, fontSize: '1rem' }}>{images[currentIndex].caption}</p>
      </div>

      {/* LEFT ARROW */}
      <button 
        onClick={prevSlide} 
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.5)',
          color: '#fff',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          zIndex: 10
        }}
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button 
        onClick={nextSlide} 
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.5)',
          color: '#fff',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          zIndex: 10
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
