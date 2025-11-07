import React from 'react';

function Research() {
  return (
    <div className="container">
      <section className="page-section">
        <h2>Research & Methods</h2>
        <p>
          Our project is built on a foundation of both secondary and primary research to understand the full scope of educational disparity in Mumbai.
        </p>
      </section>

      <section className="page-section">
        <h2>Primary Research</h2>
        <p>
          Our team is conducting direct, on-the-ground research to gather qualitative and quantitative data.
        </p>
        <ul>
          <li><strong>School Visits:</strong> We are visiting a representative sample of schools: public (BMC), private for-profit, and private non-profit.</li>
          <li><strong>Student Interviews:</strong> Conducting structured interviews with students to understand their learning experiences, access to resources, and future aspirations.</li>
          <li><strong>Photographic Evidence:</strong> Documenting the state of facilities, classroom resources (like libraries, computer labs), and general infrastructure.</li>
        </ul>
        <p>This evidence will be compiled in our <a href="/gallery">Evidence Gallery</a>.</p>
      </section>

      <section className="page-section">
        <h2>Secondary Research: Key Findings</h2>
        <p>
          Our secondary research focused on literacy rates and digital access to frame our primary investigation. We found that the problem isn't just *enrolment*, but *quality of learning* and the *digital divide*.
        </p>
        
        <div className="research-source">
          <h3>National Context: Literacy & Learning Gaps</h3>
          <p>
            While India has achieved near-universal primary enrolment, large national surveys (like ASER) find that many students lack grade-level reading and arithmetic skills. This shows a gap between "schooling" and "learning".
          </p>
          <ul>
            <li><strong>India's Literacy Rate (7+):</strong> 80.9% (PLFS 2023-24)</li>
            <li><strong>Gender Gap:</strong> ~12.6 percentage point gap (Male: 87.2%, Female: 74.6%)</li>
            <li><strong>Urban-Rural Gap:</strong> ~11.4 percentage point gap (Urban: 88.9%, Rural: 77.5%)</li>
          </ul>
          <p>
            <strong>Comment:</strong> These gaps show that large segments (women, rural populations) are left behind. Our project explores if similar gaps exist *within* Mumbai between affluent and low-income areas.
          </p>
        </div>

        <div className="research-source">
          <h3>Maharashtra & Mumbai Context</h3>
          <p>
            Within Maharashtra, literacy varies widely. While Mumbai districts have high literacy rates (~89.9%), this still leaves ~10-11% illiterate and doesn't guarantee *quality* education, *digital* literacy, or job skills.
          </p>
          <ul>
            <li><strong>Maharashtra Literacy (2011):</strong> 82.34%</li>
            <li><strong>Mumbai Suburban Literacy:</strong> 89.91%</li>
            <li><strong>Mumbai City Literacy:</strong> 89.21%</li>
          </ul>
          <p>
            <strong>Comment:</strong> This high rate suggests our focus should move beyond basic literacy to functional literacy, digital readiness, and skills for employment, justifying our digital workshops.
          </p>
        </div>
        
        <div className="research-source">
          <h3>The Digital Divide</h3>
          <p>
            While India has 800-880+ million internet users, access is unequal. Many low-income users rely on shared devices, intermittent connectivity, and lack basic e-skills (email, app navigation).
          </p>
          <p>
            <strong>Comment:</strong> This reinforces our action plan. Providing devices (via fundraising) and skills (via workshops) is critical to bridge the digital divide and translate raw internet access into real educational gains.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Research;