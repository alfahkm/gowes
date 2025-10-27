import React from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Komunitas Sepeda Indonesia Gelar Event Gowes Massal di Jakarta',
      date: '12 Oktober 2023',
      content: 'Ribuan pesepeda dari berbagai komunitas gowes di Indonesia berkumpul di Jakarta untuk event gowes massal. Acara ini bertujuan meningkatkan kesadaran akan pentingnya transportasi ramah lingkungan.',
      image: require('../assets/YourParadise.jpg'), // Placeholder image
    },
    {
      title: 'Pemerintah Dukung Pengembangan Infrastruktur Sepeda',
      date: '25 November 2023',
      content: 'Pemerintah Indonesia berkomitmen untuk meningkatkan infrastruktur sepeda di kota-kota besar. Ini termasuk pembangunan jalur sepeda yang lebih aman dan nyaman.',
      image: require('../assets/YourParadise.jpg'), // Placeholder image
    },
    {
      title: 'Komunitas Gowes Surabaya Raih Penghargaan Internasional',
      date: '8 Desember 2023',
      content: 'Komunitas gowes dari Surabaya berhasil meraih penghargaan sebagai komunitas sepeda terbaik di Asia Tenggara. Prestasi ini menginspirasi komunitas lain di Indonesia.',
      image: require('../assets/YourParadise.jpg'), // Placeholder image
    },
  ];

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    // For now, we'll simulate sending to alfapunya36@gmail.com
    const mailtoLink = `mailto:alfapunya36@gmail.com?subject=Saran dari ${formData.name}&body=Nama: ${formData.name}%0AEmail: ${formData.email}%0APesan: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="news-section">
      <h2>Berita Terbaru</h2>
      <div className="news-list">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <h3>{item.title}</h3>
              <p className="news-date">{item.date}</p>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="suggestions">
        <h3>Berikan Saran</h3>
        <form onSubmit={handleSubmit} className="suggestion-form">
          <div className="form-group">
            <label htmlFor="name">Nama:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan/Saran:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Kirim Saran</button>
        </form>
      </div>
    </section>
  );
};

export default NewsSection;
