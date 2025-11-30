import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Analytics = () => {
  // New Feature: Alert function for the button
  const handleDownload = () => {
    alert("Downloading Full Impact Report PDF...");
  };

  // Data
  const classSizeData = {
    labels: ['< 25 Students', '25-35 Students', '> 45 Students'],
    datasets: [{
      data: [70, 20, 10], 
      backgroundColor: ['#38bdf8', '#0ea5e9', '#1e293b'], 
      borderColor: '#0f172a',
      borderWidth: 2,
    }],
  };

  const resourceData = {
    labels: ['Private Schools', 'Love Grove MPS'],
    datasets: [{
      label: 'Digital Access (%)',
      data: [90, 10], 
      backgroundColor: ['#ec4899', '#334155'], 
      borderRadius: 6,
    }],
  };

  const commonOptions = {
    responsive: true,
    plugins: { legend: { position: 'bottom', labels: { color: '#cbd5e1' } } },
    scales: {
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
      x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
    },
  };

  return (
    <div className="container" style={{paddingTop: '2rem'}}>
      <div className="hero-banner">
        <h1>IMPACT ANALYTICS</h1>
        <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
          Data-driven insights comparing Private Institutions vs. Public Reality.
        </p>
        
        {/* NEW FEATURE: DOWNLOAD BUTTON */}
        <button onClick={handleDownload} className="btn" style={{ marginTop: '1rem' }}>
          Download Full Report
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="info-box">
          <h3>The Private Standard</h3>
          <p><strong>70%</strong> of private classes have fewer than 25 students, allowing for personalized mentorship.</p>
        </div>
        <div className="info-box" style={{ borderColor: '#ec4899' }}>
          <h3 style={{ color: '#ec4899' }}>The Public Reality</h3>
          <p><strong>Observation:</strong> Love Grove MPS faces a 90% deficit in personal tech access compared to private counterparts.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="page-section">
          <h3 style={{textAlign:'center', fontSize: '1.5rem'}}>Class Size</h3>
          <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
            <Doughnut data={classSizeData} options={{ plugins: { legend: { labels: { color: 'white' } } } }} />
          </div>
        </div>
        <div className="page-section">
          <h3 style={{textAlign:'center', fontSize: '1.5rem'}}>Digital Access</h3>
          <div style={{ height: '300px' }}>
            <Bar data={resourceData} options={commonOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;