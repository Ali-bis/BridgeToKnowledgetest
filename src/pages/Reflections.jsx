import React from 'react';

function Reflections() {
  return (
    <div className="container">
      <section className="page-section">
        <h2>Reflections & Learning</h2>
        <p>
          This project was a significant learning experience in teamwork, research, and project management. Here are some of our key reflections.
        </p>

        <h3>Student Reflections (Placeholder)</h3>
        <blockquote>
          "Visiting the schools firsthand was eye-opening. The statistical gap we read about became real when we saw the difference in resources. It motivated our fundraiser more than any report could have."
          <cite>- Team Member (Placeholder)</cite>
        </blockquote>
        
        <blockquote>
          "Organizing the bake sale was chaotic but taught us a lot about planning, marketing, and financial accountability. Following the school's protocols was a lesson in itself."
          <cite>- Team Member (Placeholder)</cite>
        </blockquote>

        <h3>Challenges & Limitations</h3>
        <p>We faced several challenges and recognized limitations in our approach:</p>
        <ul>
          <li>
            <strong>Generalisation:</strong> Our biggest limitation. By visiting only one school per category (public, private, non-profit), we risk generalising our findings. We acknowledge that one school does not represent the entire sector. Future work should include a larger, more diverse sample.
          </li>
          <li>
            <strong>Access & Permissions:</strong> Gaining access to schools and permission to interview students was a complex logistical challenge that required significant lead time and formal proposals.
          </li>
          <li>
            <strong>Scope:</strong> The problem of educational inequality is massive. Our action (workshops, fundraiser) can only help a small group, but we hope it serves as a model that can be scaled.
          </li>
        </ul>
        
        <h3>Future Improvements</h3>
        <p>If we were to continue this project, we would:</p>
        <ol>
          <li>Expand our primary research to include more schools from different parts of Mumbai.</li>
          <li>Develop a more structured curriculum for the digital literacy workshops and train other students to run them.</li>
          <li>Build a long-term partnership with the NGO and BMC schools to provide ongoing support.</li>
        </ol>
      </section>
    </div>
  );
}

export default Reflections;