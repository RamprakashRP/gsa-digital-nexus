import React from 'react';

function DigitalFootprint() {
  return (
    <section id="digital-footprint">
      <div className="container">
        <h2 className="section-title">My Digital Footprint: Connect & Explore More</h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1em', color: 'var(--text-secondary)' }}>Explore my professional presence and see my impact in action across various platforms. Let's connect!</p>
        <ul className="digital-footprint">
          <li><a href="[YOUR LINKEDIN PROFILE URL]" target="_blank" rel="noopener noreferrer" className="linkedin">LinkedIn</a></li>
          <li><a href="[YOUR GITHUB PROFILE URL]" target="_blank" rel="noopener noreferrer" className="github">GitHub</a></li>
          <li><a href="[YOUR TWITTER PROFILE URL]" target="_blank" rel="noopener noreferrer" className="twitter">Twitter</a></li>
          <li><a href="[YOUR INSTAGRAM PROFILE URL]" target="_blank" rel="noopener noreferrer" className="instagram">Instagram</a></li>
          <li><a href="[YOUR FACEBOOK PROFILE URL]" target="_blank" rel="noopener noreferrer" className="facebook">Facebook</a></li>
          {/* Add more links as needed */}
          <li><a href="[YOUR NEXTGEN CLUB SOCIAL MEDIA/WEBSITE URL]" target="_blank" rel="noopener noreferrer">NextGen Club</a></li>
          <li><a href="[LINK TO CURATED GOOGLE DRIVE FOLDER WITH NEWSLETTER/SOCIAL MEDIA SAMPLES]" target="_blank" rel="noopener noreferrer">Newsletter/Social Media Samples</a></li>
        </ul>
      </div>
    </section>
  );
}

export default DigitalFootprint;