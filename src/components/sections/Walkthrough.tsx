import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ArrowDownLeft,
  Package,
  Scissors,
  HandCoins,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  Lock,
  Fingerprint,
  Plus,
  Home,
  History as HistoryIcon,
  Banknote,
  Search,
  Check
} from 'lucide-react';
import KaziMark from '../brand/KaziMark';
import './Walkthrough.css';

interface WalkthroughStepData {
  id: string;
  stepNumber: string;
  badge: string;
  title: string;
  description: string;
  problemSolved: string;
  howToUse: string;
  renderScreen: () => React.ReactNode;
}

export const Walkthrough: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Measure scroll progress along the red accent line
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Start when top of container hits 70% viewport, end when bottom leaves
      const startOffset = windowHeight * 0.7;
      const current = startOffset - rect.top;
      const total = elementHeight - (windowHeight * 0.3);

      const rawProgress = Math.max(0, Math.min(1, current / total));
      setScrollProgress(rawProgress * 100);

      // Determine active step index
      const stepElements = containerRef.current.querySelectorAll('.walkthrough-step');
      stepElements.forEach((el, index) => {
        const stepRect = el.getBoundingClientRect();
        if (stepRect.top < windowHeight * 0.55 && stepRect.bottom > windowHeight * 0.25) {
          setActiveStepIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const STEPS: WalkthroughStepData[] = [
    // Step 1: Welcome & Setup
    {
      id: 'step-welcome',
      stepNumber: '01',
      badge: 'Getting Started',
      title: 'Welcome & Instant Business Setup',
      description: 'Start your digital notebook in less than 30 seconds. Name your shop or trade (e.g. Awa Market, Douala Provisions, Salon Divine), state what you sell, and your notebook is instantly active.',
      problemSolved: 'No complicated registration forms, no mandatory bank account linking, and no confusing accounting software onboarding.',
      howToUse: 'Open Kazi, tap Create Account, enter your basic profile name, and confirm your business name to open your notebook immediately.',
      renderScreen: () => (
        <div className="screen-wrapper">
          <div className="mini-status-bar">
            <span>5:31</span>
            <span>100% 🔋</span>
          </div>
          <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
            <img
              src="/assets/welcome-screen-image.jpeg"
              alt="Kazi Welcome Screen with Shopkeeper"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: 10, left: 10, background: '#FFFFFF', padding: '4px 10px', borderRadius: '16px', fontSize: '10px', fontWeight: 700, color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
              <CheckCircle2 size={12} color="var(--color-success)" />
              <span>+2,400 FCFA Recorded</span>
            </div>
          </div>
          <div style={{ padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <KaziMark size={36} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '18px', color: 'var(--color-text-primary)' }}>Your business, kept simple.</div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
              Keep track of your sales, expenses, products and debts in one simple place.
            </div>
            <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ background: 'var(--color-primary)', color: '#FFFFFF', padding: '9px', borderRadius: '10px', fontSize: '12px', fontWeight: 700 }}>
                Create account
              </div>
              <div style={{ background: '#FFFFFF', color: 'var(--color-primary)', border: '1.5px solid var(--color-primary)', padding: '8px', borderRadius: '10px', fontSize: '12px', fontWeight: 700 }}>
                Sign in
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Step 2: Home Dashboard
    {
      id: 'step-dashboard',
      stepNumber: '02',
      badge: 'Daily Balance',
      title: 'Home Dashboard: Money In, Money Out & Made',
      description: 'The instant command center of your shop. Three clean numbers tell you everything you need to know today: Money I received (sales), Money I spent (expenses), and Money I made (net profit).',
      problemSolved: 'Ends stressful evening calculator sessions and lost receipts. At any moment of the day, you see whether your business is ahead.',
      howToUse: 'Open the app to see your live financial pulse. Tap any of the four large quick action cards to record an event immediately.',
      renderScreen: () => (
        <div className="screen-wrapper">
          <div className="mini-status-bar">
            <span>5:31</span>
            <span>100% 🔋</span>
          </div>
          <div className="mini-app-header">
            <div className="mini-app-title">
              <KaziMark size={24} />
              <span>Kazi</span>
            </div>
            <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>Douala, CM</span>
          </div>
          <div className="mini-screen-scroll">
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Good morning, Awa
            </div>

            {/* Metric Card */}
            <div className="mini-card" style={{ boxShadow: '0 2px 8px rgba(30,42,38,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className="mini-card-title">Money received</div>
                  <div className="mini-card-val" style={{ color: 'var(--color-success)' }}>+12,500 FCFA</div>
                </div>
                <div style={{ width: 1, height: 30, background: 'var(--color-border)' }} />
                <div>
                  <div className="mini-card-title">Money spent</div>
                  <div className="mini-card-val" style={{ color: 'var(--color-error)' }}>−4,200 FCFA</div>
                </div>
              </div>
              <div style={{ height: 1, background: 'var(--color-border)', margin: '8px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className="mini-card-title">Money made (Net)</div>
                  <div className="mini-card-val" style={{ color: 'var(--color-primary)' }}>+8,300 FCFA</div>
                </div>
                <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: 600 }}>Today</span>
              </div>
            </div>

            {/* Quick Action Buttons 2x2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 26, height: 26, borderRadius: '6px', backgroundColor: 'var(--color-success)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={16} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700 }}>Record sale</span>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 26, height: 26, borderRadius: '6px', backgroundColor: 'var(--color-error)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowDownLeft size={16} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700 }}>Record expense</span>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 26, height: 26, borderRadius: '6px', backgroundColor: 'var(--color-warning)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HandCoins size={16} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700 }}>Money owed</span>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 26, height: 26, borderRadius: '6px', backgroundColor: 'var(--color-primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Banknote size={16} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700 }}>Add capital</span>
              </div>
            </div>

            {/* Low stock alert */}
            <div style={{ background: 'var(--color-warning-soft)', border: '1px solid rgba(237,108,2,0.3)', borderRadius: '10px', padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '10px', color: '#8A3E00', fontWeight: 600 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <AlertTriangle size={15} color="#ED6C02" />
                <span>2 items low on stock</span>
              </div>
              <span style={{ color: 'var(--color-primary-dark)', fontWeight: 700 }}>View &rarr;</span>
            </div>
          </div>
          <div className="phone-bottom-tabs">
            <div className="bottom-tab-item active"><Home size={14} /><span>Home</span></div>
            <div className="bottom-tab-item"><Package size={14} /><span>Products</span></div>
            <div className="bottom-tab-item"><HistoryIcon size={14} /><span>History</span></div>
            <div className="bottom-tab-item"><HandCoins size={14} /><span>Debts</span></div>
          </div>
        </div>
      )
    },

    // Step 3: Fast Sales & Expense Recording
    {
      id: 'step-recording',
      stepNumber: '03',
      badge: 'Quick Logging',
      title: 'Fast Sales & Expense Recording',
      description: 'Logging transactions is built for fast counter interactions. Tap to record a sale or expense in whole FCFA. Choose catalog items to deduct stock automatically, or pick common presets like Worker Pay, Transport, Rent, or Stock.',
      problemSolved: 'No typing long accounting descriptions while customers wait. Everyday presets let you log an expense in two taps.',
      howToUse: 'Tap "Record a sale" or "Record an expense", type the FCFA amount, pick a preset (e.g. Transport or Restock) or catalog product, and tap Save.',
      renderScreen: () => (
        <div className="screen-wrapper">
          <div className="mini-status-bar">
            <span>5:32</span>
            <span>100% 🔋</span>
          </div>
          <div className="mini-app-header">
            <span style={{ fontSize: '13px', fontWeight: 700 }}>New Transaction</span>
            <span style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: 700 }}>Cancel</span>
          </div>
          <div className="mini-screen-scroll">
            {/* Sale vs Purchase Switch */}
            <div style={{ display: 'flex', background: 'var(--color-surface-alt)', padding: '3px', borderRadius: '8px' }}>
              <div style={{ flex: 1, padding: '5px', textAlign: 'center', background: 'var(--color-success)', color: '#FFFFFF', borderRadius: '6px', fontSize: '11px', fontWeight: 700 }}>
                Sale (Money In)
              </div>
              <div style={{ flex: 1, padding: '5px', textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '11px', fontWeight: 600 }}>
                Expense
              </div>
            </div>

            {/* Amount Input */}
            <div className="mini-card">
              <div className="mini-card-title">Amount (FCFA)</div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                3,500 <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>FCFA</span>
              </div>
            </div>

            {/* Presets Grid */}
            <div>
              <div className="mini-card-title" style={{ marginBottom: '6px' }}>Category or Presets:</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                {['Stock Sale', 'Direct Cash', 'Transport', 'Worker pay', 'Repairs', 'Electricity'].map((preset, i) => (
                  <div
                    key={preset}
                    style={{
                      background: i === 0 ? 'var(--color-primary-soft)' : '#FFFFFF',
                      border: `1px solid ${i === 0 ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      color: i === 0 ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                      padding: '6px 4px',
                      borderRadius: '8px',
                      fontSize: '10px',
                      textAlign: 'center',
                      fontWeight: 600
                    }}
                  >
                    {preset}
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Effect Badge */}
            <div style={{ background: 'var(--color-primary-soft)', padding: '8px 10px', borderRadius: '8px', fontSize: '10px', color: 'var(--color-primary-dark)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} />
              <span>Linked to stock: 1 unit will be deducted automatically</span>
            </div>

            {/* Save Button */}
            <div style={{ marginTop: 'auto', background: 'var(--color-primary)', color: '#FFFFFF', padding: '10px', borderRadius: '10px', textAlign: 'center', fontWeight: 700, fontSize: '13px' }}>
              Save Sale
            </div>
          </div>
        </div>
      )
    },

    // Step 4: Product Catalog & Stock Tracking
    {
      id: 'step-products',
      stepNumber: '04',
      badge: 'Inventory Control',
      title: 'Products, Services & Low-Stock Alerts',
      description: 'Track your catalog with clean categorization for physical Products or billable Services. Turn on stock tracking with a low-stock threshold, and Kazi gives you early warnings before high-demand items run out.',
      problemSolved: 'Stockouts cost sales. Kazi gives you visibility on what is in your store without complicated warehouse software.',
      howToUse: 'Add an item with a price in FCFA. Toggle "Track stock" and choose an alert threshold (e.g. 5 units). Record stock-in when deliveries arrive.',
      renderScreen: () => (
        <div className="screen-wrapper">
          <div className="mini-status-bar">
            <span>5:33</span>
            <span>100% 🔋</span>
          </div>
          <div className="mini-app-header">
            <span style={{ fontSize: '13px', fontWeight: 700 }}>My Products (8 items)</span>
            <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'var(--color-primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Plus size={16} />
            </div>
          </div>
          <div className="mini-screen-scroll">
            {/* Search Bar */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--color-text-muted)' }}>
              <Search size={14} />
              <span>Search products or services...</span>
            </div>

            {/* Product Item 1: Low Stock */}
            <div className="mini-product-row" style={{ borderLeft: '3px solid var(--color-warning)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 30, height: 30, borderRadius: '8px', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)' }}>
                  <Package size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700 }}>Cooking Oil (1L)</div>
                  <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>1,400 FCFA • Product</div>
                </div>
              </div>
              <span className="mini-stock-pill orange">3 in stock (Low)</span>
            </div>

            {/* Product Item 2: Ample Stock */}
            <div className="mini-product-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 30, height: 30, borderRadius: '8px', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)' }}>
                  <Package size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700 }}>Soap Powder 500g</div>
                  <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>800 FCFA • Product</div>
                </div>
              </div>
              <span className="mini-stock-pill green">24 in stock</span>
            </div>

            {/* Product Item 3: Service */}
            <div className="mini-product-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 30, height: 30, borderRadius: '8px', background: 'var(--color-accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B57416' }}>
                  <Scissors size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700 }}>Hair Styling / Cut</div>
                  <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>2,500 FCFA • Service</div>
                </div>
              </div>
              <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: 600 }}>Service</span>
            </div>

            {/* Product Item 4: Sugar */}
            <div className="mini-product-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 30, height: 30, borderRadius: '8px', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)' }}>
                  <Package size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700 }}>Sugar Cubes Pack</div>
                  <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>950 FCFA • Product</div>
                </div>
              </div>
              <span className="mini-stock-pill green">18 in stock</span>
            </div>
          </div>
        </div>
      )
    },

    // Step 5: Who Owes Me
    {
      id: 'step-debts',
      stepNumber: '05',
      badge: 'Credit Recovery',
      title: 'Customer Debts ("Who Owes Me")',
      description: 'Small businesses in Cameroon thrive on customer relationships, but uncollected credit drains your working capital. Kazi keeps an exact list of who owes you, the amount in FCFA, and how long it has been owed.',
      problemSolved: 'Stops forgotten customer debts and eliminates awkward arguments over forgotten payment terms.',
      howToUse: 'Record the debtor\'s name, amount, and date. When they return with the money, tap "Mark as paid" to settle the debt and add the cash to your history.',
      renderScreen: () => (
        <div className="screen-wrapper">
          <div className="mini-status-bar">
            <span>5:34</span>
            <span>100% 🔋</span>
          </div>
          <div className="mini-app-header">
            <span style={{ fontSize: '13px', fontWeight: 700 }}>Money Owed (Debts)</span>
            <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'var(--color-primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Plus size={16} />
            </div>
          </div>
          <div className="mini-screen-scroll">
            {/* Total Owed Banner */}
            <div className="mini-card" style={{ background: 'linear-gradient(135deg, var(--color-warning-soft) 0%, #FFFFFF 100%)', borderColor: 'rgba(237,108,2,0.3)' }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#B25300' }}>
                42,000 FCFA
              </div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
                Total owed to you by 3 customers
              </div>
            </div>

            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-text-secondary)', marginTop: '4px' }}>
              Still Owed (Active)
            </div>

            {/* Debtor 1 */}
            <div className="mini-debt-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="mini-debt-avatar">T</div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700 }}>Tchinda Alain</div>
                  <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>Owed since 18 Oct 2026</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-text-primary)' }}>15,000 FCFA</div>
                <div className="mini-debt-btn">Mark as paid</div>
              </div>
            </div>

            {/* Debtor 2 */}
            <div className="mini-debt-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="mini-debt-avatar">M</div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700 }}>Mama Marie</div>
                  <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>Owed since 22 Oct 2026</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-text-primary)' }}>8,500 FCFA</div>
                <div className="mini-debt-btn">Mark as paid</div>
              </div>
            </div>

            {/* Settled Section */}
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-text-secondary)', marginTop: '6px' }}>
              Settled Recently
            </div>
            <div className="mini-debt-row" style={{ opacity: 0.7 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="mini-debt-avatar" style={{ background: 'var(--color-surface-alt)', color: 'var(--color-text-muted)' }}>B</div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, textDecoration: 'line-through' }}>Boris K.</div>
                  <div style={{ fontSize: '9px', color: 'var(--color-success)', fontWeight: 600 }}>Paid on 24 Oct 2026</div>
                </div>
              </div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-success)' }}>18,500 FCFA ✓</div>
            </div>
          </div>
        </div>
      )
    },

    // Step 6: Activity History & Corrections
    {
      id: 'step-history',
      stepNumber: '06',
      badge: 'Audit Transparency',
      title: 'Activity Feed & Daily Summaries ("What Happened")',
      description: 'Every sale, purchase, capital addition, and settled debt is organized in a clean daily feed. Filter by Today, Yesterday, This Week, or Older date ranges. Made a mistake? Tap "Correct" to update records cleanly.',
      problemSolved: 'Provides complete accountability. If cash in the drawer does not match your notebook, you can review the exact chronological log.',
      howToUse: 'Open the History tab. Tap period chips to switch between Today and past days. Tap any row to view details or fix mistakes.',
      renderScreen: () => (
        <div className="screen-wrapper">
          <div className="mini-status-bar">
            <span>5:35</span>
            <span>100% 🔋</span>
          </div>
          <div className="mini-app-header">
            <span style={{ fontSize: '13px', fontWeight: 700 }}>What Happened</span>
            <span style={{ fontSize: '11px', color: 'var(--color-primary)' }}><Calendar size={14} /></span>
          </div>
          <div className="mini-screen-scroll">
            {/* Period Filter Chips */}
            <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '2px' }}>
              {['Today', 'Yesterday', 'This week', 'Older'].map((period, i) => (
                <div
                  key={period}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    background: i === 0 ? 'var(--color-primary-soft)' : '#FFFFFF',
                    color: i === 0 ? 'var(--color-primary-dark)' : 'var(--color-text-secondary)',
                    border: `1px solid ${i === 0 ? 'var(--color-primary)' : 'var(--color-border)'}`
                  }}
                >
                  {period}
                </div>
              ))}
            </div>

            {/* Daily Summary */}
            <div className="mini-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px' }}>
              <div>
                <div style={{ fontSize: '9px', color: 'var(--color-text-secondary)' }}>Received</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-success)' }}>+25,300</div>
              </div>
              <div>
                <div style={{ fontSize: '9px', color: 'var(--color-text-secondary)' }}>Spent</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-error)' }}>−5,280</div>
              </div>
              <div>
                <div style={{ fontSize: '9px', color: 'var(--color-text-secondary)' }}>Net</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)' }}>+20,020</div>
              </div>
            </div>

            {/* Activity Items */}
            <div className="mini-tx-row">
              <div className="mini-tx-info">
                <div className="mini-tx-icon" style={{ background: 'var(--color-success)' }}>
                  <ArrowUpRight size={14} />
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>Sold Cooking Oil x2</div>
                  <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>4:15 PM • Cash</div>
                </div>
              </div>
              <div style={{ fontWeight: 700, color: 'var(--color-success)' }}>+2,800 FCFA</div>
            </div>

            <div className="mini-tx-row">
              <div className="mini-tx-info">
                <div className="mini-tx-icon" style={{ background: 'var(--color-error)' }}>
                  <ArrowDownLeft size={14} />
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>Transport to Central Market</div>
                  <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>2:30 PM • Expense</div>
                </div>
              </div>
              <div style={{ fontWeight: 700, color: 'var(--color-error)' }}>−1,500 FCFA</div>
            </div>

            <div className="mini-tx-row">
              <div className="mini-tx-info">
                <div className="mini-tx-icon" style={{ background: 'var(--color-primary)' }}>
                  <HandCoins size={14} />
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>Boris Settled Debt</div>
                  <div style={{ fontSize: '9px', color: 'var(--color-text-muted)' }}>11:20 AM • Debt Paid</div>
                </div>
              </div>
              <div style={{ fontWeight: 700, color: 'var(--color-primary)' }}>+18,500 FCFA</div>
            </div>
          </div>
        </div>
      )
    },

    // Step 7: App Lock & Security
    {
      id: 'step-security',
      stepNumber: '07',
      badge: 'Privacy & Protection',
      title: 'App Lock & Local Device Privacy',
      description: 'Lending your phone to family, friends, or apprentices is normal in Cameroon. App Lock keeps your private business numbers secure with your choice of a 4-to-6 digit PIN, password, or device fingerprint.',
      problemSolved: 'Nobody borrowing your phone can see your profit, sales records, customer debt list, or stock margins.',
      howToUse: 'Open the More tab, tap App Lock, and choose PIN, Password, or Fingerprint. Kazi asks for verification whenever the app is reopened.',
      renderScreen: () => (
        <div className="screen-wrapper" style={{ background: '#FFFFFF' }}>
          <div className="mini-status-bar">
            <span>5:36</span>
            <span>100% 🔋</span>
          </div>
          <div style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
            <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'var(--color-primary-soft)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
              <Lock size={22} />
            </div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-text-primary)' }}>Kazi is Locked</div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
              Enter your PIN or use your fingerprint
            </div>

            {/* PIN Dots */}
            <div className="mini-pin-dots">
              <div className="mini-pin-dot filled" />
              <div className="mini-pin-dot filled" />
              <div className="mini-pin-dot filled" />
              <div className="mini-pin-dot" />
            </div>

            {/* Keypad */}
            <div className="mini-keypad" style={{ width: '100%', marginTop: 'auto' }}>
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '🔒', '0', '⌫'].map((key) => (
                <div key={key} className="mini-key-btn">{key}</div>
              ))}
            </div>

            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
              <Fingerprint size={16} />
              <span>Unlock with fingerprint</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="walkthrough-section" id="walkthrough">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary section-tag">Interactive Guided Walkthrough</span>
          <h2>How Kazi Works: Real Mobile App Screens</h2>
          <p>
            Explore the authentic Kazi mobile application screens below. Follow the red connecting timeline to see how Kazi makes everyday small business records simple and fast.
          </p>
        </div>

        <div className="walkthrough-timeline-container" ref={containerRef}>
          {/* Continuous Red Accent Line */}
          <div className="walkthrough-spine" aria-hidden="true">
            <div
              className="walkthrough-spine-progress"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Steps */}
          {STEPS.map((step, index) => {
            const isAlternate = index % 2 === 1;
            const isActive = activeStepIndex === index;

            return (
              <div
                key={step.id}
                id={step.id}
                className={`walkthrough-step ${isAlternate ? 'alternate' : ''}`}
              >
                {/* Step Marker Node along the Red Line */}
                <div
                  className={`step-marker-node ${isActive ? 'active' : ''}`}
                  aria-hidden="true"
                >
                  {step.stepNumber}
                </div>

                {/* Text Explanation Column */}
                <div className="walkthrough-text-col">
                  <div className="step-meta-badge">
                    <span>Step {step.stepNumber}</span>
                    <span>•</span>
                    <span>{step.badge}</span>
                  </div>

                  <h3 className="step-heading">{step.title}</h3>
                  <p className="step-description">{step.description}</p>

                  <div className="step-detail-box">
                    <div className="step-detail-item">
                      <span className="step-detail-label">Problem Solved:</span>
                      <span className="step-detail-desc">{step.problemSolved}</span>
                    </div>
                    <div className="step-detail-item">
                      <span className="step-detail-label">How to Use:</span>
                      <span className="step-detail-desc">{step.howToUse}</span>
                    </div>
                  </div>
                </div>

                {/* Real Screen Render Column */}
                <div className="walkthrough-phone-col">
                  <div className="walkthrough-phone-frame">
                    {step.renderScreen()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
