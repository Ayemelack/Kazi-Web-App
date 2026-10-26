import React, { useState } from 'react';
import { Clock, CheckCircle2, Send, ExternalLink, ShieldAlert } from 'lucide-react';
import { launchConfig as defaultLaunchConfig, type LaunchConfig } from '../../config/launchConfig';
import './Download.css';

export const Download: React.FC = () => {
  // Config state (defaults to verified repository launchConfig)
  const [config, setConfig] = useState<LaunchConfig>(defaultLaunchConfig);
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubmitted(true);
    }
  };

  const toggleTestState = () => {
    setConfig(prev => ({
      ...prev,
      isPublished: !prev.isPublished,
      googlePlay: {
        ...prev.googlePlay,
        storeUrl: !prev.isPublished ? 'https://play.google.com/store/apps/details?id=com.kazi.app' : ''
      },
      appStore: {
        ...prev.appStore,
        storeUrl: !prev.isPublished ? 'https://apps.apple.com/app/kazi/id123456789' : ''
      }
    }));
  };

  return (
    <section className="download-section" id="download">
      <div className="container">
        <div className="download-card">
          {/* Publication Status Pill */}
          {config.isPublished ? (
            <div className="download-status-pill published">
              <CheckCircle2 size={16} />
              <span>Now Available for Download</span>
            </div>
          ) : (
            <div className="download-status-pill coming-soon">
              <Clock size={16} />
              <span>{config.statusLabel} • {config.statusBadgeText}</span>
            </div>
          )}

          {/* Heading & Clear Status Explanation */}
          <h2>
            {config.isPublished
              ? 'Get Kazi on Your Phone Today'
              : 'Kazi is Coming Soon to Official App Stores'}
          </h2>

          <p>
            {config.isPublished
              ? 'Download the official Kazi mobile application to start tracking your daily sales, expenses, and customer debts in one simple, secure notebook.'
              : 'Kazi is currently in pilot testing with small business owners in Cameroon. Official store listings for Android (Google Play) and iOS (App Store) are currently undergoing review.'}
          </p>

          {/* Official Store Badges */}
          <div className="store-badges-wrap">
            {/* Google Play Store Badge */}
            {config.isPublished && config.googlePlay.storeUrl ? (
              <a
                href={config.googlePlay.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-btn"
                aria-label="Download Kazi on Google Play"
              >
                <div className="store-badge-icon">
                  {/* Google Play Triangle SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.813L13.805 12 3.61 22.187A2.08 2.08 0 0 1 3 20.672V3.328c0-.6.234-1.156.609-1.515z" fill="#00E676" />
                    <path d="M17.18 8.625l-3.375 3.375 3.375 3.375 3.82-2.18c1.336-.766 1.336-2.023 0-2.79l-3.82-1.78z" fill="#FFD600" />
                    <path d="M3.609 1.813l10.196 10.187 3.375-3.375L6.42 2.656C5.5.945 4.344.938 3.61 1.813z" fill="#00B0FF" />
                    <path d="M13.805 12L3.61 22.188c.734.875 1.89.867 2.81-.844l10.76-5.969-3.375-3.375z" fill="#FF3D00" />
                  </svg>
                </div>
                <div className="store-badge-texts">
                  <span className="store-badge-sub">GET IT ON</span>
                  <span className="store-badge-main">Google Play</span>
                </div>
                <ExternalLink size={14} color="#7E8F86" />
              </a>
            ) : (
              <div className="store-badge-btn disabled" role="status" aria-label="Google Play Store Listing Coming Soon">
                <span className="badge-coming-tag">Coming Soon</span>
                <div className="store-badge-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.813L13.805 12 3.61 22.187A2.08 2.08 0 0 1 3 20.672V3.328c0-.6.234-1.156.609-1.515z" fill="#00E676" />
                    <path d="M17.18 8.625l-3.375 3.375 3.375 3.375 3.82-2.18c1.336-.766 1.336-2.023 0-2.79l-3.82-1.78z" fill="#FFD600" />
                    <path d="M3.609 1.813l10.196 10.187 3.375-3.375L6.42 2.656C5.5.945 4.344.938 3.61 1.813z" fill="#00B0FF" />
                    <path d="M13.805 12L3.61 22.188c.734.875 1.89.867 2.81-.844l10.76-5.969-3.375-3.375z" fill="#FF3D00" />
                  </svg>
                </div>
                <div className="store-badge-texts">
                  <span className="store-badge-sub">GET IT ON</span>
                  <span className="store-badge-main">Google Play</span>
                </div>
              </div>
            )}

            {/* Apple App Store Badge */}
            {config.isPublished && config.appStore.storeUrl ? (
              <a
                href={config.appStore.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-btn"
                aria-label="Download Kazi on the Apple App Store"
              >
                <div className="store-badge-icon">
                  {/* Apple Mark SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.93-.93.04-2.03.63-2.68 1.4-.57.65-1.07 1.74-.93 2.8 1.04.08 2.06-.52 2.67-1.27z" />
                  </svg>
                </div>
                <div className="store-badge-texts">
                  <span className="store-badge-sub">Download on the</span>
                  <span className="store-badge-main">App Store</span>
                </div>
                <ExternalLink size={14} color="#7E8F86" />
              </a>
            ) : (
              <div className="store-badge-btn disabled" role="status" aria-label="Apple App Store Listing Coming Soon">
                <span className="badge-coming-tag">Coming Soon</span>
                <div className="store-badge-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.93-.93.04-2.03.63-2.68 1.4-.57.65-1.07 1.74-.93 2.8 1.04.08 2.06-.52 2.67-1.27z" />
                  </svg>
                </div>
                <div className="store-badge-texts">
                  <span className="store-badge-sub">Download on the</span>
                  <span className="store-badge-main">App Store</span>
                </div>
              </div>
            )}
          </div>

          {/* Pre-launch Notification Sign Up */}
          {!config.isPublished && (
            <div className="notify-form-wrap">
              <label htmlFor="launch-email" className="notify-form-label">
                Get Notified When Kazi Goes Live in Your Store:
              </label>

              {submitted ? (
                <div className="notify-success-msg">
                  <CheckCircle2 size={18} />
                  <span>Thank you! We will notify you at {emailInput} the moment Kazi launches.</span>
                </div>
              ) : (
                <form onSubmit={handleNotifySubmit} className="notify-form">
                  <input
                    id="launch-email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="notify-input"
                  />
                  <button type="submit" className="btn btn-primary btn-sm">
                    <span>Notify Me</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Developer / Reviewer Verification Control */}
          <div className="dev-preview-toggle">
            <ShieldAlert size={13} />
            <span>Developer Review Toggle: State is currently <strong>{config.isPublished ? 'Published (State B)' : 'Coming Soon (State A)'}</strong>.</span>
            <button type="button" onClick={toggleTestState}>
              Switch to {config.isPublished ? 'State A' : 'State B'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
