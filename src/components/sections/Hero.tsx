import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  TrendingUp,
  Receipt,
  Users2,
  Shield,
  ArrowUpRight,
  ArrowDownLeft,
  HandCoins,
  Banknote,
  AlertTriangle,
  Home,
  Package,
  History,
  MoreHorizontal
} from 'lucide-react';
import KaziMark from '../brand/KaziMark';
import './Hero.css';

export const Hero: React.FC = () => {
  const [screenMode, setScreenMode] = useState<'video' | 'app'>('app');

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Narrative & Clear Value Proposition */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="badge badge-primary">
              🇨🇲 Built for Small Businesses in Cameroon
            </span>
            <span className="badge badge-accent">
              Trilingual EN • FR • Wes-kos
            </span>
          </div>

          <h1 className="hero-title">
            Your business, <br />
            <span className="hero-title-highlight">kept simple.</span>
          </h1>

          <p className="hero-subtitle">
            Kazi is the simple, secure digital business notebook designed for Cameroonian traders, shopkeepers, and artisans.
            Keep track of what you sell, what you spend, what is in stock, and who owes you money — in one fast, reliable mobile app.
          </p>

          <div className="hero-bullets">
            <div className="hero-bullet-item">
              <div className="hero-bullet-icon">
                <TrendingUp size={16} />
              </div>
              <div>
                <strong>Today&apos;s Financial Health:</strong> See your money received, money spent, and money made today at a single glance.
              </div>
            </div>

            <div className="hero-bullet-item">
              <div className="hero-bullet-icon">
                <Receipt size={16} />
              </div>
              <div>
                <strong>Record in 5 Seconds:</strong> Quick sales and expense tracking in FCFA with automatic stock reduction.
              </div>
            </div>

            <div className="hero-bullet-item">
              <div className="hero-bullet-icon">
                <Users2 size={16} />
              </div>
              <div>
                <strong>Customer Debt Ledger:</strong> Remember who owes you, how much, and settle debts with one tap.
              </div>
            </div>
          </div>

          <div className="hero-cta-group">
            <a href="#walkthrough" className="btn btn-primary btn-lg" id="hero-walkthrough-cta">
              <span>Explore Mobile App Tour</span>
              <ArrowDown size={18} />
            </a>
            <a href="#download" className="btn btn-outline btn-lg" id="hero-download-cta">
              <span>Check Store Availability</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-trust-bar">
            <div className="trust-item">
              <CheckCircle2 size={16} color="var(--color-primary)" />
              <span>Zero accounting jargon</span>
            </div>
            <div className="trust-item">
              <Shield size={16} color="var(--color-primary)" />
              <span>100% Private & Ad-free</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} color="var(--color-primary)" />
              <span>Works on everyday Android phones</span>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic Smartphone Mockup with Real Kazi Media */}
        <div className="hero-visual">
          <div className="phone-mockup-wrapper">
            {/* Floating pill 1: Sale Recorded */}
            <div className="floating-chip floating-chip-top" aria-hidden="true">
              <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: 'var(--color-success-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={15} color="var(--color-success)" />
              </div>
              <span>Sale Recorded • +2,400 FCFA</span>
            </div>

            {/* Floating pill 2: Debt Settled */}
            <div className="floating-chip floating-chip-bottom" aria-hidden="true">
              <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HandCoins size={15} color="var(--color-primary)" />
              </div>
              <span>Debt Settled • +15,000 FCFA</span>
            </div>

            {/* Smartphone Hardware Frame */}
            <div className="phone-device-frame">
              <div className="phone-screen-container">
                {/* Phone Status Bar */}
                <div className="phone-status-bar">
                  <span>5:31</span>
                  <div className="phone-notch" />
                  <span style={{ fontSize: '10px' }}>100% 🔋</span>
                </div>

                {/* Perspective Switcher */}
                <div className="screen-mode-tabs" role="tablist" aria-label="Phone Preview Mode">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={screenMode === 'app'}
                    className={`mode-tab-btn ${screenMode === 'app' ? 'active' : ''}`}
                    onClick={() => setScreenMode('app')}
                  >
                    Kazi App Dashboard
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={screenMode === 'video'}
                    className={`mode-tab-btn ${screenMode === 'video' ? 'active' : ''}`}
                    onClick={() => setScreenMode('video')}
                  >
                    Shopkeeper at Counter
                  </button>
                </div>

                {/* Screen Content */}
                <div className="phone-screen-body">
                  {screenMode === 'video' ? (
                    <div className="shopkeeper-video-frame">
                      <span className="video-overlay-badge">In-Store Reality</span>
                      <video
                        className="shopkeeper-video-element"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/assets/shopkeeper-smartphone.jpg"
                        aria-label="Shopkeeper using smartphone at counter in small store"
                      >
                        <source src="/assets/shopkeeper-business-loop.mp4" type="video/mp4" />
                        <source src="/assets/shopkeeper-business-loop.webp" type="image/webp" />
                        <img src="/assets/shopkeeper-smartphone.jpg" alt="Shopkeeper with smartphone" />
                      </video>
                    </div>
                  ) : (
                    <div className="app-ui-view">
                      {/* App Header */}
                      <div className="app-ui-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <KaziMark size={28} />
                          <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--color-text-primary)' }}>Kazi</span>
                        </div>
                        <span style={{ fontSize: '10px', color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                          FCFA
                        </span>
                      </div>

                      <div className="app-ui-greeting">Good evening, Awa</div>

                      {/* Financial Health Summary Metric Card */}
                      <div className="app-ui-metric-card">
                        <div className="metric-row">
                          <div className="metric-col">
                            <span className="metric-col-label">Money received</span>
                            <span className="metric-col-val green">+25,300</span>
                          </div>
                          <div className="metric-divider" />
                          <div className="metric-col">
                            <span className="metric-col-label">Money spent</span>
                            <span className="metric-col-val red">−5,280</span>
                          </div>
                          <div className="metric-divider" />
                          <div className="metric-col">
                            <span className="metric-col-label">Money made</span>
                            <span className="metric-col-val teal">+20,020</span>
                          </div>
                        </div>
                        <div className="metric-date-tag">Today • 25 Oct</div>
                      </div>

                      {/* Quick Actions 2x2 Grid */}
                      <div className="app-actions-grid">
                        <div className="app-action-box">
                          <div className="app-action-icon-wrap" style={{ backgroundColor: 'var(--color-success)' }}>
                            <ArrowUpRight size={16} />
                          </div>
                          <span className="app-action-label">Record a sale</span>
                        </div>

                        <div className="app-action-box">
                          <div className="app-action-icon-wrap" style={{ backgroundColor: 'var(--color-error)' }}>
                            <ArrowDownLeft size={16} />
                          </div>
                          <span className="app-action-label">Record an expense</span>
                        </div>

                        <div className="app-action-box">
                          <div className="app-action-icon-wrap" style={{ backgroundColor: 'var(--color-warning)' }}>
                            <HandCoins size={16} />
                          </div>
                          <span className="app-action-label">Money owed</span>
                        </div>

                        <div className="app-action-box">
                          <div className="app-action-icon-wrap" style={{ backgroundColor: 'var(--color-primary)' }}>
                            <Banknote size={16} />
                          </div>
                          <span className="app-action-label">Add capital</span>
                        </div>
                      </div>

                      {/* Low Stock Alert */}
                      <div className="app-low-stock-box">
                        <AlertTriangle size={15} color="#ED6C02" />
                        <span>Low stock alert: 2 items low</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Navigation Bar */}
                <div className="phone-bottom-tabs" aria-hidden="true">
                  <div className="bottom-tab-item active">
                    <Home size={16} />
                    <span>Home</span>
                  </div>
                  <div className="bottom-tab-item">
                    <Package size={16} />
                    <span>Products</span>
                  </div>
                  <div className="bottom-tab-item">
                    <History size={16} />
                    <span>History</span>
                  </div>
                  <div className="bottom-tab-item">
                    <MoreHorizontal size={16} />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
