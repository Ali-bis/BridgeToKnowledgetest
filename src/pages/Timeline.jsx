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
      <div className="hero-banner">
        <h1>PROJECT TIMELINE</h1>
        <p>Key milestones from ideation to final action.</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-item ${event.side}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <time>{event.date}</time>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* STRICT CSS FOR PERFECT CENTERING */}
      <style>{`
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px 0;
        }
        /* The Vertical Line */
        .timeline-line {
          position: absolute;
          width: 4px;
          background-color: var(--primary);
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%); /* MATHEMATICALLY CENTERED */
          box-shadow: 0 0 15px var(--primary);
        }
        
        .timeline-item {
          padding: 20px 0;
          position: relative;
          width: 50%;
          box-sizing: border-box;
          clear: both;
        }
        
        .timeline-item.left { float: left; text-align: right; padding-right: 60px; }
        .timeline-item.right { float: right; text-align: left; padding-left: 60px; }
        
        /* The Dot */
        .timeline-dot {
          position: absolute;
          width: 24px;
          height: 24px;
          background-color: var(--bg-body);
          border: 4px solid var(--accent);
          border-radius: 50%;
          top: 25px;
          z-index: 10;
          box-shadow: 0 0 15px var(--accent);
        }
        /* Dot positioning relative to the item edge */
        .timeline-item.left .timeline-dot { right: -12px; } /* Half of 24px width */
        .timeline-item.right .timeline-dot { left: -12px; }

        .timeline-content {
          background-color: var(--bg-card);
          padding: 25px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow);
        }

        .timeline-content time {
          display: block;
          font-family: 'Bebas Neue';
          font-size: 1.4rem;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .timeline-content h3 { margin: 0 0 10px 0; color: var(--text-main); }
        .timeline-content p { margin: 0; color: var(--text-muted); }

        /* MOBILE STACK */
        @media (max-width: 768px) {
          .timeline-line { left: 30px; transform: none; }
          .timeline-item { width: 100%; float: none; padding-left: 70px; padding-right: 0; text-align: left; }
          .timeline-item.left .timeline-dot, 
          .timeline-item.right .timeline-dot { left: 18px; right: auto; }
        }
      `}</style>
    </div>
  );
};

export default Timeline;
