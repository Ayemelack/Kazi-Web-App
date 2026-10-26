import React from 'react';
import { Mail, Globe, Shield } from 'lucide-react';
import KaziMark from '../brand/KaziMark';
import { supportConfig } from '../../config/supportConfig';
import './Footer.css';

interface Props {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <KaziMark size={36} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 800, fontSize: '1.35rem', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  Kazi
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-primary-soft)', fontWeight: 600 }}>
                  {supportConfig.tagline}
                </span>
              </div>
            </div>

            <p className="footer-desc">
              {supportConfig.appDescription}
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#8C9E95' }}>
              <Globe size={14} color="var(--color-primary)" />
              <span>English • Français • Cameroon Pidgin</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Overview</a></li>
              <li><a href="#about">Why Kazi</a></li>
              <li><a href="#walkthrough">Mobile App Walkthrough</a></li>
              <li><a href="#interactive-preview">Trilingual Live Tour</a></li>
              <li><a href="#features">Verified Features</a></li>
              <li><a href="#download">Launch & Stores</a></li>
            </ul>
          </div>

          {/* Support and Legal */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Support & Legal</h4>
            <ul className="footer-links-list">
              <li>
                <a href={`mailto:${supportConfig.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={14} color="var(--color-primary)" />
                  <span>{supportConfig.email}</span>
                </a>
              </li>
              <li><span>Typical response: {supportConfig.responseTime}</span></li>
              <li>
                <button type="button" onClick={onOpenPrivacy} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Shield size={14} color="var(--color-primary)" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenTerms}>
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} Kazi. &ldquo;Your business, kept simple.&rdquo; All rights reserved.
          </div>
          <div>
            Official Product Website • Isolated in <code>Kazi Web App</code>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
