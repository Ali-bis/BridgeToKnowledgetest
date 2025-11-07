import React from 'react';

function PlaceholderBanner({ children }) {
  return (
    <div className="placeholder-banner">
      <strong>Needs Confirmation:</strong> {children}
    </div>
  );
}

export default PlaceholderBanner;