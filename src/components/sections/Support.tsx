import React from 'react';
import { Mail, Clock, MessageSquare, CheckCircle2, ShieldCheck, LifeBuoy } from 'lucide-react';
import { supportConfig } from '../../config/supportConfig';
import './Support.css';

interface Props {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Support: React.FC<Props> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <section className="support-section" id="support">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary section-tag">Direct Human Support</span>
          <h2>We Are Here to Help Your Business</h2>
          <p>
            Whether you have questions about recording sales, setting up products, or restoring your account, our team is directly reachable.
          </p>
        </div>

        <div className="support-grid">
          {/* Main Card: Direct Email Channel */}
          <div className="support-main-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'var(--color-primary-soft)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LifeBuoy size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)' }}>Contact Support Team</h3>
                <p style={{ fontSize: '0.875rem' }}>We respond to everyone in English or French.</p>
              </div>
            </div>

            <div className="support-email-box">
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Official Support Email Address:
              </span>

              <a
                href={`mailto:${supportConfig.email}`}
                className="support-email-link"
                title={`Send email to ${supportConfig.email}`}
              >
                <Mail size={22} />
                <span>{supportConfig.email}</span>
              </a>

              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                Clicking this address opens your device&apos;s configured email application. No automatic message is sent until you hit send in your email client.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#FFFFFF', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <Clock size={20} color="var(--color-primary)" />
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: 600 }}>TYPICAL RESPONSE</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-primary)' }}>{supportConfig.responseTime}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#FFFFFF', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <MessageSquare size={20} color="var(--color-primary)" />
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: 600 }}>LANGUAGES</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-primary)' }}>English & Français</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: What We Help With & Legal Links */}
          <div className="support-topics-card">
            <h3 style={{ fontSize: '1.15rem' }}>What We Can Help With</h3>
            <div className="support-topics-list">
              {supportConfig.helpTopics.map((topic) => (
                <div key={topic} className="support-topic-item">
                  <CheckCircle2 size={16} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{topic}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
                Official Policies:
              </span>
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'underline' }}
                >
                  <ShieldCheck size={15} />
                  <span>Privacy Policy</span>
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'underline' }}
                >
                  <span>Terms of Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
