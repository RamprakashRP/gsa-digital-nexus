import React from 'react';
import './App.css';

// Import your section components
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import ImpactMap from './components/ImpactMap';
import Initiatives from './components/Initiatives';
import AchievementsSection from './components/AchievementsSection';
import EventGallery from './components/EventGallery'; 
import DigitalFootprint from './components/DigitalFootprint';
import Footer from './components/Footer';

// Import BOTH background components
import Hyperspeed from './components/Hyperspeed'; // Global background
// Particles will be imported and used within Header.js now

function App() {
  // Options for the GLOBAL Hyperspeed background
  const hyperspeedEffectOptions = {
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 50, // More sticks for denser feel
    lightPairsPerRoadWay: 60, // More car lights
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,     // Dark road
      islandColor: 0x0a0a0a,   // Dark island
      background: 0x000000,    // Pure black background for deep space feel
      shoulderLines: 0x303030, // Darker shoulder lines
      brokenLines: 0x303030,   // Darker broken lines
      leftCars: [0x8ab4f8, 0x4285F4, 0x6750A2], // Google Blue shades for left cars
      rightCars: [0xf28b82, 0xEA4335, 0xC247AC], // Google Red/Pink shades for right cars
      sticks: 0x81c995,       // Google Green for side sticks
    }
  };

  return (
    <div className="App">
      {/* GLOBAL Hyperspeed Background (z-index: -2 in CSS, will be defined in index.css for #lights) */}
      <Hyperspeed effectOptions={hyperspeedEffectOptions} />

      {/* Main Content, sits on top of Hyperspeed (z-index: 1 in CSS) */}
      <div className="content-overlay">
        <Header /> {/* Header will now contain the Particles background */}
        <main>
          <WelcomeSection />
          <ImpactMap />
          <Initiatives />
          <AchievementsSection />
          <EventGallery />
          <DigitalFootprint />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;