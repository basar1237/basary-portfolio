import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo ve Açıklama */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">B&B</span>
            </div>
            <p className="footer-description">
              Frontend Developer & Yazılım Mühendisi. Modern web teknolojileri ile 
              kullanıcı dostu ve etkileyici web uygulamaları geliştiriyorum.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Github size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="footer-section">
            <h3>Hızlı Linkler</h3>
            <ul className="footer-links">
              <li><a href="/">Ana Sayfa</a></li>
              <li><a href="/about">Hakkımda</a></li>
              <li><a href="/experience">Tecrübelerim</a></li>
              <li><a href="/projects">Ürünlerim</a></li>
              <li><a href="/contact">İletişim</a></li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="footer-section">
            <h3>Hizmetler</h3>
            <ul className="footer-links">
              <li>Web Sitesi Geliştirme</li>
              <li>Template Siteler</li>
              <li>Responsive Tasarım</li>
              <li>Frontend Optimizasyonu</li>
              <li>Teknik Danışmanlık</li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="footer-section">
            <h3>İletişim</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>basaryldrm1237@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>0546 531 49 10</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Başar Yıldırım. Tüm hakları saklıdır.</p>
            <p>Domain: basaryildirim.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
