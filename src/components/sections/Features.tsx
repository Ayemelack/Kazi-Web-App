import React from 'react';
import {
  TrendingUp,
  Package,
  HandCoins,
  Banknote,
  BellRing,
  Lock,
  ArrowRight
} from 'lucide-react';
import './Features.css';

interface FeatureItem {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  badge: string;
  title: string;
  description: string;
  benefit: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: <TrendingUp size={22} />,
    iconBg: 'var(--color-primary-soft)',
    iconColor: 'var(--color-primary-dark)',
    badge: 'Cash Overview',
    title: 'Daily Money In, Out & Net Profit',
    description: 'See exactly how much cash was received from sales, how much went out for supplies or bills, and your net daily profit in real time.',
    benefit: 'Clear clarity on daily earnings'
  },
  {
    icon: <Package size={22} />,
    iconBg: 'var(--color-success-soft)',
    iconColor: 'var(--color-success)',
    badge: 'Inventory Control',
    title: 'Products, Services & Stock Tracking',
    description: 'Keep a clean catalog of goods and services. A sale automatically reduces stock; a purchase increases it. Get low-stock alerts before items run dry.',
    benefit: 'Avoid unexpected stockouts'
  },
  {
    icon: <HandCoins size={22} />,
    iconBg: 'var(--color-warning-soft)',
    iconColor: '#B25300',
    badge: 'Credit Ledger',
    title: 'Who Owes Me (Debts Tracking)',
    description: 'Record customer names, amounts, and dates when credit is given. One tap marks the debt as paid and updates your activity feed with today’s date.',
    benefit: 'Stop losing money to forgotten debts'
  },
  {
    icon: <Banknote size={22} />,
    iconBg: 'var(--color-accent-soft)',
    iconColor: '#B57416',
    badge: 'Capital Tracking',
    title: 'Separate Capital from Daily Revenue',
    description: 'Put your own savings into the shop? Kazi records added capital separately so your sales figures and gross margin remain 100% accurate.',
    benefit: 'Accurate profit calculation'
  },
  {
    icon: <BellRing size={22} />,
    iconBg: 'var(--color-primary-soft)',
    iconColor: 'var(--color-primary-dark)',
    badge: 'Daily Discipline',
    title: 'Gentle Evening Closing Reminders',
    description: 'Set your preferred closing hour (e.g., 8:00 PM). Kazi gives you one gentle nudge to record remaining transactions before packing up for the day.',
    benefit: 'Build effortless business habits'
  },
  {
    icon: <Lock size={22} />,
    iconBg: 'var(--color-error-soft)',
    iconColor: 'var(--color-error)',
    badge: 'Confidentiality',
    title: 'PIN, Password & Fingerprint App Lock',
    description: 'Lend your phone to friends, family, or shop apprentices with total peace of mind. App Lock shields your cash balances and records behind biometric security.',
    benefit: 'Keeps business profits strictly private'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary section-tag">Built for Real Shop Work</span>
          <h2>Key Features Designed for You</h2>
          <p>
            No bloated menus. No unnecessary accounting complexity. Every single tool in Kazi directly answers an everyday small-business question.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="feature-card">
              <div className="feature-card-header">
                <div
                  className="feature-icon-box"
                  style={{ backgroundColor: feat.iconBg, color: feat.iconColor }}
                >
                  {feat.icon}
                </div>
                <span className="badge badge-subtle">{feat.badge}</span>
              </div>

              <h3>{feat.title}</h3>
              <p>{feat.description}</p>

              <div className="feature-card-footer">
                <span>{feat.benefit}</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
