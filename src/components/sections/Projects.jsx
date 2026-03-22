import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../utils/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects({ onProjectSelect }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectProject = (p) => {
    setSelectedId(p.id);
    onProjectSelect(p);
  };

  return (
    <section id="projects" className="section">
      <motion.div
        className="section-content"
        style={{ width: '100%' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="projects-section">
          {/* Header */}
          <motion.div
            className="section-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Full-stack applications from hotel management to DevOps automation
            </p>
            <p className="projects-hint">
              💡 Showcasing diverse skills across web development, AI/ML, and infrastructure
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card glass neon-border"
                variants={cardVariants}
                style={{
                  borderColor: selectedId === project.id
                    ? 'rgba(255,107,53,0.6)'
                    : 'rgba(255,255,255,0.08)',
                  background: selectedId === project.id
                    ? 'rgba(255,107,53,0.08)'
                    : 'rgba(255,255,255,0.03)',
                }}
                onClick={() => handleSelectProject(project)}
                whileHover={{ y: -8 }}
              >
                <div className="project-icon">{project.icon}</div>
                <div className="project-number">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
