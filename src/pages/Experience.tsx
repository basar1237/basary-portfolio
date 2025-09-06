import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Lidya Teknoloji',
      location: 'İstanbul, Türkiye',
      period: '2022 - Günümüz',
      description: [
        'Template siteler geliştirme ve yönetimi',
        'React ve TypeScript ile modern web uygulamaları',
        'Responsive tasarım ve kullanıcı deneyimi optimizasyonu',
        'Frontend performans optimizasyonu',
        'Takım içi işbirliği ve proje yönetimi'
      ],
      technologies: ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Git'],
      type: 'Tam Zamanlı'
    }
  ];

  const education = [
    {
      id: 1,
      title: 'Yazılım Mühendisliği',
      institution: 'Beykent Üniversitesi',
      location: 'İstanbul, Türkiye',
      period: '2020 - 2024',
      description: [
        '4 yıllık yazılım mühendisliği eğitimi',
        'Veri yapıları ve algoritmalar',
        'Web teknolojileri ve programlama',
        'Veritabanı yönetimi',
        'Yazılım geliştirme metodolojileri'
      ],
      achievements: [
        'Başarılı mezuniyet',
        'Proje tabanlı öğrenme deneyimi',
        'Takım çalışması ve liderlik becerileri'
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'React Developer',
      issuer: 'Meta',
      date: '2023',
      description: 'Modern React uygulamaları geliştirme sertifikası'
    },
    {
      id: 2,
      title: 'TypeScript Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      description: 'TypeScript temel ve ileri seviye konular'
    },
    {
      id: 3,
      title: 'Web Development',
      issuer: 'Udemy',
      date: '2022',
      description: 'Modern web geliştirme teknolojileri'
    }
  ];

  return (
    <div className="experience">
      <div className="experience-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="experience-content"
        >
          <h1 className="experience-title">Tecrübelerim</h1>
          <p className="experience-subtitle">
            Kariyer yolculuğum ve profesyonel deneyimlerim
          </p>
        </motion.div>
      </div>

      <div className="experience-sections">
        <div className="experience-container">
          {/* İş Deneyimi */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="work-experience"
          >
            <h2>İş Deneyimi</h2>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="experience-item"
                >
                  <div className="experience-header">
                    <div className="experience-icon">
                      <Briefcase />
                    </div>
                    <div className="experience-info">
                      <h3>{exp.title}</h3>
                      <p className="company">{exp.company}</p>
                      <div className="experience-meta">
                        <span className="location">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                        <span className="period">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className="type">{exp.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="experience-content">
                    <h4>Görevler ve Sorumluluklar:</h4>
                    <ul>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="technologies">
                      <h4>Kullanılan Teknolojiler:</h4>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
            <div className="experience-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="experience-item"
                >
                  <div className="experience-header">
                    <div className="experience-icon education-icon">
                      <Briefcase />
                    </div>
                    <div className="experience-info">
                      <h3>{edu.title}</h3>
                      <p className="company">{edu.institution}</p>
                      <div className="experience-meta">
                        <span className="location">
                          <MapPin size={16} />
                          {edu.location}
                        </span>
                        <span className="period">
                          <Calendar size={16} />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="experience-content">
                    <h4>Eğitim İçeriği:</h4>
                    <ul>
                      {edu.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="achievements">
                      <h4>Başarılar:</h4>
                      <ul>
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Sertifikalar */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="certifications"
          >
            <h2>Sertifikalar</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="certification-card"
                >
                  <div className="certification-header">
                    <h3>{cert.title}</h3>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-description">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
