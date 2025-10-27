import React from 'react';
import './MediaPressSection.css';

const mediaPressData = [
  {
    title: 'Ratusan Pesepeda Meriahkan Gowes Jasirah 2025 di Kota Semarang',
    source: 'jatengprov.go.id',
    date: '2025-05-25',
    link: 'https://jatengprov.go.id/publik/ikuti-gowes-jasirah-sekda-jateng-dorong-wisata-sejarah',
  },
  {
    title: 'Komunitas Pit2Eat Semarang Gaungkan Slogan “No Bully, No Kasta” di Dunia Gowes',
    source: 'subjersey.com',
    date: '2024-08-09',
    link: 'https://subjersey.com/blogs/news/pit2eat-komunitas-sepeda-budayakan-no-bully-no-kasta',
  },
  {
    title: 'Gowes Bareng Federal Kalcer Semarang: Rayakan Kebersamaan dan Gaya Hidup Sehat',
    source: 'federalkalcer.id',
    date: '2025-10-27',
    link: 'https://federalkalcer.id/berita/gowes-bareng-federal-kalcer-semarang-rayakan-kebersamaan',
  },
  {
    title: 'Komunitas Sepeda Semarang (KSS) Ajak Warga Aktif Bersepeda Lewat Program Radio Pensiunan',
    source: 'radiopensiunan.com',
    date: '2025-09-08',
    link: 'https://radiopensiunan.com/komunitas-sepeda-semarang-di-radio-pensiunan',
  },
  // Add more media/press items as needed
];

const MediaPressSection = () => {
  return (
    <section className="media-press-section" id="media-press">
      <h2>Media & Press</h2>
      <ul className="media-press-list">
        {mediaPressData.map(({ title, source, date, link }) => (
          <li key={title} className="media-press-item">
            <a href={link} target="_blank" rel="noopener noreferrer" className="media-press-link">
              <h3>{title}</h3>
              <p>{source} - {new Date(date).toLocaleDateString()}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MediaPressSection;
