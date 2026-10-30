import { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import Walkthrough from './components/sections/Walkthrough';
import LivePreview from './components/sections/LivePreview';
import InteractiveDemo from './components/sections/InteractiveDemo';
import Features from './components/sections/Features';
import Download from './components/sections/Download';
import Support from './components/sections/Support';
import Footer from './components/layout/Footer';
import LegalModal from './components/modals/LegalModal';

export function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacy = () => setLegalModalType('privacy');
  const openTerms = () => setLegalModalType('terms');
  const closeLegalModal = () => setLegalModalType(null);

  return (
    <div className="site-wrapper">
      <Header />
      <main id="main-content">
        <Hero />
        <Intro />
        <Walkthrough />
        <LivePreview />
        <InteractiveDemo />
        <Features />
        <Download />
        <Support onOpenPrivacy={openPrivacy} onOpenTerms={openTerms} />
      </main>
      <Footer onOpenPrivacy={openPrivacy} onOpenTerms={openTerms} />
      <LegalModal type={legalModalType} onClose={closeLegalModal} />
    </div>
  );
}

export default App;
