import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>Genjot Bareng</h2>
        <p>
          Morfem is a vibrant cycling community dedicated to bringing together enthusiasts from all walks of life. We organize rides, events, and gatherings to promote health, friendship, and the love of cycling. Join us on our adventures and be part of something bigger.
        </p>
        <img src={require('../assets/YourParadise.jpg')} alt="About Morfem" className="about-image" />
      </div>
    </section>
  );
};

export default AboutSection;
