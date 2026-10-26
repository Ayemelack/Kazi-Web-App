import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import KaziLogo from '../brand/KaziLogo';
import './Header.css';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'How It Works', href: '#walkthrough' },
  { label: 'Why Kazi', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Trilingual Demo', href: '#interactive-preview' },
  { label: 'Launch Status', href: '#download' },
  { label: 'Support', href: '#support' },
];

const NAV_BREAKPOINT = 1024;

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousBodyOverflowRef = useRef('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback((restoreFocus = false) => {
    setMobileMenuOpen(false);
    if (restoreFocus) {
      menuButtonRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMenu(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= NAV_BREAKPOINT && mobileMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen, closeMenu]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    previousBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const frame = window.requestAnimationFrame(() => {
      const firstLink = drawerRef.current?.querySelector<HTMLElement>('a[href]');
      firstLink?.focus({ preventScroll: true });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousBodyOverflowRef.current;
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(() => {
    document.body.style.overflow = previousBodyOverflowRef.current;
    setMobileMenuOpen(false);
  }, []);

  const handleDrawerKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !drawerRef.current) return;

    const focusable = Array.from(
      drawerRef.current.querySelectorAll<HTMLElement>('a[href]')
    );

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#hero" className="header-brand" aria-label="Kazi — Your business, kept simple">
            <KaziLogo markSize={36} textSize="1.3rem" />
          </a>

          <div className="header-right">
            <nav className="header-nav" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div
              className="header-lang-pill"
              title="Kazi is trilingual: English, French, and Cameroon Pidgin"
            >
              <Globe size={13} color="var(--color-primary)" aria-hidden="true" />
              <span>EN • FR • Wes-kos</span>
            </div>

            <button
              type="button"
              ref={menuButtonRef}
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => closeMenu(true)}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!mobileMenuOpen}
        onKeyDown={handleDrawerKeyDown}
      >
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-tagline">Your business, kept simple.</span>
          <div className="mobile-lang-indicator">
            <Globe size={13} color="var(--color-primary)" aria-hidden="true" />
            <span>EN • FR • Wes-kos</span>
          </div>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={handleNavClick}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} color="var(--color-text-muted)" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
