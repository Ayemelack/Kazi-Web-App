import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { supportConfig } from '../../config/supportConfig';
import './LegalModal.css';

interface Props {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<Props> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const points = isPrivacy ? supportConfig.privacyPoints : supportConfig.termsPoints;

  return (
    <div
      className="legal-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="legal-modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="legal-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: 34, height: 34, borderRadius: '8px', background: 'var(--color-primary-soft)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {isPrivacy ? <ShieldCheck size={20} /> : <FileText size={20} />}
            </div>
            <div>
              <h3 id="legal-modal-title">{isPrivacy ? 'Privacy Policy' : 'Terms of Service'}</h3>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Last updated: {supportConfig.lastUpdated}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ width: 32, height: 32, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)', cursor: 'pointer' }}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div className="legal-modal-body">
          <p>
            {isPrivacy
              ? 'Kazi is built as a private digital business notebook. The following policy governs how your information is handled in the mobile application and services:'
              : 'By using the Kazi application and services, you agree to the following terms and responsibilities:'}
          </p>

          {points.map((point) => (
            <div key={point.title} className="legal-point-card">
              <h4>{point.title}</h4>
              <p style={{ margin: 0 }}>{point.text}</p>
            </div>
          ))}

          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
            Questions regarding this policy may be directed to our official support team at <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>.
          </p>
        </div>

        <div className="legal-modal-footer">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
