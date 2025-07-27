import React from 'react';
import './App.css'; // Contains specific component styles

// Import your section components
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import ImpactMap from './components/ImpactMap';
import Initiatives from './components/Initiatives';
import AchievementsSection from './components/AchievementsSection'; // NEW component
import DigitalFootprint from './components/DigitalFootprint';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <WelcomeSection />
        <ImpactMap />
        <Initiatives />
        <AchievementsSection /> {/* NEW section added here */}
        <DigitalFootprint />
      </main>
      <Footer />
    </div>
  );
}

export default App;