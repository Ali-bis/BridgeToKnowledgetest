import React from 'react';
import PlaceholderBanner from '../components/PlaceholderBanner';

function Gallery({ data }) {
  return (
    <div className="container">
      <section className="page-section">
        <h2>Evidence Gallery</h2>
        <p>
          This gallery contains primary evidence (photographs) collected during our school visits. All images are used with permission.
        </p>
        <PlaceholderBanner>
          More photos from our school visits and digital literacy workshops will be uploaded here as they are completed.
        </PlaceholderBanner>

        <div className="gallery-grid" style={{marginTop: '2rem'}}>
          {data.gallery.map(item => (
            <figure key={item.id} className="gallery-item">
              <img src={item.src} alt={item.caption} />
              <figcaption>
                <p>{item.caption}</p>
                <span><strong>Category:</strong> {item.category}</span>
                <span><strong>Permission:</strong> {item.permission ? 'Obtained' : 'Pending'}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        
        <div className="btn-group" style={{marginTop: '2rem'}}>
           <a href="#" className="btn btn-secondary" onClick={(e) => e.preventDefault()}>
             Download Evidence Pack (ZIP) [Coming Soon]
           </a>
        </div>
      </section>
    </div>
  );
}

export default Gallery;