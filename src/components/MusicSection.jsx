import React from 'react';
import './MusicSection.css';

const MusicSection = () => {
  const musicItems = [
    {
      title: 'Megah Diterima',
      cover: require('../assets/morfem megah diterima.webp'),
      links: [
        { platform: 'Spotify', url: '#' },
      ],
    },
    {
      title: 'Seketika Sekarang Juga',
      cover: require('../assets/morfem seketika.webp'),
      links: [
        { platform: 'Spotify', url: '#' },
      ],
    },
    {
      title: 'Romah Rafah',
      cover: require('../assets/morfem romah rafah.webp'),
      links: [
        { platform: 'Spotify', url: '#' },
      ],
    },
    {
      title: 'Binar Wajah Sebaya',
      cover: require('../assets/morfem binar wajah sebaya.webp'),
      links: [
        { platform: 'Spotify', url: '#' },
      ],
    },
    {
      title: 'Apapun Dilibas',
      cover: require('../assets/apapun dilibas.webp'),
      links: [
        { platform: 'Spotify', url: '#' },
      ],
    },
    {
      title: 'hey, makan tuh gitar!',
      cover: require('../assets/hey_makan_tuh_gitar.webp'),
      links: [
        { platform: 'Spotify', url: '#' },
      ],
    },
  ];

  return (
    <section className="music-section">
      <h2>Music</h2>
      <div className="music-list">
        {musicItems.map((item, index) => (
          <div key={index} className="music-item">
            <img src={item.cover} alt={item.title} className="music-cover" />
            <h3>{item.title}</h3>
            <p>Listen to our latest tracks</p>
            <div className="music-links">
              {item.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.url} className="streaming-link">
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
