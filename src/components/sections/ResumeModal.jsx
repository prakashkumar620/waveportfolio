import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="resume-modal-content resume-pdf-viewer"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="modal-close" onClick={onClose}>
              ✕
            </button>

            {/* PDF Viewer */}
            <div className="pdf-container">
              <iframe
                src="/Prakash_Kumar_Resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '8px' }}
                title="CV Resume"
              ></iframe>
            </div>

            {/* Footer */}
            <div className="pdf-footer">
              <p>📄 Specialisation CV & Professional Resume</p>
              <a href="/Prakash_Kumar_Resume.pdf" download="Prakash_Kumar_Resume.pdf" className="download-link">
                ⬇️ Download PDF
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        .resume-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
          padding: 20px;
        }

        .resume-modal-content {
          position: relative;
          width: 90%;
          max-width: 900px;
          background: linear-gradient(135deg, rgba(30, 30, 50, 0.95), rgba(50, 30, 60, 0.95));
          border: 2px solid var(--neon-orange);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(255, 140, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          max-height: 85vh;
        }

        .resume-pdf-viewer {
          padding: 30px;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border: 2px solid var(--neon-orange);
          background: transparent;
          color: var(--neon-orange);
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-main);
          z-index: 10;
        }

        .modal-close:hover {
          background: rgba(255, 140, 0, 0.2);
          transform: rotate(90deg);
        }

        .pdf-container {
          flex: 1;
          width: 100%;
          height: 500px;
          border: 1px solid rgba(255, 140, 0, 0.3);
          border-radius: 8px;
          overflow: hidden;
          background: rgba(10, 10, 20, 0.9);
          margin-bottom: 15px;
        }

        .pdf-container iframe {
          width: 100% !important;
          height: 100% !important;
        }

        .pdf-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px;
          background: rgba(255, 140, 0, 0.1);
          border-radius: 8px;
          border: 1px solid rgba(255, 140, 0, 0.2);
        }

        .pdf-footer p {
          margin: 0;
          color: var(--neon-orange);
          font-weight: 600;
        }

        .download-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.2), rgba(0, 212, 168, 0.2));
          border: 1px solid var(--neon-orange);
          border-radius: 6px;
          color: var(--neon-orange);
          text-decoration: none;
          font-weight: 600;
          font-family: var(--font-body);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .download-link:hover {
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.3), rgba(0, 212, 168, 0.3));
          border-color: var(--neon-gold);
          color: var(--neon-gold);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .resume-modal-content {
            width: 95%;
            max-width: 600px;
            padding: 20px;
          }

          .pdf-container {
            height: 400px;
          }

          .pdf-footer {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .modal-close {
            width: 35px;
            height: 35px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
