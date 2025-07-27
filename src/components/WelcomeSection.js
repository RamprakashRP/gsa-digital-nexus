import React from 'react';

function WelcomeSection() {
  return (
    <section id="welcome">
      <div className="container">
        <h2 className="section-title">A Personal Welcome & My Core Belief</h2>
        {/* Removed video section as per your request */}
        <div className="core-message card-base"> {/* Added card-base class */}
          <h3>Empowering Self-Made Learners</h3>
          <p>My journey has been defined by a singular purpose: to empower students to take ownership of their learning. I firmly believe that the most profound education comes from self-interest and exploration, not solely from traditional institutions. Platforms like Google Gemini are revolutionary in this regard—they democratize knowledge, simplify complex topics, and transform learning into an accessible, exciting adventure for everyone. As your Google Student Ambassador, I'm ready to amplify this philosophy across campus, fostering a generation of curious, confident, and capable innovators.</p>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;