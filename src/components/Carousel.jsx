// src/components/Carousel.jsx
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="carousel-empty">No images to display.</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].caption} 
          className="carousel-image" 
        />
        <div className="carousel-caption">
          {images[currentIndex].caption}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="carousel-btn prev-btn">
        &#10094;
      </button>
      <button onClick={nextSlide} className="carousel-btn next-btn">
        &#10095;
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
