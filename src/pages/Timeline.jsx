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
        {/* Vertical Line */}
        <div className="center-line"></div>
        
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-row ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <time>{event.date}</time>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 0;
          display: flex;
          flex-direction: column;
        }

        .center-line {
          position: absolute;
          width: 4px;
          background-color: var(--primary);
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          box-shadow: 0 0 15px var(--primary);
        }

        .timeline-row {
          display: flex;
          width: 100%;
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-row.left {
          justify-content: flex-start;
          padding-right: 50%; 
        }
        .timeline-row.left .timeline-content {
          margin-left: auto; 
          margin-right: 40px; 
          text-align: right;
        }

        .timeline-row.right {
          justify-content: flex-end;
          padding-left: 50%; 
        }
        .timeline-row.right .timeline-content {
          margin-left: 40px; 
          margin-right: auto; 
          text-align: left;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          width: 20px;
          height: 20px;
          background-color: var(--bg-body);
          border: 4px solid var(--accent);
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 2;
          top: 20px; 
          box-shadow: 0 0 10px var(--accent);
        }

        .timeline-content {
          background-color: var(--bg-card);
          padding: 25px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow);
          width: 90%; 
          position: relative;
          transition: transform 0.3s ease;
        }
        .timeline-content:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .timeline-content time {
          display: block;
          font-family: 'Bebas Neue';
          font-size: 1.4rem;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .timeline-content h3 {
          margin: 0 0 10px 0;
          color: var(--text-main);
          font-size: 1.5rem;
        }
        .timeline-content p {
          margin: 0;
          color: var(--text-muted);
          font-size: 1rem;
        }

        /* MOBILE STACKING LOGIC */
        @media (max-width: 768px) {
          .center-line {
            left: 30px; 
            transform: none;
          }
          
          .timeline-row {
            width: 100%;
            padding: 0 !important; 
            justify-content: flex-start !important;
            padding-left: 60px !important; 
            margin-bottom: 30px;
          }
          
          .timeline-dot {
            left: 30px; 
            transform: translateX(-50%);
          }
          
          .timeline-content {
            width: 100%;
            margin: 0 !important;
            text-align: left !important;
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Timeline;
