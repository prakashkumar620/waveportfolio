import { motion } from 'framer-motion';
import { useState } from 'react';
import { CERTIFICATES } from '../../utils/constants';
import CertificateModal from './CertificateModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  return (
    <section id="certificates" className="section">
      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificate={selectedCertificate}
      />
      <motion.div
        className="section-content"
        style={{ width: '100%' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="certificates-section">
          {/* Header */}
          <motion.div
            className="section-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            <h2 className="section-title">Professional Certifications</h2>
            <p className="section-subtitle">
              Industry-recognized credentials in security, cloud, and DevOps
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            className="certificates-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {CERTIFICATES.map((cert) => (
              <motion.div
                key={cert.id}
                className="certificate-card glass"
                onClick={() => handleCertificateClick(cert)}
                variants={cardVariants}
                style={{
                  borderLeft: `4px solid ${cert.color}`,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                }}
              >
                {cert.imageUrl && (
                  <div className="cert-image-container">
                    <img 
                      src={cert.imageUrl} 
                      alt={cert.title}
                      className="cert-image"
                    />
                  </div>
                )}
                
                <div className="cert-icon" style={{ color: cert.color }}>
                  {cert.icon}
                </div>
                
                <h3 className="cert-title">{cert.title}</h3>
                
                <p className="cert-issuer">{cert.issuer}</p>
                
                <p className="cert-date">{cert.date}</p>
                
                <p className="cert-description">
                  {cert.description}
                </p>
                
                {cert.credentialId && (
                  <p className="cert-credential">
                    ID: <code>{cert.credentialId}</code>
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .certificates-section {
          width: 100%;
        }

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .certificate-card {
          padding: 24px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .cert-image-container {
          width: 100%;
          height: 200px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 16px;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .cert-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .cert-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 12px 0 8px 0;
          color: #ffffff;
          line-height: 1.4;
        }

        .cert-issuer {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 8px 0 4px 0;
          font-weight: 500;
        }

        .cert-date {
          font-size: 0.85rem;
          color: var(--text-tertiary);
          margin-bottom: 12px;
        }

        .cert-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .cert-credential {
          font-size: 0.85rem;
          color: var(--text-tertiary);
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cert-credential code {
          background: rgba(255, 255, 255, 0.05);
          padding: 4px 8px;
          border-radius: 4px;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.8rem;
          color: #4ade80;
        }

        @media (max-width: 1024px) {
          .certificates-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .certificates-section {
            padding: 0 16px;
          }

          .certificates-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 30px;
          }

          .certificate-card {
            padding: 20px;
          }

          .cert-image-container {
            height: 180px;
            margin-bottom: 14px;
          }

          .cert-icon {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .cert-title {
            font-size: 1rem;
            margin: 10px 0 6px 0;
          }

          .cert-issuer {
            font-size: 0.85rem;
            margin: 6px 0 4px 0;
          }

          .cert-date {
            font-size: 0.8rem;
            margin-bottom: 10px;
          }

          .cert-description {
            font-size: 0.85rem;
            line-height: 1.5;
            margin-bottom: 10px;
          }

          .cert-credential {
            font-size: 0.8rem;
            margin-top: 10px;
            padding-top: 10px;
          }

          .cert-credential code {
            font-size: 0.75rem;
            padding: 2px 6px;
          }
        }

        @media (max-width: 480px) {
          .certificates-section {
            padding: 0 12px;
          }

          .certificates-grid {
            gap: 12px;
            margin-top: 24px;
          }

          .certificate-card {
            padding: 16px;
            border-left-width: 3px;
          }

          .cert-image-container {
            height: 150px;
            margin-bottom: 12px;
            border-radius: 6px;
          }

          .cert-icon {
            font-size: 1.8rem;
            margin-bottom: 8px;
          }

          .cert-title {
            font-size: 0.95rem;
            margin: 8px 0 4px 0;
            line-height: 1.3;
          }

          .cert-issuer {
            font-size: 0.8rem;
            margin: 4px 0 2px 0;
          }

          .cert-date {
            font-size: 0.75rem;
            margin-bottom: 8px;
          }

          .cert-description {
            font-size: 0.8rem;
            line-height: 1.4;
            margin-bottom: 8px;
          }

          .cert-credential {
            font-size: 0.75rem;
            margin-top: 8px;
            padding-top: 8px;
          }
        }
      `}</style>
    </section>
  );
}
