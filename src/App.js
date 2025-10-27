import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TourSection from './components/TourSection';
import MusicSection from './components/MusicSection';
import MediaPressSection from './components/MediaPressSection';
import NewsletterSignup from './components/NewsletterSignup';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <TourSection />
      <MusicSection />
      <MediaPressSection />
      <NewsletterSignup />
    </div>
  );
}

export default App;
