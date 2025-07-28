import React from 'react';
import './App.css';

// Import your section components
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import ImpactMap from './components/ImpactMap';
import Initiatives from './components/Initiatives';
import AchievementsSection from './components/AchievementsSection';
import EventGallery from './components/EventGallery';
import WhyMeSection from './components/WhyMeSection'; // NEW IMPORT
import DigitalFootprint from './components/DigitalFootprint';
import Footer from './components/Footer';

// Import background component
import Hyperspeed from './components/Hyperspeed';

function App() {
  // Options for the GLOBAL Hyperspeed background (REDUCED COMPLEXITY FOR PERFORMANCE)
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
    totalSideLightSticks: 20, // REDUCED: Was 50
    lightPairsPerRoadWay: 30, // REDUCED: Was 60
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
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x303030,
      brokenLines: 0x303030,
      leftCars: [0x8ab4f8, 0x4285F4, 0x6750A2],
      rightCars: [0xf28b82, 0xEA4335, 0xC247AC],
      sticks: 0x81c995,
    }
  };

  return (
    <div className="App">
      {/* GLOBAL Hyperspeed Background */}
      <Hyperspeed effectOptions={hyperspeedEffectOptions} />

      {/* Main Content, sits on top */}
      <div className="content-overlay">
        <Header />
        <main>
          <WelcomeSection />
          <ImpactMap />
          <Initiatives />
          <AchievementsSection />
          <EventGallery />
          <WhyMeSection />
          <DigitalFootprint />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;