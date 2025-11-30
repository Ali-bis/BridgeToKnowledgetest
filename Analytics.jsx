import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Analytics = () => {
  // --- DATA FROM YOUR CSV & OBSERVATIONS ---
  
  // Chart 1: Class Size (Private Schools have small classes)
  const classSizeData = {
    labels: ['< 25 Students', '25-35 Students', '> 45 Students'],
    datasets: [{
      data: [70, 20, 10], 
      backgroundColor: ['#38bdf8', '#0ea5e9', '#1e293b'], 
      borderColor: '#0f172a',
      borderWidth: 2,
    }],
  };

  // Chart 2: Device Access (The Gap)
  const resourceData = {
    labels: ['Private Schools (Survey)', 'Love Grove MPS (Observed)'],
    datasets: [{
      label: 'Access to Personal Devices (%)',
      data: [90, 10], 
      backgroundColor: ['#f472b6', '#334155'], 
      borderRadius: 8,
    }],
  };

  const commonOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#e2e8f0', font: { family: 'Inter' } } },
    },
    scales: {
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
      x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
    },
  };

  return (
    <div className="container" style={{paddingTop: '4rem'}}>
      {/* Header */}
      <div className="hero-banner" style={{ display: 'block', textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ margin: 0, fontSize: '4rem' }}>IMPACT ANALYTICS</h1>
        <p style={{ margin: '1rem auto', color: '#94a3b8' }}>Visualizing the "Bridge to Knowledge" Data Gap</p>
      </div>

      {/* Narrative Section */}
      <section className="page-section">
        <h2 style={{border: 'none', paddingLeft: 0}}>The Findings</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="info-box" style={{ background: 'rgba(56, 189, 248, 0.05)', borderColor: '#38bdf8' }}>
            <h3 style={{ marginTop: 0, color: '#38bdf8' }}>Private Sector (Survey)</h3>
            <p>Our survey of international schools reveals a resource-rich environment. <strong>70%</strong> of classes have fewer than 25 students, and <strong>90%</strong> of students have immediate access to personal laptops/tablets.</p>
          </div>

          <div className="info-box" style={{ background: 'rgba(244, 114, 182, 0.05)', borderColor: '#f472b6' }}>
            <h3 style={{ marginTop: 0, color: '#f472b6' }}>Public Sector (Love Grove)</h3>
            <p><strong>Observation:</strong> Despite high potential, students at Love Grove Pumping MPS face a critical lack of resources. A significant disparity was the language barrier: while designated English-Medium, the functional language remains Hindi.</p>
          </div>
        
        </div>
      </section>

      {/* Charts Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        
        <div className="page-section" style={{ margin: 0 }}>
          <h3 style={{ marginTop: 0, textAlign: 'center' }}>Class Size Distribution</h3>
          <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>Private schools prioritize low student-teacher ratios.</p>
          <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
            <Doughnut data={classSizeData} options={{ plugins: { legend: { labels: { color: 'white' } } } }} />
          </div>
        </div>

        <div className="page-section" style={{ margin: 0 }}>
          <h3 style={{ marginTop: 0, textAlign: 'center' }}>The Digital Divide</h3>
          <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>% of students with personal learning devices.</p>
          <div style={{ height: '300px' }}>
            <Bar data={resourceData} options={commonOptions} />
          </div>
        </div>

      </section>
    </div>
  );
};

export default Analytics;