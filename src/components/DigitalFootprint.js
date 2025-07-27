import React from 'react';

function DigitalFootprint() {
  return (
    <section id="digital-footprint">
      <div className="container">
        <h2 className="section-title">My Digital Footprint: Connect & Explore More</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.1em' }}>Explore my professional presence and see my impact in action across various platforms.</p>
        <ul className="digital-footprint">
          <li><a href="[YOUR LINKEDIN PROFILE URL]" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          <li><a href="[YOUR NEXTGEN CLUB SOCIAL MEDIA/WEBSITE URL]" target="_blank" rel="noopener noreferrer">NextGen Intelligence Club</a></li>
          <li><a href="[LINK TO CURATED GOOGLE DRIVE FOLDER WITH NEWSLETTER/SOCIAL MEDIA EXAMPLES]" target="_blank" rel="noopener noreferrer">Newsletter & Social Media Portfolio</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </section>
  );
}

export default DigitalFootprint;