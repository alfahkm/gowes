import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay loop muted>
        <source src={require('../assets/saturbike.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>GOWES Bareng</h1>
        <p>njajal single SPEED</p>
      </div>
      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default HeroSection;
