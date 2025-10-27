import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TourSection from './components/TourSection';
import MusicSection from './components/MusicSection';
import NewsSection from './components/NewsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <TourSection />
      <MusicSection />
      <NewsSection />
    </div>
  );
}

export default App;
