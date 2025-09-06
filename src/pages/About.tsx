import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: '.NET/C#', level: 80 },
    { name: 'Data Science', level: 75 }
  ];

  return (
    <div className="about">
      <div className="about-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <h1 className="about-title">Hakkımda</h1>
          <p className="about-subtitle">
            Frontend Developer & Yazılım Mühendisi
          </p>
        </motion.div>
      </div>

      <div className="about-sections">
        <div className="about-container">
          {/* Kişisel Bilgiler */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="personal-info"
          >
            <h2>Kişisel Bilgiler</h2>
            <div className="info-grid">
              <div className="info-item">
                <Calendar className="info-icon" />
                <div>
                  <h4>Doğum Tarihi</h4>
                  <p>2001</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Doğum Yeri</h4>
                  <p>Osmaniye</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Telefon</h4>
                  <p>0546 531 49 10</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>E-posta</h4>
                  <p>basaryldrm1237@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Eğitim */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="education"
          >
            <h2>Eğitim</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <GraduationCap />
                </div>
                <div className="timeline-content">
                  <h3>Yazılım Mühendisliği</h3>
                  <p className="timeline-subtitle">Beykent Üniversitesi</p>
                  <p className="timeline-date">2020 - 2024</p>
                  <p className="timeline-description">
                    4 yıllık yazılım mühendisliği bölümünü başarıyla tamamladım. 
                    Modern yazılım geliştirme metodolojileri, veri yapıları, 
                    algoritmalar ve web teknolojileri konularında kapsamlı eğitim aldım.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* İş Deneyimi */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="experience"
          >
            <h2>İş Deneyimi</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <Briefcase />
                </div>
                <div className="timeline-content">
                  <h3>Frontend Developer</h3>
                  <p className="timeline-subtitle">Lidya Teknoloji</p>
                  <p className="timeline-date">2022 - Günümüz</p>
                  <p className="timeline-description">
                    2 yıldır Lidya Teknoloji şirketinde frontend developer olarak çalışmaktayım. 
                    Template siteler geliştiriyor, modern web teknolojileri kullanarak 
                    kullanıcı dostu arayüzler tasarlıyorum. React, TypeScript ve 
                    modern CSS framework'leri ile projeler geliştiriyorum.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Teknik Beceriler */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="skills"
          >
            <h2>Teknik Beceriler</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="skill-progress"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Hakkımda Detay */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-detail"
          >
            <h2>Hakkımda</h2>
            <div className="about-text">
              <p>
                2001 yılında Osmaniye'de doğdum. 2020 yılında Beykent Üniversitesi 
                Yazılım Mühendisliği bölümüne başladım ve 4 yıllık eğitimimi 
                başarıyla tamamladım.
              </p>
              <p>
                Şu anda Lidya Teknoloji şirketinde frontend developer olarak 
                çalışmaktayım. React, TypeScript, HTML, CSS, JavaScript gibi 
                modern web teknolojilerinde uzmanım. Ayrıca .NET, C# ve 
                Data Science alanlarında da bilgi birikimim bulunmaktadır.
              </p>
              <p>
                Template siteler geliştirme konusunda deneyimliyim ve 
                kullanıcı dostu, responsive tasarımlar oluşturmayı seviyorum. 
                Sürekli kendimi geliştirmeye odaklanıyorum ve yeni teknolojileri 
                öğrenmeye açığım.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
