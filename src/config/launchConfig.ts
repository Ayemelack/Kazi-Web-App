/**
 * Kazi Application Store Launch & Publication Configuration
 * 
 * Centralized configuration for the Kazi mobile application store release status.
 * Update this file when Kazi is published to Google Play or Apple App Store.
 * 
 * - STATE A: isPublished = false (Displays truthful coming-soon state with store badges and release notifications)
 * - STATE B: isPublished = true  (Activates direct official store links)
 */

export interface LaunchConfig {
  /**
   * Set to true when Kazi is officially live on the stores.
   * Do not set to true until the store listing is approved and public.
   */
  isPublished: boolean;

  /**
   * Status announcement badge text.
   */
  statusLabel: string;
  statusBadgeText: string;

  /**
   * Official Google Play Store configuration
   */
  googlePlay: {
    enabled: boolean;
    storeUrl: string; // e.g., 'https://play.google.com/store/apps/details?id=com.kazi.app'
    packageId: string;
    buttonText: string;
    comingSoonNote: string;
  };

  /**
   * Official Apple App Store configuration
   */
  appStore: {
    enabled: boolean;
    storeUrl: string; // e.g., 'https://apps.apple.com/app/kazi/id123456789'
    appId: string;
    buttonText: string;
    comingSoonNote: string;
  };

  /**
   * Direct APK or early tester distribution (optional)
   */
  directApk: {
    enabled: boolean;
    downloadUrl: string;
    label: string;
  };
}

export const launchConfig: LaunchConfig = {
  // STATE A: Currently in pre-launch / pilot stage.
  // Change to `true` once official store URLs are verified and live.
  isPublished: false,

  statusLabel: 'Coming Soon to App Stores',
  statusBadgeText: 'In Pilot / Private Beta Testing',

  googlePlay: {
    enabled: true,
    // When live, replace with: 'https://play.google.com/store/apps/details?id=com.kazi.app'
    storeUrl: '',
    packageId: 'com.kazi.app',
    buttonText: 'Get it on Google Play',
    comingSoonNote: 'Store listing undergoing review for Android devices.'
  },

  appStore: {
    enabled: true,
    // When live, replace with: 'https://apps.apple.com/app/kazi/id...'
    storeUrl: '',
    appId: '',
    buttonText: 'Download on the App Store',
    comingSoonNote: 'iOS edition coming soon to the App Store.'
  },

  directApk: {
    enabled: false,
    downloadUrl: '',
    label: 'Download APK for Pilot Testers'
  }
};
