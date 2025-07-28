import React from 'react';
import Particles from './Particles';

function Header() {
  // Options for the Particles background, specific to the Header (REDUCED COMPLEXITY FOR PERFORMANCE)
  const particleOptions = {
    particleCount: 150, // REDUCED: Was 300
    particleSpread: 15,
    speed: 0.05,
    particleBaseSize: 100, // Slightly smaller base size
    moveParticlesOnHover: true,
    particleHoverFactor: 0.5,
    alphaParticles: true,
    disableRotation: false,
    cameraDistance: 25,
    particleColors: [
      '#8ab4f8', // Google Blue (lighter for dark theme)
      '#a7a7a7', // Muted white/grey
      '#f28b82', // Google Red (lighter for dark theme)
      '#fdd663', // Google Yellow (lighter for dark theme)
      '#81c995'  // Google Green (lighter for dark theme)
    ],
  };

  return (
    <header>
      {/* Particles Background for the Header only */}
      <div className="particles-header-background">
        <Particles {...particleOptions} />
      </div>

      <div className="container header-content">
        <h1>My Digital Nexus: Ramprakash's Vision for Google Student Ambassadorship</h1>
        <p>Welcome to an interactive experience showcasing my passion for technology, community, and self-driven learning.</p>
        <div className="disclaimer">
          This is not a general portfolio website, but a dedicated digital experience created specifically for my Google Student Ambassador application.
        </div>
      </div>
    </header>
  );
}

export default Header;