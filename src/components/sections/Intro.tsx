import React from 'react';
import { BookOpen, AlertOctagon, CheckCircle2, ArrowRight } from 'lucide-react';
import './Intro.css';

export const Intro: React.FC = () => {
  return (
    <section className="intro-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary section-tag">The Reality of Small Business</span>
          <h2>Why Small Business Notebooks Matter</h2>
          <p>
            Across markets in Douala, Yaoundé, Bamenda, and Bafoussam, thousands of business owners rely on memory or paper notebooks to run their daily trade. Here is why that gets difficult — and how Kazi solves it.
          </p>
        </div>

        <div className="intro-grid">
          {/* Card 1: Paper Notebooks */}
          <div className="intro-card">
            <div className="intro-card-icon-wrap" style={{ backgroundColor: 'var(--color-error-soft)', color: 'var(--color-error)' }}>
              <BookOpen size={24} />
            </div>
            <h3>Paper Notebooks Get Lost & Torn</h3>
            <p>
              Pages rip, rain damages records, ink smudges, and notebooks get left behind. When records disappear, you lose proof of sales and cannot verify your daily progress.
            </p>
            <div className="intro-card-contrast">
              <CheckCircle2 size={16} color="var(--color-success)" />
              <span>Kazi keeps every entry safely on your phone</span>
            </div>
          </div>

          {/* Card 2: Customer Debts */}
          <div className="intro-card">
            <div className="intro-card-icon-wrap" style={{ backgroundColor: 'var(--color-warning-soft)', color: 'var(--color-warning)' }}>
              <AlertOctagon size={24} />
            </div>
            <h3>Customer Debts Get Forgotten</h3>
            <p>
              Allowing trusted customers to pay later is how business gets done. But when debts are jotted down on loose scraps of paper, you forget who owes what, leading to cash shortages.
            </p>
            <div className="intro-card-contrast">
              <CheckCircle2 size={16} color="var(--color-success)" />
              <span>Kazi tracks every debt and settles with one tap</span>
            </div>
          </div>

          {/* Card 3: Accounting Overkill */}
          <div className="intro-card">
            <div className="intro-card-icon-wrap" style={{ backgroundColor: 'var(--color-primary-soft)', color: 'var(--color-primary-dark)' }}>
              <CheckCircle2 size={24} />
            </div>
            <h3>Full Accounting Is Too Complex</h3>
            <p>
              Double-entry debits, credits, balance sheets, and tax journals require accounting degrees and desktop computers. Small business owners just want to know: Did I make money today?
            </p>
            <div className="intro-card-contrast">
              <CheckCircle2 size={16} color="var(--color-success)" />
              <span>Kazi answers in 3 numbers: Received, Spent, Made</span>
            </div>
          </div>
        </div>

        {/* Cameroon Context Banner */}
        <div className="quote-banner">
          <div className="quote-text">
            <h4>&ldquo;Your business, kept simple.&rdquo;</h4>
            <p>
              No monthly accounting subscriptions. No complex spreadsheets. Designed from the ground up for how business actually operates in Cameroon.
            </p>
          </div>
          <a href="#walkthrough" className="btn btn-primary" style={{ flexShrink: 0 }}>
            <span>See Step-by-Step Walkthrough</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
