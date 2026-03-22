import { motion } from 'framer-motion';
import { PERSONAL } from '../../utils/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    rotateX: -20,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    scale: 1,
    transition: { 
      duration: 1,
      type: "spring",
      stiffness: 50,
      damping: 15,
    } 
  },
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    rotateZ: -10,
    scale: 0.8,
    z: -100,
  },
  visible: { 
    opacity: 1, 
    rotateZ: 0,
    scale: 1,
    z: 0,
    transition: { 
      duration: 1.2,
      type: "spring",
      stiffness: 40,
      damping: 15,
    } 
  },
};

export default function Hero() {
  const handleScrollProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="section" style={{ position: 'relative' }}>
      <motion.div
        className="section-content"
        style={{ position: 'relative', zIndex: 10, perspective: '1000px' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
          <motion.div className="hero-text">
            <motion.div className="hero-eyebrow" variants={itemVariants}>
              👋 Hey, welcome
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              <span>{PERSONAL.name}</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              Cybersecurity × DevOps Engineer × Infrastructure Expert
            </motion.p>

            <motion.p
              style={{
                maxWidth: 500,
                margin: '0 auto 40px',
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
              variants={itemVariants}
            >
              I design and implement secure, scalable infrastructure. From zero-trust architecture to automated CI/CD pipelines, I combine security best practices with DevOps excellence.
            </motion.p>

            <motion.div className="hero-cta-group" variants={itemVariants}>
              <button
                className="btn-primary"
                onClick={handleScrollProjects}
              >
                View My Work →
              </button>
              <button
                className="btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>

          <motion.div className="hero-image" variants={imageVariants}>
            <img src="/profile.png" alt={PERSONAL.name} className="profile-photo" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
      </motion.div>

      {/* Floating city label */}
      <motion.div
        className="city-label"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="city-label-main">Paris Digital</div>
        <div className="city-label-sub">Anno 2025</div>
      </motion.div>
    </section>
  );
}
