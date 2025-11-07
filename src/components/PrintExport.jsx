import React from 'react';

function PrintExport() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-export-container">
      <button 
        className="print-export-btn" 
        onClick={handlePrint}
        title="Export Project Report (PDF)"
        aria-label="Export Project Report (PDF)"
      >
        &#128424;
      </button>
    </div>
  );
}

export default PrintExport;