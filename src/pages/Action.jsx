import React from 'react';
import PlaceholderBanner from '../components/PlaceholderBanner';

function Action({ data }) {
  return (
    <div className="container">
      <section className="page-section">
        <h2>Our Action Plan</h2>
        <p>
          Based on our research, we developed a multi-part action plan to address the resource and skills gaps we identified. Our action deadline is November 27, 2025.
        </p>
      </section>

      <section className="page-section">
        <h2>Part 1: Digital Literacy Workshops</h2>
        <div className="action-card">
          <h3>Objective</h3>
          <p>To teach essential digital skills to students in public (BMC) schools to help solve the problem of access to quality digital education.</p>
          <h3>Lesson Plan</h3>
          <p>We are conducting workshops to teach practical, high-value skills:</p>
          <ul>
            <li><strong>Canva:</strong> How to create basic posters, presentations, and graphics.</li>
            <li><strong>PowerPoint/Slides:</strong> How to build a simple presentation, add images, and present information.</li>
            <li><strong>Basic E-Skills:</strong> Safe searching, email etiquette, and using online forms.</li>
          </ul>
          <PlaceholderBanner>
            Photos and student feedback from the workshops will be added to the <a href="/gallery">Gallery</a> after they are completed.
          </PlaceholderBanner>
        </div>
      </section>

      <section className="page-section">
        <h2>Part 2: Resource Drives</h2>
        <div className="action-card">
          <h3>Book Drive</h3>
          <p>We are organizing a book drive within our school to collect educational and story books for all age groups.</p>
          <PlaceholderBanner>
            We are in the process of partnering with an NGO (recommended by Ms. Deepti) to distribute these books effectively. Partner name and drop-off instructions will be posted here.
          </PlaceholderBanner>
        </div>
      </section>
      
      <section className="page-section">
        <h2>Part 3: Fundraising</h2>
        <p>Our primary research identified a critical lack of access to technology. Our fundraising efforts are designed to provide devices (tablets) to students at under-resourced schools.</p>
        
        <div className="action-card">
          <h3>Online Fundraiser (Ketto)</h3>
          <p>We have launched an online fundraiser to collect donations. These funds will be used to purchase tablets.</p>
          <a href={data.fundraiserUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Donate Now on {data.fundraiserPlatform}
          </a>
          
          <h4 style={{marginTop: '2rem'}}>Why Tablets?</h4>
          <p>Based on our research, these are the cost-effective tools we aim to provide:</p>
          <ul>
            <li><a href="https://www.amazon.in/Lenovo-Display-Storage-Expandable-ZAC60016IN/dp/B0DYVJCJ43/" target="_blank" rel="noopener noreferrer">Lenovo Tab (₹9.5k)</a> - 53% Discount</li>
            <li><a href="https://www.amazon.in/HONOR-Flip-Cover-Expandable-Speakers-Snapdragon/dp/B0DF2TBQBH/" target="_blank" rel="noopener noreferrer">HONOR Pad (₹10k)</a> - 50% Discount</li>
            <li><a href="https://www.amazon.in/dp/B0FBRS76BR/" target="_blank" rel="noopener noreferrer">Motorola Tab (₹13k)</a> - 18% Discount</li>
          </ul>
        </div>
        
        <div className="action-card">
          <h3>Bake Sale (Nov 11, 2025)</h3>
          <p>We held an in-school bake sale to raise funds. This event was proposed and approved by school leadership, following all protocols.</p>
          <table className="bake-sale-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Person Responsible</th>
                <th>Homemade?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pizza</td>
                <td>₹100</td>
                <td>Ayush</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Popsicles</td>
                <td>₹50</td>
                <td>Raghav</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Brownies</td>
                <td>₹50</td>
                <td>Shai</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Cookies</td>
                <td>₹50</td>
                <td>Sumer</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Tang</td>
                <td>₹20</td>
                <td>Ali</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Action;