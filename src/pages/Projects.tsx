import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Database } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Template Sitesi',
      description: 'Modern ve responsive e-ticaret template sitesi. Kullanıcı dostu arayüz, ürün kategorileri, sepet yönetimi ve ödeme sistemi entegrasyonu.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'TypeScript', 'CSS3', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Responsive Tasarım', 'Ürün Kategorileri', 'Sepet Yönetimi', 'Ödeme Sistemi']
    },
    {
      id: 2,
      title: 'Kurumsal Web Sitesi',
      description: 'Profesyonel kurumsal web sitesi template. Şirket profili, hizmetler, iletişim formu ve blog bölümü içeren kapsamlı çözüm.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'HTML5', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Kurumsal Profil', 'Hizmetler Sayfası', 'İletişim Formu', 'Blog Sistemi']
    },
    {
      id: 3,
      title: 'Mobil Uygulama Template',
      description: 'Cross-platform mobil uygulama template. React Native ile geliştirilmiş, iOS ve Android platformlarında çalışan modern uygulama.',
      image: '/api/placeholder/400/250',
      category: 'mobile',
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Cross-Platform', 'Push Notifications', 'Offline Mode', 'User Authentication']
    },
    {
      id: 4,
      title: 'Dashboard Template',
      description: 'Yönetim paneli ve dashboard template. Veri görselleştirme, grafikler, tablolar ve kullanıcı yönetimi özellikleri.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Veri Görselleştirme', 'Grafikler', 'Kullanıcı Yönetimi', 'Responsive Dashboard']
    },
    {
      id: 5,
      title: 'Blog Template Sitesi',
      description: 'Modern blog template sitesi. SEO optimizasyonu, kategoriler, yorum sistemi ve sosyal medya entegrasyonu.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['SEO Optimizasyonu', 'Blog Kategorileri', 'Yorum Sistemi', 'Sosyal Medya']
    },
    {
      id: 6,
      title: 'Veri Analizi Projesi',
      description: 'Data Science projesi. Python ile geliştirilmiş veri analizi ve makine öğrenmesi uygulaması.',
      image: '/api/placeholder/400/250',
      category: 'data',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Veri Analizi', 'Makine Öğrenmesi', 'Görselleştirme', 'Raporlama']
    }
  ];

  const categories = [
    { id: 'all', label: 'Tümü', icon: <Code /> },
    { id: 'web', label: 'Web Sitesi', icon: <Code /> },
    { id: 'mobile', label: 'Mobil', icon: <Smartphone /> },
    { id: 'data', label: 'Data Science', icon: <Database /> }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <div className="projects-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-content"
        >
          <h1 className="projects-title">Ürünlerim</h1>
          <p className="projects-subtitle">
            Geliştirdiğim template siteler ve projeler
          </p>
        </motion.div>
      </div>

      <div className="projects-sections">
        <div className="projects-container">
          {/* Filtreler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="filters"
          >
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                  onClick={() => setFilter(category.id)}
                >
                  {category.icon}
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projeler Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="projects-grid"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <Code size={60} />
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                        Canlı Demo
                      </a>
                      <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Özellikler:</h4>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    <h4>Teknolojiler:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* İstatistikler */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="projects-stats"
          >
            <div className="stats-grid">
              <div className="stat-item">
                <h3>{projects.length}+</h3>
                <p>Tamamlanan Proje</p>
              </div>
              <div className="stat-item">
                <h3>3</h3>
                <p>Kategori</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Müşteri Memnuniyeti</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Destek</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
