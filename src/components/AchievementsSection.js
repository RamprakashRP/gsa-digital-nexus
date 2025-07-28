import React from 'react';

function AchievementsSection() {
  return (
    <section id="achievements">
      <div className="container">
        <h2 className="section-title">My Achievements & Certifications</h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1em', color: 'var(--text-secondary)' }}>A testament to my dedication and continuous pursuit of knowledge. Explore my verifiable achievements and certifications in detail.</p>
        
        <div className="achievements-grid">
          {/* Achievement Card 1: NextGen Intelligence Club Leadership */}
          <div className="achievement-card card-base">
            <h3>NextGen Intelligence Club President</h3>
            <p>Led key initiatives, organized workshops, and fostered a vibrant tech community. See my impact and event highlights.</p>
            <a href="https://www.instagram.com/p/DJcBtZKv9CD/?igsh=MWl0NjMwcW43amd3eQ==" target="_blank" rel="noopener noreferrer" className="view-link">View Details</a>
          </div>

          {/* Achievement Card 2: Microsoft Learn Student Ambassador */}
          <div className="achievement-card card-base">
            <h3>Microsoft Learn Student Ambassador</h3>
            <p>The sole MLSA on campus, demonstrating leadership in promoting diverse tech skills. View my ambassadorial activities.</p>
            <a href="https://www.instagram.com/p/DFNqaZXPoqA/?igsh=MWo1czJnOXhpZTY4OQ==" target="_blank" rel="noopener noreferrer" className="view-link">View Details</a>
          </div>

          {/* Achievement Card 3: College Newsletter Head */}
          <div className="achievement-card card-base">
            <h3>Head, College Newsletter</h3>
            <p>Oversaw content creation and outreach, including promoting Google's Gemini AI plan. See sample publications.</p>
            <a href="https://heyzine.com/flip-book/bd190a26bc.html#page/94" target="_blank" rel="noopener noreferrer" className="view-link">View Proof</a>
          </div>

          {/* Achievement Card 4: Arc Shift Chapter Captain (Upcoming) */}
          <div className="achievement-card card-base">
            <h3>Arc Shift Chapter Captain (Upcoming)</h3>
            <p>Spearheading a new community for technical insights, aligning with advanced learning goals. Learn about Arc Shift's vision.</p>
            <a href="https://www.instagram.com/p/DMhgHhMRc-q/?igsh=MTdlbGVtdmxjZjM5aA==" target="_blank" rel="noopener noreferrer" className="view-link">Explore Vision</a>
          </div>

          {/* Add more achievement cards as needed for specific certifications, projects, etc. */}
          {/* Example: */}
          {/* <div className="achievement-card card-base">
            <h3>Google Cloud Certification (Associate Cloud Engineer)</h3>
            <p>Certified in fundamental skills for deploying and operating infrastructure on Google Cloud Platform.</p>
            <a href="[LINK TO YOUR CERTIFICATE PDF/IMAGE IN DRIVE]" target="_blank" rel="noopener noreferrer" className="view-link">View Certificate</a>
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;