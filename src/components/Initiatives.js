import React from 'react';

function Initiatives() {
  return (
    <section id="initiatives">
      <div className="container">
        <h2 className="section-title">My Google Ambassador Initiatives: Actioning My Vision</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.1em', color: 'var(--text-secondary)' }}>As a Google Student Ambassador, I will implement innovative programs designed to empower students through practical, self-driven engagement with Google's transformative tools.</p>
        <div className="initiative-grid">
          <div className="initiative-card">
            <h3>Gemini AI Sprint Challenges: Learn, Create, Share</h3>
            <p>Instead of just theoretical workshops, I'll organize short, intensive **2-3 day online challenges** where students use Gemini AI to solve specific, real-world problems. This fosters **hands-on, self-directed learning** by providing a clear objective, with Gemini as their intelligent co-pilot. Winners will be showcased across campus media.</p>
            {/* Optional: Add a small image mock-up for this initiative */}
            <img src="[LINK TO INITIATIVE 1 MOCKUP IMAGE]" alt="Gemini AI Sprint Challenge Mockup" style={{ maxWidth: '100%', height: 'auto', marginTop: '15px', borderRadius: '8px' }} />
          </div>
          <div className="initiative-card">
            <h3>Student-Led Google Discovery Circles: Explore Together</h3>
            <p>I'll empower passionate students to **lead small, informal 'discovery circles'** on diverse or advanced Google tools (e.g., Google Cloud, Google Arts & Culture, Google Scholar). This directly promotes **peer-to-peer, self-motivated learning**, shifting the focus from 'being taught' to 'discovering together'—perfectly aligning with my core philosophy.</p>
            {/* Optional: Add a small image mock-up for this initiative */}
            <img src="[LINK TO INITIATIVE 2 MOCKUP IMAGE]" alt="Discovery Circles Mockup" style={{ maxWidth: '100%', height: 'auto', marginTop: '15px', borderRadius: '8px' }} />
          </div>
          {/* You can add more initiative cards here following the same structure */}
        </div>
      </div>
    </section>
  );
}

export default Initiatives;