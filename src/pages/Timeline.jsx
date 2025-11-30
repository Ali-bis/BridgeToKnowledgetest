import React from 'react';

const timelineEvents = [
  { date: "Oct 10, 2025", title: "Team Formation", description: "Our team was formed and we debated potential themes, shortlisting Education for All & Poverty and Inequality.", side: "left" },
  { date: "Oct 16, 2025", title: "Topic Finalised", description: "We finalised our topic: 'Disparity in the Access to Quality of Education in Mumbai,' incorporating digital literacy as a key action.", side: "right" },
  { date: "Oct 29, 2025", title: "Detailed Planning", description: "Held a Zoom call to plan our action: school visits, student interviews, and a book drive.", side: "left" },
  { date: "Oct 31, 2025", title: "Plan Revision: Fundraiser", description: "Revised our plan to include a Ketto fundraiser and a school bake sale to raise funds for laptops/tablets.", side: "right" },
  { date: "Nov 1, 2025", title: "Seeking Permissions", description: "Contacted teachers to get permission for school visits, social media campaigns, and NGO recommendations.", side: "left" },
  { date: "Nov 3, 2025", title: "Bake Sale Proposal", description: "Submitted a formal proposal to the Head of Student Life for our bake sale. Attended meetings to finalise the action plan.", side: "right" },
  { date: "Nov 11, 2025", title: "Bake Sale (Planned)", description: "Date finalised for the in-school bake sale to raise funds.", side: "left" },
  { date: "TBD", title: "School Visits & Workshops", description: "Primary research visits to BMC and private schools, and digital literacy workshops (Canva, PPT) to be conducted.", side: "right" },
  { date: "Nov 27, 2025", title: "Final Action Deadline", description: "Deadline for all research, action, and project documentation to be completed for the summit.", side: "left" },
];

const Timeline = () => {
  return (
    <div className="container">
      {/* Hero Header */}
      <div className="hero-banner">
        <h1>PROJECT TIMELINE</h1>
        <p>Key milestones from ideation to final action.</p>
      </div>

      {/* Timeline Structure */}
      <div className="timeline-container">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-item ${event.side}`}>
            <div className="timeline-content">
              <time>{event.date}</time>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SCOPED CSS FOR TIMELINE VISUALS */}
      <style>{`
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }
        /* Vertical Blue Line */
        .timeline-container::after {
          content: '';
          position: absolute;
          width: 4px;
          background-color: var(--primary); 
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -2px;
          box-shadow: 0 0 10px var(--primary);
        }
        
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
          box-sizing: border-box;
        }
        
        /* Positioning Left/Right */
        .left { left: 0; }
        .right { left: 50%; }
        
        /* The Glowing Dots */
        .timeline-item::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          right: -10px;
          background-color: var(--bg-body);
          border: 4px solid var(--accent); 
          top: 20px;
          border-radius: 50%;
          z-index: 1;
          box-shadow: 0 0 10px var(--accent);
        }
        .right::after {
          left: -10px;
        }
        
        /* The Content Card */
        .timeline-content {
          padding: 25px;
          background-color: var(--bg-card);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }
        .timeline-content:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }
        
        .timeline-content time {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          color: var(--accent);
          margin-bottom: 5px;
          letter-spacing: 1px;
        }
        .timeline-content h3 {
          margin-top: 0;
          color: var(--text-main);
          font-size: 1.4rem;
          margin-bottom: 10px;
        }
        .timeline-content p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .timeline-container::after { left: 31px; }
          .timeline-item { width: 100%; padding-left: 70px; padding-right: 25px; }
          .timeline-item::after { left: 21px; }
          .left, .right { left: 0; }
        }
      `}</style>
    </div>
  );
};

export default Timeline;
