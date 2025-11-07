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

function Timeline() {
  return (
    <div className="container">
      <section className="page-section">
        <h2>Project Timeline</h2>
        <p>This timeline outlines our project's key milestones, from initial ideation to final action, based on our project log sheet.</p>
        <div className="timeline">
          {timelineEvents.map(event => (
            <div key={event.title} className={`timeline-item ${event.side}`}>
              <div className="timeline-content">
                <time>{event.date}</time>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Timeline;