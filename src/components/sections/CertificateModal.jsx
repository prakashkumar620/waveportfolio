import { motion, AnimatePresence } from 'framer-motion';

export default function CertificateModal({ isOpen, onClose, certificate }) {
  if (!certificate) return null;

  const handleCertificateLinkClick = () => {
    if (certificate.certificateLink) {
      window.open(certificate.certificateLink, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="certificate-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="certificate-modal-content"
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

            {/* Certificate Container */}
            <div className="certification-viewer">
              {/* Certificate Image/Preview */}
              <div className="certificate-image-container">
                {certificate.imageUrl ? (
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    className="certificate-image"
                  />
                ) : (
                  <div className="certificate-placeholder">
                    <div className="placeholder-icon">{certificate.icon}</div>
                    <p>Certificate Image</p>
                  </div>
                )}
              </div>

              {/* Certificate Details */}
              <div className="certificate-details">
                <div className="cert-detail-icon" style={{ color: certificate.color }}>
                  {certificate.icon}
                </div>

                <motion.h2
                  className="cert-detail-title"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {certificate.title}
                </motion.h2>

                <motion.div
                  className="cert-detail-issuer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <strong>Issuer:</strong> {certificate.issuer}
                </motion.div>

                <motion.div
                  className="cert-detail-date"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <strong>Date Earned:</strong> {certificate.date}
                </motion.div>

                {certificate.credentialId && (
                  <motion.div
                    className="cert-detail-credential"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <strong>Credential ID:</strong> <code>{certificate.credentialId}</code>
                  </motion.div>
                )}

                <motion.p
                  className="cert-detail-description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {certificate.description}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  className="cert-actions"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  {certificate.certificateLink && (
                    <motion.button
                      className="view-cert-btn"
                      onClick={handleCertificateLinkClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      📄 View Certificate
                    </motion.button>
                  )}

                  <motion.button
                    className="close-btn"
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ✕ Close
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        .certificate-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .certificate-modal-content {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          max-width: 900px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          padding: 40px;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 20px;
          color: #fff;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .certification-viewer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .certificate-image-container {
          border-radius: 12px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.1);
          aspect-ratio: 16 / 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .certificate-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .certificate-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          color: rgba(255, 255, 255, 0.4);
          text-align: center;
        }

        .placeholder-icon {
          font-size: 64px;
          opacity: 0.6;
        }

        .placeholder-icon + p {
          margin: 0;
          font-size: 14px;
        }

        .certificate-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cert-detail-icon {
          font-size: 48px;
          margin-bottom: 10px;
        }

        .cert-detail-title {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.3;
        }

        .cert-detail-issuer,
        .cert-detail-date,
        .cert-detail-credential {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.6;
        }

        .cert-detail-issuer strong,
        .cert-detail-date strong,
        .cert-detail-credential strong {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }

        .cert-detail-credential code {
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: #4ade80;
        }

        .cert-detail-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.7;
          margin: 15px 0 0 0;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cert-actions {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .view-cert-btn,
        .close-btn {
          padding: 12px 24px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1;
          min-width: 140px;
        }

        .view-cert-btn:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .close-btn:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .certificate-modal-content {
            padding: 25px;
          }

          .certification-viewer {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .certificate-image-container {
            aspect-ratio: 4 / 3;
          }

          .cert-detail-title {
            font-size: 22px;
          }

          .cert-actions {
            flex-direction: column;
          }

          .verify-btn,
          .close-btn {
            min-width: 100%;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
