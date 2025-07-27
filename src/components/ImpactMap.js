import React from 'react';

function ImpactMap() {
  return (
    <section id="impact-map">
      <div className="container">
        <h2 className="section-title">My Campus Ecosystem: Where My Impact Connects</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.1em', color: 'var(--text-secondary)' }}>This map visually represents my interconnected roles and how they serve as channels for fostering technology interest, community building, and ultimately, self-directed learning across our university. Every node is a pathway to empowering my peers.</p>
        <div className="image-showcase card-base"> {/* Added card-base for hover effect */}
          <img src="/images/Ramprakash.png" alt="My Campus Ecosystem Map" />
        </div>
      </div>
    </section>
  );
}

export default ImpactMap;