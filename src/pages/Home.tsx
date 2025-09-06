import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home text-white">
      <div className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Merhaba, Ben <span className="highlight">Başar Yıldırım</span>
            </h1>
            <p className="hero-subtitle">
              Frontend Developer & Yazılım Mühendisi
            </p>
            <p className="hero-description">
              Modern web teknolojileri ile kullanıcı dostu ve etkileyici 
              web uygulamaları geliştiriyorum. React, TypeScript ve 
              modern frontend teknolojilerinde uzmanım.
            </p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                Projelerimi Gör
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                İletişime Geç
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">B&D</div>
              </div>
              <div className="profile-info">
                <h3>Başar Yıldırım</h3>
                <p>Frontend Developer</p>
                <p>Lidya Teknoloji</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="skills-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skills-container"
        >
          <h2 className="section-title">Uzmanlık Alanlarım</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <Code size={40} />
              </div>
              <h3>Frontend Geliştirme</h3>
              <p>React, TypeScript, HTML, CSS, JavaScript ile modern web uygulamaları</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <Smartphone size={40} />
              </div>
              <h3>Responsive Tasarım</h3>
              <p>Mobil uyumlu ve kullanıcı dostu arayüz tasarımları</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <Database size={40} />
              </div>
              <h3>Backend & Data Science</h3>
              <p>.NET, C#, veri analizi ve makine öğrenmesi projeleri</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="stats-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="stats-container text-white"
        >
          <div className="stat-item text-white">
            <h3>2+</h3>
            <p>Yıl Deneyim</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Tamamlanan Proje</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Teknoloji</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Müşteri Memnuniyeti</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
