import React from 'react';

function EventGallery() {
  // Array of event photos with their details
  // REPLACE THESE WITH YOUR ACTUAL IMAGE LINKS AND DETAILS
  // Ensure your images are hosted publicly (e.g., Google Drive link set to 'anyone with link can view', or directly in your Vercel project's public folder)
  const events = [
    {
      id: 1,
      src: https://drive.google.com/file/d/1YUu9z9fl919vRne0eRH64__w2-HjuUwD/export=view,
      alt: 'NextGen Intelligence Club AI Workshop',
      caption: 'Leading an AI workshop for the NextGen Intelligence Club - Jan 2025',
    },
    {
      id: 2,
      src: '[LINK TO PHOTO 2 - e.g., College Newsletter Launch]',
      alt: 'College Newsletter Launch Event',
      caption: 'Celebrating the launch of our latest College Newsletter edition - Feb 2025',
    },
    {
      id: 3,
      src: '[LINK TO PHOTO 3 - e.g., Social Media Team Meeting]',
      alt: 'Social Media Team Strategy Meeting',
      caption: 'Brainstorming new strategies with the College Social Media Team - March 2025',
    },
    {
      id: 4,
      src: '[LINK TO PHOTO 4 - e.g., Microsoft Learn Student Ambassador Session]',
      alt: 'Microsoft Learn Student Ambassador Session',
      caption: 'Empowering students with Microsoft Azure fundamentals as an MLSA - April 2025',
    },
    {
      id: 5,
      src: '[LINK TO PHOTO 5 - e.g., Arc Shift Planning Meeting]',
      alt: 'Arc Shift Community Planning',
      caption: 'Planning the launch and first events for Arc Shift community - May 2025',
    },
    {
      id: 6,
      src: '[LINK TO PHOTO 6 - e.g., Gemini AI Promotion Event]',
      alt: 'Gemini AI Student Plan Promotion',
      caption: 'Introducing students to the power of Google Gemini AI and its free plan - June 2025',
    },
    // Add more photos as needed
  ];

  return (
    <section id="event-gallery">
      <div className="container">
        <h2 className="section-title">My Journey in Action: Event Gallery</h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1em', color: 'var(--text-secondary)' }}>
          A visual chronicle of my leadership, organization, and participation in various campus events and initiatives. See the impact firsthand!
        </p>
        
        <div className="gallery-grid">
          {events.map((event) => (
            <div key={event.id} className="gallery-item card-base"> {/* Using card-base for hover */}
              <img src={event.src} alt={event.alt} />
              <p className="gallery-caption">{event.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventGallery;