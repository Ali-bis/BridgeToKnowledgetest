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

  const staticOptions = {
    events: [], 
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: textColor, font: { family: 'Inter' } },
      },
      tooltip: { enabled: false }
    },
    animation: { duration: 0 }
  };

  const barOptions = {
    ...staticOptions,
    scales: {
      y: { 
        ticks: { color: textColor }, 
        grid: { color: isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' } 
      },
      x: { 
        ticks: { color: textColor }, 
        grid: { display: false } 
      },
    }
  };

  // 1:60 in Public vs 1:25 in Private (Research PDF)
  const classSizeData = {
    labels: ['Private (~25)', 'Public (~60)'],
    datasets: [{
      data: [25, 60], 
      backgroundColor: ['#38bdf8', '#ec4899'], 
      borderColor: isLight ? '#ffffff' : '#1e293b',
      borderWidth: 2,
    }],
  };

  // Learning Outcomes: 50% Reading Gap, 72% Math Gap
  const learningData = {
    labels: ['Cannot Read (Gr 2)', 'Cannot Divide'],
    datasets: [{
      label: 'Grade 5 Deficit (%)',
      data: [50, 72.1], 
      backgroundColor: ['#f43f5e', '#f59e0b'], 
      borderRadius: 6,
    }],
  };

  return (
    <div className="container">
      <div className="hero-banner">
        <h1>IMPACT ANALYTICS</h1>
        <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
          Data-driven insights from UDISE+, ASER 2024, and our primary research.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="highlight-card" style={{borderColor: 'var(--primary)', textAlign: 'left'}}>
          <h3 style={{color: 'var(--primary)'}}>National Crisis</h3>
          <p><strong>47.4 Million</strong> children are out of school. <br/><strong>242 Million</strong> women have never attended school.</p>
        </div>
        <div className="highlight-card" style={{borderColor: 'var(--accent)', textAlign: 'left'}}>
          <h3 style={{ color: 'var(--accent)' }}>Mumbai Context</h3>
          <p><strong>10,820</strong> children identified as out-of-school in Mumbai.<br/><strong>7,806</strong> have never been enrolled at all.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        
        <div className="page-section" style={{textAlign: 'center'}}>
          <h3>Students Per Teacher</h3>
          <p style={{fontSize:'0.9rem', color:'var(--text-muted)', marginBottom:'1rem'}}>Public classrooms are overcrowded (1:60) vs Private (1:25).</p>
          <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
            <Doughnut key={chartKey} data={classSizeData} options={staticOptions} />
          </div>
        </div>

        <div className="page-section" style={{textAlign: 'center'}}>
          <h3>Learning Deficit (Grade 5)</h3>
          <p style={{fontSize:'0.9rem', color:'var(--text-muted)', marginBottom:'1rem'}}>% of students failing basic reading & math skills.</p>
          <div style={{ height: '300px' }}>
            <Bar key={chartKey} data={learningData} options={barOptions} />
          </div>
        </div>

      </div>

      <div className="subtle-disclaimer">
        Sources: UDISE+ 2023-24, ASER 2024 Report, PLFS Survey, & Mumbai Official Education Survey.
      </div>
    </div>
  );
};

export default Analytics;
