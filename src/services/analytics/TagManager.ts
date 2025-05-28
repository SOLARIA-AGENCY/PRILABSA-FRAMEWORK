/**
 * Tag Manager Service
 * Solaria.agency - 2024
 * 
 * Central service for managing all analytics tags
 */

import { googleAnalytics } from './GoogleAnalytics';
import { metaPixel } from './MetaPixel';
import { getAnalyticsConfig, type AppAnalyticsConfig } from '../../config/analytics';

export interface TagManagerOptions {
  appName: string;
  enableConsoleLogging?: boolean;
}

export class TagManagerService {
  private currentApp: string | null = null;
  private isInitialized = false;
  private config: AppAnalyticsConfig | null = null;
  private enableLogging = false;

  /**
   * Initialize Tag Manager for specific app
   */
  async initialize(options: TagManagerOptions): Promise<void> {
    const { appName, enableConsoleLogging = false } = options;
    
    try {
      this.enableLogging = enableConsoleLogging;
      this.config = getAnalyticsConfig(appName);
      
      if (!this.config.enabled) {
        this.log(`TagManager: Tracking disabled for app "${appName}"`);
        return;
      }

      // Clean up previous initialization if switching apps
      if (this.currentApp !== appName && this.isInitialized) {
        await this.cleanup();
      }

      this.currentApp = appName;

      // Initialize Google Analytics
      if (this.config.googleAnalytics) {
        await googleAnalytics.initialize(this.config.googleAnalytics);
        
        // Set custom dimensions
        if (this.config.customDimensions) {
          googleAnalytics.setUserProperties(this.config.customDimensions);
        }
      }

      // Initialize Meta Pixel
      if (this.config.metaPixel) {
        await metaPixel.initialize(this.config.metaPixel);
      }

      this.isInitialized = true;
      this.log(`TagManager: Initialized for app "${appName}"`);
      
    } catch (error) {
      console.error('TagManager: Initialization failed:', error);
      throw error;
    }
  }

  /**
   * Track page view across all enabled platforms
   */
  trackPageView(path?: string, title?: string): void {
    if (!this.isInitialized || !this.config?.enabled) {
      this.log('TagManager: Not initialized or disabled, skipping page view');
      return;
    }

    try {
      // Track in Google Analytics
      if (this.config.googleAnalytics) {
        googleAnalytics.trackPageView(path, title);
      }

      // Track in Meta Pixel
      if (this.config.metaPixel) {
        metaPixel.trackPageView(path);
      }

      this.log('TagManager: Page view tracked', { path, title });
    } catch (error) {
      console.error('TagManager: Page view tracking failed:', error);
    }
  }

  /**
   * Track custom event across all enabled platforms
   */
  trackEvent(eventName: string, parameters?: Record<string, unknown>): void {
    if (!this.isInitialized || !this.config?.enabled) {
      this.log('TagManager: Not initialized or disabled, skipping event', { eventName });
      return;
    }

    // Check if event is allowed for this app
    if (!this.config.events.includes(eventName)) {
      this.log('TagManager: Event not configured for app', { eventName, app: this.currentApp });
      return;
    }

    try {
      // Track in Google Analytics
      if (this.config.googleAnalytics) {
        googleAnalytics.trackEvent(eventName, {
          ...parameters,
          app_name: this.currentApp
        });
      }

      // Track in Meta Pixel
      if (this.config.metaPixel) {
        metaPixel.trackEvent(eventName, parameters);
      }

      this.log('TagManager: Event tracked', { eventName, parameters });
    } catch (error) {
      console.error('TagManager: Event tracking failed:', error);
    }
  }

  /**
   * Track conversion event with enhanced parameters
   */
  trackConversion(
    conversionType: string, 
    value?: number, 
    currency?: string, 
    parameters?: Record<string, unknown>
  ): void {
    if (!this.isInitialized || !this.config?.enabled) return;

    const conversionData = {
      ...parameters,
      value,
      currency: currency || 'USD',
      app_name: this.currentApp
    };

    try {
      // Track in Google Analytics
      if (this.config.googleAnalytics) {
        googleAnalytics.trackEvent(conversionType, conversionData);
      }

      // Track in Meta Pixel
      if (this.config.metaPixel) {
        metaPixel.trackEvent(conversionType, conversionData);
      }

      this.log('TagManager: Conversion tracked', { conversionType, conversionData });
    } catch (error) {
      console.error('TagManager: Conversion tracking failed:', error);
    }
  }

  /**
   * Track custom event with specific parameters
   */
  trackCustomEvent(eventName: string, parameters?: Record<string, unknown>): void {
    if (!this.isInitialized || !this.config?.enabled) return;

    try {
      if (this.config.googleAnalytics) {
        googleAnalytics.trackEvent(eventName, parameters);
      }
      if (this.config.metaPixel) {
        metaPixel.trackCustomEvent(eventName, parameters);
      }
      this.log('TagManager: Custom event tracked:', { eventName, parameters });
    } catch (error) {
      console.error('TagManager: Custom event failed:', error);
    }
  }

  /**
   * Set user properties across all platforms
   */
  setUserProperties(properties: Record<string, unknown>): void {
    if (!this.isInitialized || !this.config?.enabled) return;

    try {
      const enrichedProperties = {
        ...properties,
        app_name: this.currentApp,
        timestamp: Date.now()
      };

      // Set in Google Analytics
      if (this.config.googleAnalytics) {
        googleAnalytics.setUserProperties(enrichedProperties);
      }

      this.log('TagManager: User properties set', enrichedProperties);
    } catch (error) {
      console.error('TagManager: Setting user properties failed:', error);
    }
  }

  /**
   * Get current configuration
   */
  getConfig(): AppAnalyticsConfig | null {
    return this.config;
  }

  /**
   * Check if tracking is enabled
   */
  isTrackingEnabled(): boolean {
    return this.isInitialized && (this.config?.enabled ?? false);
  }

  /**
   * Get current app name
   */
  getCurrentApp(): string | null {
    return this.currentApp;
  }

  /**
   * Clean up all tracking services
   */
  async cleanup(): Promise<void> {
    try {
      googleAnalytics.destroy();
      metaPixel.destroy();
      
      this.isInitialized = false;
      this.currentApp = null;
      this.config = null;
      
      this.log('TagManager: Cleanup completed');
    } catch (error) {
      console.error('TagManager: Cleanup failed:', error);
    }
  }

  /**
   * Log helper method for debugging
   */
  private log(message: string, data?: Record<string, unknown>): void {
    if (this.enableLogging) {
      if (data) {
        console.log(message, data);
      } else {
        console.log(message);
      }
    }
  }
}

// Export singleton instance
export const tagManager = new TagManagerService(); 