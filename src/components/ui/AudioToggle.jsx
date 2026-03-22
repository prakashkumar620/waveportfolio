import { motion } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';

export default function AudioToggle() {
  const { isPlaying, toggle } = useAudio();

  return (
    <motion.button
      className={`audio-toggle ${isPlaying ? 'playing' : ''}`}
      onClick={toggle}
      title={isPlaying ? 'Mute ambient sound' : 'Play ambient sound'}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isPlaying ? (
        <span style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 18 }}>
          {[6, 14, 10, 18, 8].map((h, i) => (
            <motion.span
              key={i}
              style={{
                display: 'block',
                width: 2.5,
                background: 'var(--neon-orange)',
                borderRadius: 1,
                height: h,
              }}
              animate={{ height: [h, h * 0.4, h] }}
              transition={{ duration: 0.6 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </span>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </motion.button>
  );
}
