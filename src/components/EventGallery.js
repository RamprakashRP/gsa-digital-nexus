import React from 'react';

function EventGallery() {
  // Array of event photos with their details
  // Keep these paths as they would be if uploaded to public/images/events
  const eventImages = [
    '/images/events/ZVE05000.JPG',
    '/images/events/ZVE05001.JPG',
    '/images/events/ZVE05056.JPG',
    '/images/events/ZVE05780.JPG',
    '/images/events/ZVE05796.JPG',
    '/images/events/ZVE05812.JPG',
    '/images/events/ZVE05853.JPG',
    '/images/events/ZVE05871.JPG',
    '/images/events/ZVE05952.JPG',
    '/images/events/ZVE06040.JPG',
    '/images/events/ZVE06085.JPG',
    // Add many more images here for a smoother, less repetitive scroll.
    // Ideally, have enough images so the row content isn't immediately repeated visually.
    // Example: if 6 fit on screen, have at least 12-18 unique images.
  ];

  // Function to duplicate images for seamless looping
  const duplicatedImages = [...eventImages, ...eventImages]; // Duplicate for infinite scroll effect

  return (
    <section id="event-gallery">
      <div className="container">
        <h2 className="section-title">My Journey in Action: Event Highlights</h2>
        <p style={{ textAlign: 'center', marginBottom: '60px', fontSize: '1.1em', color: 'var(--text-secondary)' }}>
          Here's a visual chronicle of the dynamic events I've participated in and organized, and the incredible teams I've had the privilege to lead and mentor. Every photo tells a story of innovation and collaboration.
        </p>

        {/* First Row: Left to Right */}
        <div className="gallery-row-wrapper">
          <div className="gallery-row scroll-left">
            <div className="gallery-row-inner">
              {duplicatedImages.map((src, index) => (
                <div key={`row1-${index}`} className="gallery-item-slide">
                  <img src={src} alt={`Event ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row: Right to Left */}
        <div className="gallery-row-wrapper">
          <div className="gallery-row scroll-right">
            <div className="gallery-row-inner">
              {duplicatedImages.map((src, index) => (
                <div key={`row2-${index}`} className="gallery-item-slide">
                  <img src={src} alt={`Event ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third Row: Left to Right */}
        <div className="gallery-row-wrapper">
          <div className="gallery-row scroll-left">
            <div className="gallery-row-inner">
              {duplicatedImages.map((src, index) => (
                <div key={`row3-${index}`} className="gallery-item-slide">
                  <img src={src} alt={`Event ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EventGallery;