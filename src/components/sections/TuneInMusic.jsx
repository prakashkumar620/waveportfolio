import { motion } from 'framer-motion';
import { MUSIC_DATA } from '../../utils/constants';

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

export default function TuneInMusic() {
  return (
    <section id="music" className="section">
      <motion.div
        className="section-content"
        style={{ width: '100%' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="music-section">
          {/* Header */}
          <motion.div
            className="section-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            <h2 className="section-title">🎵 Tune In Music</h2>
            <p className="section-subtitle">
              Explore my musical journey and favorite artists
            </p>
            <p className="projects-hint">
              ✨ Where passion meets rhythm – my favorite tracks and playlists
            </p>
          </motion.div>

          {/* Music Grid */}
          <motion.div
            className="music-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {MUSIC_DATA.map((music) => (
              <motion.div
                key={music.id}
                className="music-card glass neon-border"
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 0 30px rgba(0,212,168,0.5)' }}
              >
                <div className="music-icon">{music.icon}</div>
                <h3 className="music-title">{music.name}</h3>
                <p className="music-artist">{music.artist}</p>
                <p className="music-category">{music.category}</p>
                {music.link && (
                  <a 
                    href={music.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="music-link"
                  >
                    Listen Now →
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats or Additional Info */}
          <motion.div
            className="music-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
            style={{ marginTop: '60px', textAlign: 'center' }}
          >
            <p className="section-subtitle" style={{ marginBottom: '20px' }}>
              Music keeps me inspired while building secure, scalable systems.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
