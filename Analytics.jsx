import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Analytics = () => {
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    const observer = new MutationObserver(() => setChartKey(prev => prev + 1));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const textColor = isLight ? '#0f172a' : '#f8fafc';

  const classSizeData = {
    labels: ['< 25 Students', '25-35 Students', '> 45 Students'],
    datasets: [{
      data: [70, 20, 10], 
      // Changed 3rd color to Grey (#64748b) for visibility
      backgroundColor: ['#38bdf8', '#0ea5e9', '#64748b'], 
      borderColor: isLight ? '#ffffff' : '#0f172a',
      borderWidth: 2,
    }],
  };

  const resourceData = {
    labels: ['Private Schools', 'Partnered Municipal School'],
    datasets: [{
      label: 'Digital Access (%)',
      data: [90, 10], 
      backgroundColor: ['#ec4899', '#334155'], 
      borderRadius: 6,
    }],
  };

  const commonOptions = {
    responsive: true,
    plugins: { legend: { position: 'bottom', labels: { color: textColor, font: { family: 'Inter' } } } },
    scales: {
      y: { ticks: { color: textColor }, grid: { color: isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' } },
      x: { ticks: { color: textColor }, grid: { display: false } },
    },
  };

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>IMPACT ANALYTICS</h1>
        <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
          Data-driven insights comparing Private Institutions vs. Public Reality.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="highlight-card" style={{borderColor: 'var(--primary)'}}>
          <h3 style={{color: 'var(--primary)'}}>The Private Standard</h3>
          <p><strong>70%</strong> of private classes have fewer than 25 students, allowing for personalized mentorship.</p>
        </div>
        <div className="highlight-card" style={{borderColor: 'var(--accent)'}}>
          <h3 style={{ color: 'var(--accent)' }}>The Public Reality</h3>
          <p><strong>Observation:</strong> Our Partnered Municipal School faces a 90% deficit in personal tech access compared to private counterparts.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="page-section" style={{textAlign: 'center'}}>
          <h3>Class Size</h3>
          <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
            <Doughnut key={chartKey} data={classSizeData} options={{ plugins: { legend: { labels: { color: textColor } } } }} />
          </div>
        </div>
        <div className="page-section" style={{textAlign: 'center'}}>
          <h3>Digital Access</h3>
          <div style={{ height: '300px' }}>
            <Bar key={chartKey} data={resourceData} options={commonOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
