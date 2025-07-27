import React from 'react';
import './App.css'; // This will contain specific component styles

// Import your section components (you'll create these below)
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import ImpactMap from './components/ImpactMap';
import Initiatives from './components/Initiatives';
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
        <DigitalFootprint />
      </main>
      <Footer />
    </div>
  );
}

export default App;