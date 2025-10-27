import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Handle autoplay failure on mobile
        video.muted = true;
        video.play();
      });
    }
  }, []);

  return (
    <section className="hero-section">
      <video ref={videoRef} className="hero-video" autoPlay loop muted playsInline>
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
