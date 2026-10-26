/**
 * Official Kazi Support and Legal Configuration
 * 
 * Source of truth: verified from Kazi mobile app codebase
 * (Kazi/src/screens/more/SupportScreen.tsx, PrivacyScreen.tsx, TermsScreen.tsx)
 */

export interface SupportConfig {
  email: string;
  responseTime: string;
  responseLanguages: string[];
  helpTopics: string[];
  tagline: string;
  appDescription: string;
  targetMarket: string;
  currenciesSupported: string[];
  languagesSupported: { code: string; name: string; nativeName: string }[];
  privacyPoints: { title: string; text: string }[];
  termsPoints: { title: string; text: string }[];
  lastUpdated: string;
}

export const supportConfig: SupportConfig = {
  email: 'support@kazi.app',
  responseTime: 'Within 24 hours',
  responseLanguages: ['English', 'Français'],
  helpTopics: [
    'Signing in and account recovery',
    'Recording sales, expenses, and capital',
    'Customer credit and debt management',
    'Product and service inventory stock tracking',
    'Daily reminders and app-lock security'
  ],
  tagline: 'Your business, kept simple.',
  appDescription: 'A simple, secure, trilingual digital business notebook designed for small business owners, traders, and artisans in Cameroon.',
  targetMarket: 'Cameroon (Central Africa)',
  currenciesSupported: ['FCFA (XAF)'],
  languagesSupported: [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'wes', name: 'Cameroon Pidgin', nativeName: 'Wes-kos' }
  ],
  lastUpdated: 'September 2026',
  privacyPoints: [
    {
      title: 'Private business notebook',
      text: 'Kazi is a private digital notebook. Your business data belongs to you, and it is never sold or shared for advertising.'
    },
    {
      title: 'Protected sessions & credentials',
      text: 'Your account is protected by a password and your signed-in session is stored securely in encrypted device keychain.'
    },
    {
      title: 'Minimal necessary collection',
      text: 'We collect only what is strictly necessary to run the service: your name, email, and the business records you enter.'
    },
    {
      title: 'Permanent erasure on demand',
      text: 'If you choose to delete your account, all your money records, inventory, debts, and profile data are permanently erased from our systems.'
    }
  ],
  termsPoints: [
    {
      title: 'Accurate record keeping',
      text: 'By using Kazi, you agree to keep accurate records and to use the application lawfully.'
    },
    {
      title: 'Self-managed accounting & tax',
      text: 'Kazi is provided as a digital business notebook; each merchant is responsible for managing their own tax and statutory obligations.'
    },
    {
      title: 'Account security responsibility',
      text: 'You are responsible for keeping your login credentials safe and for activities conducted under your account.'
    },
    {
      title: 'Periodic terms updates',
      text: 'We may update these terms as features evolve. Continued use of the application indicates acceptance of updated terms.'
    },
    {
      title: 'Right to terminate and delete',
      text: 'You can stop using Kazi and delete your account and all associated data at any time from the More section.'
    }
  ]
};
