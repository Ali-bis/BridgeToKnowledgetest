import React from 'react';

const timelineEvents = [
  { date: "Oct 10, 2025", title: "Team & Theme Formation", description: "Group formed (Ali, Sumer, Raghav, Shai, Ayush). Debated and chose themes: Poverty & Inequality and Education for All.", side: "left" },
  { date: "Oct 14, 2025", title: "Refining Focus", description: "Zoom call to narrow down ideas. Decided to focus on Poverty & Inequality, Education, Health, and Digital Literacy.", side: "right" },
  { date: "Oct 16, 2025", title: "Topic Finalised", description: "Finalised topic: 'Disparity in Access to Quality Education in Mumbai'. Decided to incorporate Digital Literacy workshops as our action.", side: "left" },
  { date: "Oct 29-31, 2025", title: "Detailed Planning", description: "Planned analysis of private vs. public schools (visits, interviews). Decided on Digital Skills workshops and a Book Drive. Revised plan to include a Ketto Fundraiser and Bake Sale for laptops.", side: "right" },
  { date: "Nov 1, 2025", title: "Seeking Permissions", description: "Contacted teachers for permission to leave school for research/workshops and to start the social media campaign.", side: "left" },
  { date: "Nov 2, 2025", title: "Timeline & Roles", description: "Finalised in-depth plan and divided research roles. Bake sale date set for Nov 11th. Poster designed.", side: "right" },
  { date: "Nov 3, 2025", title: "Partnership & Proposal", description: "Sent bake sale proposal to Head of Student Life. Met with Service Learning Head and selected 'Teach for India' as our partner organization.", side: "left" },
  { date: "Nov 4-5, 2025", title: "Research & Presentation", description: "Completed first draft of secondary research. Finalised presentation modes: Website and Presentation.", side: "right" },
  { date: "Nov 6-7, 2025", title: "Launch & Website", description: "Launched Social Media. Finalised Logo. Ali began website draft. Meeting with Teach for India rep to discuss goals (teaching Grade 4-5).", side: "left" },
  { date: "Nov 8-9, 2025", title: "Promotion & Proposal", description: "Instagram posts published. Team call to finalise Teach for India proposal and social media strategy. Two short-form videos posted.", side: "right" },
  { date: "Nov 11, 2025", title: "Bake Sale Success", description: "Held a successful bake sale raising ~18,000 Rupees. Spread awareness throughout the school.", side: "left" },
  { date: "Nov 14, 2025", title: "Meeting Fellows", description: "Met Ms. Ikra & Ms. Akriti from Teach for India. Discussed workshop content (Newsletter) and school needs (Projectors/Speakers).", side: "right" },
  { date: "Nov 16, 2025", title: "Research & Survey", description: "All members completed research. Survey sent out to understand the disparity between private and public education.", side: "left" },
  { date: "Nov 17-18, 2025", title: "Lesson Planning", description: "Created lesson plan on 'Environment'. Identified skills: Article writing, Interviewing. Sumer made presentation; Ali made fact-sheet.", side: "right" },
  { date: "Nov 19, 2025", title: "Workshop 1: Newsletter", description: "Visited Partnered Municipal School. Conducted first workshop on Newsletter writing and Environment (Pollution/Global Warming).", side: "left" },
  { date: "Nov 24, 2025", title: "Workshop 2: Word Search", description: "Conducted second workshop focused on solving and creating word searches. Taught vocabulary and held a quiz.", side: "right" },
  { date: "Nov 25, 2025", title: "Final Prep", description: "Sumer designed Comic-strip curriculum. Raghav created feedback and summary sheets for students.", side: "left" },
  { date: "Nov 26, 2025", title: "Workshop 3: Creative", description: "Conducted third workshop on comic-strip writing. Collected feedback. Interviewed students about their education experience.", side: "right" },
];

const Timeline = () => {
  return (
    <div className="container">
      <div className="hero-banner">
        <h1>PROJECT TIMELINE</h1>
        <p>Key milestones from ideation to final action.</p>
      </div>

      <div className="timeline-container">
        {/* Vertical Center Line */}
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
