import React, { useState } from 'react';
import {
  Globe,
  Home,
  Package,
  History as HistoryIcon,
  HandCoins,
  ArrowUpRight,
  ArrowDownLeft,
  Banknote,
  Check,
  ChevronRight,
  Plus
} from 'lucide-react';
import KaziMark from '../brand/KaziMark';
import './InteractiveDemo.css';

type Language = 'en' | 'fr' | 'wes';
type ScreenTab = 'home' | 'products' | 'debts' | 'history';

interface LocalizedContent {
  receivedLabel: string;
  spentLabel: string;
  netLabel: string;
  greeting: string;
  saleBtn: string;
  expenseBtn: string;
  debtBtn: string;
  capitalBtn: string;
  productsTitle: string;
  inStockBadge: string;
  lowStockBadge: string;
  debtsTitle: string;
  totalOwedLabel: string;
  markPaidBtn: string;
  historyTitle: string;
}

const LOCALES: Record<Language, LocalizedContent> = {
  en: {
    receivedLabel: 'Money I received',
    spentLabel: 'Money I spent',
    netLabel: 'Money I made',
    greeting: 'Good morning, Awa',
    saleBtn: 'Record a sale',
    expenseBtn: 'Record an expense',
    debtBtn: 'Money owed',
    capitalBtn: 'Add capital',
    productsTitle: 'My Products',
    inStockBadge: 'in stock',
    lowStockBadge: 'Low stock',
    debtsTitle: 'Money owed',
    totalOwedLabel: 'Total owed to you',
    markPaidBtn: 'Mark as paid',
    historyTitle: 'What Happened'
  },
  fr: {
    receivedLabel: 'Argent reçu',
    spentLabel: 'Argent dépensé',
    netLabel: 'Bénéfice réalisé',
    greeting: 'Bonjour, Awa',
    saleBtn: 'Enregistrer une vente',
    expenseBtn: 'Enregistrer une dépense',
    debtBtn: 'Dettes dues',
    capitalBtn: 'Ajouter du capital',
    productsTitle: 'Mes Produits',
    inStockBadge: 'en stock',
    lowStockBadge: 'Stock faible',
    debtsTitle: 'Dettes à recouvrer',
    totalOwedLabel: 'Total qui vous est dû',
    markPaidBtn: 'Marquer comme payé',
    historyTitle: 'Ce qui s\'est passé'
  },
  wes: {
    receivedLabel: 'Moni wey enter',
    spentLabel: 'Moni wey go out',
    netLabel: 'Moni wey I gain',
    greeting: 'Mba, Awa! Good morning',
    saleBtn: 'Writ am say you sell',
    expenseBtn: 'Writ am say you spend',
    debtBtn: 'Moni people owe me',
    capitalBtn: 'Put own moni',
    productsTitle: 'My Ting Dem',
    inStockBadge: 'dey shop',
    lowStockBadge: 'E de finish',
    debtsTitle: 'Moni wey dem owe',
    totalOwedLabel: 'All moni wey dem owe you',
    markPaidBtn: 'E don pay finish',
    historyTitle: 'Wetin Happen'
  }
};

