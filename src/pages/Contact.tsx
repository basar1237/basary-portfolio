import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada form gönderme işlemi yapılacak
    console.log('Form data:', formData);
    setIsSubmitted(true);
    
    // 3 saniye sonra formu sıfırla
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'E-posta',
      value: 'basaryldrm1237@gmail.com',
      link: 'mailto:basaryldrm1237@gmail.com'
    },
    {
      icon: <Phone />,
      title: 'Telefon',
      value: '0546 531 49 10',
      link: 'tel:+905465314910'
    },
    {
      icon: <MapPin />,
      title: 'Konum',
      value: 'İstanbul, Türkiye',
      link: '#'
    }
  ];

  const workInfo = [
    {
      icon: <Mail />,
      title: 'İş E-posta',
      value: 'basary@lidyateknoloji.com',
      link: 'mailto:basary@lidyateknoloji.com'
    }
  ];

  return (
    <div className="contact">
      <div className="contact-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-content"
        >
          <h1 className="contact-title">İletişim</h1>
          <p className="contact-subtitle">
            Benimle iletişime geçin
          </p>
        </motion.div>
      </div>

      <div className="contact-sections">
        <div className="contact-container">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info-section"
          >
            <h2>İletişim Bilgileri</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="contact-info-card"
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <a href={info.link} className="contact-link">
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* İş Bilgileri */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="work-info-section"
          >
            <h2>İş Bilgileri</h2>
            <div className="contact-info-grid">
              {workInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="contact-info-card work-card"
                >
                  <div className="contact-icon work-icon">
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <a href={info.link} className="contact-link">
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form-section"
          >
            <h2>Mesaj Gönder</h2>
            <div className="form-container">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-message"
                >
                  <CheckCircle size={60} />
                  <h3>Mesajınız Gönderildi!</h3>
                  <p>En kısa sürede size geri dönüş yapacağım.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Ad Soyad *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-posta *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="E-posta adresiniz"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Konu *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Mesaj konusu"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mesaj *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    <Send size={20} />
                    Mesaj Gönder
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Çalışma Saatleri */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="working-hours-section"
          >
            <h2>Çalışma Saatleri</h2>
            <div className="working-hours">
              <div className="hours-item">
                <span className="day">Pazartesi - Cuma</span>
                <span className="time">09:00 - 18:00</span>
              </div>
              <div className="hours-item">
                <span className="day">Cumartesi</span>
                <span className="time">10:00 - 16:00</span>
              </div>
              <div className="hours-item">
                <span className="day">Pazar</span>
                <span className="time">Kapalı</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
