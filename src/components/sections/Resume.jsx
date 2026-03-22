import { motion } from 'framer-motion';
import { RESUME } from '../../utils/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Resume() {
  const handlePreviewResume = () => {
    window.open('/Prakash_Kumar_Resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="section">
      <motion.div
        className="section-content"
        style={{ width: '100%' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="resume-section">
          {/* Header */}
          <motion.div
            className="section-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              My journey in cybersecurity, DevOps, and infrastructure engineering
            </p>
          </motion.div>

          {/* Preview Resume Button */}
          <motion.div
            className="resume-download"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button 
              onClick={handlePreviewResume}
              className="download-btn"
            >
              📂 Preview Resume
            </button>
          </motion.div>


        </div>
      </motion.div>

      <style>{`
        .resume-section {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        .resume-download {
          margin: 30px 0 50px 0;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.2), rgba(0, 212, 168, 0.2));
          border: 2px solid var(--neon-orange);
          border-radius: 8px;
          color: var(--neon-orange);
          text-decoration: none;
          font-weight: 600;
          font-family: var(--font-main);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .download-btn:hover {
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.3), rgba(0, 212, 168, 0.3));
          border-color: var(--neon-gold);
          color: var(--neon-gold);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 140, 0, 0.2);
        }

        .resume-experience,
        .resume-education,
        .resume-skills-summary {
          margin-top: 50px;
        }

        .subsection-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 30px;
          color: var(--text-primary);
          font-family: var(--font-main);
        }

        .experience-item,
        .education-item {
          padding: 24px;
          margin-bottom: 20px;
          border-left: 4px solid var(--neon-orange);
          transition: all 0.3s ease;
        }

        .experience-item:hover,
        .education-item:hover {
          border-left-color: var(--neon-gold);
        }

        .exp-header,
        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 12px;
        }

        .exp-title,
        .edu-degree {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          font-family: var(--font-main);
        }

        .exp-company,
        .edu-institution {
          font-size: 0.95rem;
          color: var(--neon-orange);
          margin: 4px 0 0 0;
          font-weight: 500;
        }

        .exp-period,
        .edu-year {
          font-size: 0.85rem;
          color: var(--text-secondary);
          white-space: nowrap;
          font-family: var(--font-main);
        }

        .exp-description,
        .edu-details {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .exp-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
        }

        .tech-tag {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(0, 212, 168, 0.1);
          border: 1px solid rgba(0, 212, 168, 0.3);
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--neon-orange);
          font-family: var(--font-main);
        }

        .skills-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .skill-category {
          padding: 20px;
        }

        .category-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--neon-orange);
          margin: 0 0 15px 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: var(--font-main);
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-item {
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .resume-section {
            padding: 0 16px;
          }

          .download-btn {
            padding: 12px 20px;
            font-size: 0.95rem;
            gap: 8px;
            width: 100%;
            justify-content: center;
          }

          .subsection-title {
            font-size: 1.3rem;
            margin-bottom: 20px;
          }

          .exp-header,
          .edu-header {
            flex-direction: column;
            gap: 8px;
          }

          .exp-period,
          .edu-year {
            white-space: auto;
            padding-top: 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .exp-title,
          .edu-degree {
            font-size: 1.1rem;
          }

          .experience-item,
          .education-item {
            padding: 16px;
            margin-bottom: 16px;
          }

          .exp-description,
          .edu-details {
            font-size: 0.9rem;
          }

          .skills-summary-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .skill-category {
            padding: 16px;
          }

          .category-title {
            font-size: 0.9rem;
          }

          .exp-tech {
            gap: 8px;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 4px 10px;
          }
        }

        @media (max-width: 480px) {
          .resume-section {
            padding: 0 12px;
          }

          .download-btn {
            padding: 10px 16px;
            font-size: 0.9rem;
          }

          .subsection-title {
            font-size: 1.1rem;
            margin-bottom: 16px;
          }

          .exp-title,
          .edu-degree {
            font-size: 1rem;
          }

          .experience-item,
          .education-item {
            padding: 12px;
            margin-bottom: 12px;
            border-left-width: 3px;
          }

          .exp-company,
          .edu-institution {
            font-size: 0.9rem;
          }

          .exp-description,
          .edu-details {
            font-size: 0.85rem;
            line-height: 1.5;
          }

          .resume-experience,
          .resume-education,
          .resume-skills-summary {
            margin-top: 30px;
          }

          .skill-category {
            padding: 12px;
          }

          .category-title {
            font-size: 0.85rem;
            margin-bottom: 12px;
          }

          .tech-tag {
            font-size: 0.7rem;
            padding: 3px 8px;
          }

          .skills-list {
            gap: 6px;
          }

          .skill-item {
            font-size: 0.8rem;
            padding: 6px 10px;
          }
        }
      `}</style>
    </section>
  );
}
