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

  // STRICTLY DISABLE INTERACTIONS
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

  // DATA FROM RESEARCH: Public schools ~60 students/teacher vs Private ~20-25
  const classSizeData = {
    labels: ['Private Schools (~25)', 'Public Schools (~60)'],
    datasets: [{
      data: [25, 60], 
      backgroundColor: ['#38bdf8', '#ec4899'], 
      borderColor: isLight ? '#ffffff' : '#1e293b',
      borderWidth: 2,
    }],
  };

  // DATA FROM RESEARCH: Internet Usage Gap (37% Urban vs 13% Rural/Underprivileged)
  const resourceData = {
    labels: ['Urban Private Access', 'Underprivileged Access'],
    datasets: [{
      label: 'Internet Usage (%)',
      data: [37, 13], 
      backgroundColor: ['#38bdf8', '#334155'], 
      borderRadius: 6,
    }],
  };

  // DATA FROM RESEARCH: Learning Outcomes Gap
  const learningData = {
    labels: ['Cannot Read (Gr 2 Text)', 'Cannot Do Division'],
    datasets: [{
      label: 'Grade 5 Students (%)',
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
          Data-driven insights comparing Private Institutions vs. Public Reality based on our Secondary Research.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="highlight-card" style={{borderColor: 'var(--primary)', textAlign: 'left'}}>
          <h3 style={{color: 'var(--primary)'}}>The Resource Gap</h3>
          <p><strong>12x Difference:</strong> Annual spending per student in Urban Private schools (₹31,782) is over 12 times higher than in Rural Government schools (₹2,639).</p>
        </div>
        <div className="highlight-card" style={{borderColor: 'var(--accent)', textAlign: 'left'}}>
          <h3 style={{ color: 'var(--accent)' }}>The Learning Crisis</h3>
          <p><strong>Observation:</strong> Despite high enrollment, 73% of students do not make it to college, and half cannot read at a basic level by Grade 5.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Class Size */}
        <div className="page-section" style={{textAlign: 'center'}}>
          <h3>Students Per Teacher</h3>
          <p style={{fontSize:'0.9rem', color:'var(--text-muted)', marginBottom:'1rem'}}>Public classrooms are often overcrowded (1:60) compared to private (1:25).</p>
          <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
            <Doughnut key={chartKey} data={classSizeData} options={staticOptions} />
          </div>
        </div>

        {/* Learning Gap */}
        <div className="page-section" style={{textAlign: 'center'}}>
          <h3>Grade 5 Learning Deficit</h3>
          <p style={{fontSize:'0.9rem', color:'var(--text-muted)', marginBottom:'1rem'}}>Percentage of students failing basic competencies.</p>
          <div style={{ height: '300px' }}>
            <Bar key={chartKey} data={learningData} options={barOptions} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;
