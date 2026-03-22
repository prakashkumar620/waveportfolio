import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading | done

  useEffect(() => {
    let start = null;
    const duration = 2800;

    function step(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(p);
      if (p < 100) {
        requestAnimationFrame(step);
      } else {
        setPhase('done');
        setTimeout(onComplete, 600);
      }
    }
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      animate={phase === 'done' ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glowing top line */}
      <div className="loading-glow-line" />

      {/* 3D Spinning Loader */}
      <motion.div
        className="loader-3d-container"
        style={{ perspective: '1000px' }}
      >
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loading-text">Loading...</div>
      </motion.div>

      {/* Profile Image */}
      <motion.img
        src="/profile.png"
        alt="Prakash Kumar"
        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
        style={{
          width: 140,
          height: 140,
          borderRadius: '50%',
          border: '2px solid #00d4a8',
          objectFit: 'cover',
          boxShadow: '0 0 30px rgba(0, 212, 168, 0.4), 0 0 60px rgba(0, 212, 168, 0.2)',
          marginBottom: 24,
          marginTop: 40,
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotateX: -30 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        style={{ textAlign: 'center' }}
      >
        <div style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '3rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #00d4a8, #00ffaa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-2px',
          marginBottom: 4,
          textShadow: '0 0 20px rgba(0, 212, 168, 0.3)',
        }}>
          PRAKASH
        </div>
        <div style={{ fontSize: '0.7rem', letterSpacing: 4, color: 'rgba(0, 212, 168, 0.4)', textTransform: 'uppercase' }}>
          Portfolio
        </div>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ width: '100%', maxWidth: 320, textAlign: 'center', marginTop: 40 }}
      >
        <div className="loading-bar-track">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div style={{
          fontSize: '0.65rem',
          letterSpacing: 3,
          color: 'rgba(0, 212, 168, 0.3)',
          textTransform: 'uppercase',
          marginTop: 12,
        }}>
          Entering the city... {progress}%
        </div>
      </motion.div>

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 2,
            height: 2,
            borderRadius: '50%',
            background: '#ff6b35',
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </motion.div>
  );
}
