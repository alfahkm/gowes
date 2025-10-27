import React from 'react';
import './TourSection.css';

const TourSection = () => {
  const tours = [
    {
      date: '2023-10-15',
      city: 'Kota Semarang',
      venue: 'Pahlawan',
      poster: require('../assets/YourParadise.jpg'),
    },
    {
      date: '2023-11-20',
      city: 'Kota Semarang',
      venue: 'Dargo',
      poster: require('../assets/YourParadise.jpg'),
    },
    {
      date: '2023-12-05',
      city: 'Kota Semarang',
      venue: 'Tugu Muda',
      poster: require('../assets/YourParadise.jpg'),
    },
  ];

  return (
    <section className="tour-section">
      <h2>Event Gowes</h2>
      <div className="tour-list">
        {tours.map((tour, index) => (
          <div key={index} className="tour-item">
            <img src={tour.poster} alt={`Tour in ${tour.city}`} className="tour-poster" />
            <div className="tour-date">{tour.date}</div>
            <div className="tour-city">{tour.city}</div>
            <div className="tour-venue">{tour.venue}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourSection;
