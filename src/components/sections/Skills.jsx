
import { motion } from 'framer-motion';
import { SKILLS } from '../../utils/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        className="section-content"
        style={{ width: '100%' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="skills-section">
          {/* Header */}
          <motion.div
            className="section-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            <h2 className="section-title">Cybersecurity & DevOps Stack</h2>
            <p className="section-subtitle">
              Tools and platforms I leverage for secure, scalable infrastructure
            </p>
            <p className="projects-hint">
              ✨ Expertise spanning security, cloud, and automation
            </p>
          </motion.div>

          {/* Skills list */}
          <motion.div
            className="skills-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                variants={itemVariants}
              >
                <span className="skill-emoji">{skill.emoji}</span>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 4 }}>
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats section */}
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: 20,
              marginTop: 50,
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {[
              { num: '150+', label: 'Days Coding' },
              { num: '10+', label: 'Tech Stacks' },
              { num: '24/7', label: 'Passion' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="glass"
                style={{
                  padding: 20,
                  borderRadius: 12,
                  textAlign: 'center',
                }}
                variants={itemVariants}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--neon-orange)' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.75rem', marginTop: 8, color: 'var(--text-secondary)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
