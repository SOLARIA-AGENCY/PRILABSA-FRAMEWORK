/**
 * Google Analytics 4 Service
 * Solaria.agency - 2024
 * 
 * Handles GA4 script injection and event tracking
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export class GoogleAnalyticsService {
  private measurementId: string | null = null;
  private isInitialized = false;

  /**
   * Initialize Google Analytics with measurement ID
   */
  initialize(measurementId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!measurementId) {
        console.warn('GA4: No measurement ID provided');
        resolve();
        return;
      }

      if (this.isInitialized && this.measurementId === measurementId) {
        resolve();
        return;
      }

      try {
        this.measurementId = measurementId;
        this.injectGtagScript();
        this.configureDataLayer();
        this.isInitialized = true;
        
        console.log(`GA4: Initialized with ID ${measurementId}`);
        resolve();
      } catch (error) {
        console.error('GA4: Initialization failed', error);
        reject(error);
      }
    });
  }

  /**
   * Inject Google Analytics script into document head
   */
  private injectGtagScript(): void {
    if (!this.measurementId) return;

    // Remove existing GA scripts
    const existingScripts = document.querySelectorAll('script[src*="googletagmanager.com/gtag"]');
    existingScripts.forEach(script => script.remove());

    // Create and inject gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    document.head.insertBefore(script, document.head.firstChild);

    // Create inline configuration script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${this.measurementId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.insertBefore(configScript, script.nextSibling);
  }

  /**
   * Configure dataLayer for enhanced tracking
   */
  private configureDataLayer(): void {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() {
      window.dataLayer.push(arguments);
    };
  }

  /**
   * Track custom event
   */
  trackEvent(eventName: string, parameters?: Record<string, any>): void {
    if (!this.isInitialized || !window.gtag) {
      console.warn('GA4: Not initialized, skipping event:', eventName);
      return;
    }

    try {
      window.gtag('event', eventName, {
        ...parameters,
        timestamp: Date.now()
      });
      
      console.log('GA4: Event tracked:', eventName, parameters);
    } catch (error) {
      console.error('GA4: Event tracking failed:', error);
    }
  }

  /**
   * Track page view (for SPA navigation)
   */
  trackPageView(path?: string, title?: string): void {
    if (!this.isInitialized) return;

    this.trackEvent('page_view', {
      page_title: title || document.title,
      page_location: path || window.location.href,
      page_path: path || window.location.pathname
    });
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: Record<string, any>): void {
    if (!this.isInitialized || !window.gtag) return;

    try {
      window.gtag('set', properties);
      console.log('GA4: User properties set:', properties);
    } catch (error) {
      console.error('GA4: Set user properties failed:', error);
    }
  }

  /**
   * Clean up and remove scripts
   */
  destroy(): void {
    const scripts = document.querySelectorAll('script[src*="googletagmanager.com/gtag"]');
    scripts.forEach(script => script.remove());
    
    this.isInitialized = false;
    this.measurementId = null;
    
    console.log('GA4: Service destroyed');
  }
}

// Export singleton instance
export const googleAnalytics = new GoogleAnalyticsService(); 