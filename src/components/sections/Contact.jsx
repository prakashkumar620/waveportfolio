import { motion } from 'framer-motion';
import { PERSONAL } from '../../utils/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        className="section-content"
        style={{ width: '100%' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            <motion.h2 className="contact-title" variants={itemVariants}>
              Let's secure your infrastructure
            </motion.h2>

            <motion.p className="contact-subtitle" variants={itemVariants}>
              Whether you need security audits, infrastructure hardening, DevOps automation, or consultation on zero-trust architecture, I'd love to help. Reach out to discuss your security challenges.
            </motion.p>

            {/* Contact Links */}
            <motion.div className="contact-links" variants={itemVariants}>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="link-icon">✉️</span>
                Email
              </a>
              <a
                href={PERSONAL.linkedin}
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="link-icon">🔗</span>
                LinkedIn
              </a>
              <a
                href={PERSONAL.github}
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="link-icon">💻</span>
                GitHub
              </a>
            </motion.div>

            {/* Email signup form */}
            <motion.div className="contact-form" variants={itemVariants}>
              <input
                type="email"
                className="contact-input"
                placeholder="your@email.com"
              />
              <button
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thanks for reaching out! I\'ll get back to you soon.');
                }}
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Footer */}
            <motion.div
              style={{
                marginTop: 50,
                paddingTop: 30,
                borderTop: '1px solid rgba(255,255,255,0.08)',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
              }}
              variants={itemVariants}
            >
              <p>Designed & built with ⚡ using React, Three.js & GSAP</p>
              <p style={{ marginTop: 8, fontSize: '0.7rem' }}>
                © 2025 {PERSONAL.name}. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