export const InteractiveDemo: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [tab, setTab] = useState<ScreenTab>('home');
  const text = LOCALES[lang];

  return (
    <section className="interactive-demo-section" id="interactive-preview">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-accent section-tag">Live Trilingual Experience</span>
          <h2>Explore Kazi in English, French & Pidgin</h2>
          <p>
            Kazi is proudly trilingual. Switch between English, Français, and Cameroon Pidgin (Wes-kos) to see how natural Kazi feels for every merchant in your market.
          </p>
        </div>

        <div className="demo-grid">
          {/* Controls Column */}
          <div className="demo-controls-col">
            {/* Language Switcher */}
            <div className="language-switcher-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                <Globe size={16} color="var(--color-primary)" />
                <span>Select Interface Language:</span>
              </div>
              <div className="lang-btn-row">
                <button
                  type="button"
                  className={`lang-selector-btn ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                >
                  🇬🇧 English
                </button>
                <button
                  type="button"
                  className={`lang-selector-btn ${lang === 'fr' ? 'active' : ''}`}
                  onClick={() => setLang('fr')}
                >
                  🇫🇷 Français
                </button>
                <button
                  type="button"
                  className={`lang-selector-btn ${lang === 'wes' ? 'active' : ''}`}
                  onClick={() => setLang('wes')}
                >
                  🇨🇲 Cameroon Pidgin
                </button>
              </div>
            </div>

            {/* Feature Tabs */}
            <div className="feature-tab-list" role="tablist" aria-label="Screen Tabs">
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'home'}
                className={`feature-tab-btn ${tab === 'home' ? 'active' : ''}`}
                onClick={() => setTab('home')}
              >
                <div className="tab-btn-content">
                  <div className="tab-btn-icon"><Home size={18} /></div>
                  <div className="tab-btn-texts">
                    <h4>Home Dashboard</h4>
                    <p>Daily cash received, spent, and net made today</p>
                  </div>
                </div>
                <ChevronRight size={18} color="var(--color-text-muted)" />
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={tab === 'products'}
                className={`feature-tab-btn ${tab === 'products' ? 'active' : ''}`}
                onClick={() => setTab('products')}
              >
                <div className="tab-btn-content">
                  <div className="tab-btn-icon"><Package size={18} /></div>
                  <div className="tab-btn-texts">
                    <h4>Products & Low Stock</h4>
                    <p>Inventory counts, items for sale, and stock warnings</p>
                  </div>
                </div>
                <ChevronRight size={18} color="var(--color-text-muted)" />
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={tab === 'debts'}
                className={`feature-tab-btn ${tab === 'debts' ? 'active' : ''}`}
                onClick={() => setTab('debts')}
              >
                <div className="tab-btn-content">
                  <div className="tab-btn-icon"><HandCoins size={18} /></div>
                  <div className="tab-btn-texts">
                    <h4>Money Owed (Debts)</h4>
                    <p>Track customer credit and settle with one tap</p>
                  </div>
                </div>
                <ChevronRight size={18} color="var(--color-text-muted)" />
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={tab === 'history'}
                className={`feature-tab-btn ${tab === 'history' ? 'active' : ''}`}
                onClick={() => setTab('history')}
              >
                <div className="tab-btn-content">
                  <div className="tab-btn-icon"><HistoryIcon size={18} /></div>
                  <div className="tab-btn-texts">
                    <h4>Activity History</h4>
                    <p>Chronological feed of everything that happened</p>
                  </div>
                </div>
                <ChevronRight size={18} color="var(--color-text-muted)" />
              </button>
            </div>
          </div>

          {/* Interactive Screen Column */}
          <div className="demo-phone-col">
            <div className="walkthrough-phone-frame" style={{ maxWidth: '320px' }}>
              <div className="screen-wrapper">
                <div className="mini-status-bar">
                  <span>5:38</span>
                  <span>100% 🔋</span>
                </div>

                {/* Live Screen Render based on Selected Tab & Language */}
                {tab === 'home' && (
                  <>
                    <div className="mini-app-header">
                      <div className="mini-app-title">
                        <KaziMark size={24} />
                        <span>Kazi</span>
                      </div>
                      <span className="badge badge-primary" style={{ padding: '2px 8px', fontSize: '9px' }}>
                        {lang.toUpperCase()}
                      </span>
                    </div>
                    <div className="mini-screen-scroll">
                      <div style={{ fontSize: '14px', fontWeight: 700 }}>{text.greeting}</div>
                      <div className="mini-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div>
                            <div className="mini-card-title">{text.receivedLabel}</div>
                            <div className="mini-card-val" style={{ color: 'var(--color-success)' }}>+18,400 FCFA</div>
                          </div>
                          <div>
                            <div className="mini-card-title">{text.spentLabel}</div>
                            <div className="mini-card-val" style={{ color: 'var(--color-error)' }}>−3,100 FCFA</div>
                          </div>
                        </div>
                        <div style={{ height: 1, background: 'var(--color-border)', margin: '8px 0' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <div className="mini-card-title">{text.netLabel}</div>
                            <div className="mini-card-val" style={{ color: 'var(--color-primary)' }}>+15,300 FCFA</div>
                          </div>
                          <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>FCFA</span>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <div className="mini-card" style={{ padding: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'var(--color-success)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ArrowUpRight size={14} />
                          </div>
                          <span style={{ fontSize: '10px', fontWeight: 700 }}>{text.saleBtn}</span>
                        </div>
                        <div className="mini-card" style={{ padding: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'var(--color-error)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ArrowDownLeft size={14} />
                          </div>
                          <span style={{ fontSize: '10px', fontWeight: 700 }}>{text.expenseBtn}</span>
                        </div>
                        <div className="mini-card" style={{ padding: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'var(--color-warning)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <HandCoins size={14} />
                          </div>
                          <span style={{ fontSize: '10px', fontWeight: 700 }}>{text.debtBtn}</span>
                        </div>
                        <div className="mini-card" style={{ padding: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'var(--color-primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Banknote size={14} />
                          </div>
                          <span style={{ fontSize: '10px', fontWeight: 700 }}>{text.capitalBtn}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {tab === 'products' && (
                  <>
                    <div className="mini-app-header">
                      <span style={{ fontSize: '13px', fontWeight: 700 }}>{text.productsTitle}</span>
                      <Plus size={16} color="var(--color-primary)" />
                    </div>
                    <div className="mini-screen-scroll">
                      <div className="mini-product-row">
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 700 }}>Cooking Oil (1L)</div>
                          <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>1,400 FCFA</div>
                        </div>
                        <span className="mini-stock-pill orange">3 {text.lowStockBadge}</span>
                      </div>
                      <div className="mini-product-row">
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 700 }}>Rice 5kg Bag</div>
                          <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>3,800 FCFA</div>
                        </div>
                        <span className="mini-stock-pill green">12 {text.inStockBadge}</span>
                      </div>
                      <div className="mini-product-row">
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 700 }}>Soap Bar 200g</div>
                          <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>450 FCFA</div>
                        </div>
                        <span className="mini-stock-pill green">35 {text.inStockBadge}</span>
                      </div>
                    </div>
                  </>
                )}

                {tab === 'debts' && (
                  <>
                    <div className="mini-app-header">
                      <span style={{ fontSize: '13px', fontWeight: 700 }}>{text.debtsTitle}</span>
                      <Plus size={16} color="var(--color-primary)" />
                    </div>
                    <div className="mini-screen-scroll">
                      <div className="mini-card" style={{ background: 'var(--color-warning-soft)' }}>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: '#B25300' }}>32,000 FCFA</div>
                        <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>{text.totalOwedLabel}</div>
                      </div>
                      <div className="mini-debt-row">
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 700 }}>Tchinda Alain</div>
                          <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>12,000 FCFA</div>
                        </div>
                        <button type="button" className="mini-debt-btn">{text.markPaidBtn}</button>
                      </div>
                      <div className="mini-debt-row">
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 700 }}>Marie Louise</div>
                          <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>20,000 FCFA</div>
                        </div>
                        <button type="button" className="mini-debt-btn">{text.markPaidBtn}</button>
                      </div>
                    </div>
                  </>
                )}

                {tab === 'history' && (
                  <>
                    <div className="mini-app-header">
                      <span style={{ fontSize: '13px', fontWeight: 700 }}>{text.historyTitle}</span>
                    </div>
                    <div className="mini-screen-scroll">
                      <div className="mini-tx-row">
                        <div className="mini-tx-info">
                          <div className="mini-tx-icon" style={{ background: 'var(--color-success)' }}><ArrowUpRight size={14} /></div>
                          <div>
                            <div style={{ fontWeight: 700 }}>Sale #104</div>
                            <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>3:10 PM</div>
                          </div>
                        </div>
                        <div style={{ fontWeight: 700, color: 'var(--color-success)' }}>+4,500 FCFA</div>
                      </div>
                      <div className="mini-tx-row">
                        <div className="mini-tx-info">
                          <div className="mini-tx-icon" style={{ background: 'var(--color-error)' }}><ArrowDownLeft size={14} /></div>
                          <div>
                            <div style={{ fontWeight: 700 }}>Transport</div>
                            <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>1:05 PM</div>
                          </div>
                        </div>
                        <div style={{ fontWeight: 700, color: 'var(--color-error)' }}>−1,000 FCFA</div>
                      </div>
                      <div className="mini-tx-row">
                        <div className="mini-tx-info">
                          <div className="mini-tx-icon" style={{ background: 'var(--color-primary)' }}><Check size={14} /></div>
                          <div>
                            <div style={{ fontWeight: 700 }}>Debt Settled</div>
                            <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>10:30 AM</div>
                          </div>
                        </div>
                        <div style={{ fontWeight: 700, color: 'var(--color-primary)' }}>+10,000 FCFA</div>
                      </div>
                    </div>
                  </>
                )}

                {/* Bottom Navigation */}
                <div className="phone-bottom-tabs" aria-hidden="true">
                  <div className={`bottom-tab-item ${tab === 'home' ? 'active' : ''}`} onClick={() => setTab('home')} style={{ cursor: 'pointer' }}>
                    <Home size={14} /><span>Home</span>
                  </div>
                  <div className={`bottom-tab-item ${tab === 'products' ? 'active' : ''}`} onClick={() => setTab('products')} style={{ cursor: 'pointer' }}>
                    <Package size={14} /><span>Products</span>
                  </div>
                  <div className={`bottom-tab-item ${tab === 'history' ? 'active' : ''}`} onClick={() => setTab('history')} style={{ cursor: 'pointer' }}>
                    <HistoryIcon size={14} /><span>History</span>
                  </div>
                  <div className={`bottom-tab-item ${tab === 'debts' ? 'active' : ''}`} onClick={() => setTab('debts')} style={{ cursor: 'pointer' }}>
                    <HandCoins size={14} /><span>Debts</span>
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

export default InteractiveDemo;
