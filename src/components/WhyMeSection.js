import React from 'react';

function WhyMeSection() {
  return (
    <section id="why-me">
      <div className="container">
        <h2 className="section-title">Why I Deserve This Position: My Unique Catalyst</h2>
        <div className="why-me-content card-base"> {/* Using card-base for styling */}
          <p>
            My candidacy for the Google Student Ambassador program isn't just about my qualifications; it's about a **proven track record of transformative leadership** and a **deeply personal commitment to democratizing access to technology and learning**. I am a unique catalyst on campus, and here’s why I am the ideal choice:
          </p>

          <div className="why-me-points">
            <div className="point-card">
              <h3><span className="icon-marker">&#9889;</span> Unparalleled Campus Influence</h3>
              <p>As **President of the NextGen Intelligence Club**, Head of the **College Newsletter**, and leading the **Social Media Team**, I'm already embedded at the heart of campus tech initiatives and student communication. My upcoming role as **Chapter Captain for Arc Shift** further solidifies my position as a key community builder. This isn't just leadership; it's a ready-made ecosystem to amplify Google's outreach.</p>
            </div>

            <div className="point-card">
              <h3><span className="icon-marker">&#127760;</span> Bridging Tech Ecosystems</h3>
              <p>Crucially, I am currently the **only Microsoft Learn Student Ambassador** on my campus. This unique experience has taught me to effectively bridge different technological perspectives, ensuring students understand the broader tech landscape. I am perfectly poised to articulate Google's strengths, not in isolation, but as a complementary force in a diverse tech world, fostering holistic learning.</p>
            </div>

            <div className="point-card">
              <h3><span className="icon-marker">&#10024;</span> Proactive Google Advocacy & Vision</h3>
              <p>My commitment to Google's vision is already in action. I proactively championed the **free Gemini AI plan for students** across campus, because I fundamentally believe that AI platforms like Gemini are game-changers for self-directed learning. My mission is to empower students to learn beyond traditional classrooms, making complex knowledge accessible and engaging. This ambassadorship is a natural extension of what I already do and believe.</p>
            </div>

            <div className="point-card">
              <h3><span className="icon-marker">&#128176;</span> A Vision for Lasting Impact</h3>
              <p>This role is a catalyst for my lifelong aspiration: to be an **architect of accessible knowledge and a driver of digital literacy**. Being a Google Student Ambassador will not only sharpen my leadership and communication skills but will provide the platform and resources to turn campus-level engagement into a broader movement. I am ready to build a legacy of empowered, self-made learners, with Google as a cornerstone.</p>
            </div>
          </div>
          <p style={{ marginTop: '40px', fontSize: '1.1em', fontWeight: '600', color: 'var(--google-blue)' }}>
            I don't just fit the requirements; I bring a unique blend of existing influence, cross-platform understanding, and a passionate, proactive vision for Google's role in empowering the next generation of innovators.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyMeSection;