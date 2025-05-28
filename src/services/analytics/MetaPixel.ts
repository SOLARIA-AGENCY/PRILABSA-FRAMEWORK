/**
 * Meta Pixel Service
 * Solaria.agency - 2024
 * 
 * Handles Facebook Pixel script injection and event tracking
 */

declare global {
  interface Window {
    fbq: {
      (...args: any[]): void;
      queue?: any[];
    } & any;
    _fbq: any;
  }
}

export class MetaPixelService {
  private pixelId: string | null = null;
  private isInitialized = false;

  /**
   * Initialize Meta Pixel with pixel ID
   */
  initialize(pixelId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!pixelId) {
        console.warn('Meta Pixel: No pixel ID provided');
        resolve();
        return;
      }

      if (this.isInitialized && this.pixelId === pixelId) {
        resolve();
        return;
      }

      try {
        this.pixelId = pixelId;
        this.injectPixelScript();
        this.configurePixel();
        this.isInitialized = true;
        
        console.log(`Meta Pixel: Initialized with ID ${pixelId}`);
        resolve();
      } catch (error) {
        console.error('Meta Pixel: Initialization failed', error);
        reject(error);
      }
    });
  }

  /**
   * Inject Meta Pixel script into document head
   */
  private injectPixelScript(): void {
    if (!this.pixelId) return;

    // Remove existing Meta Pixel scripts
    const existingScripts = document.querySelectorAll('script[src*="connect.facebook.net"]');
    existingScripts.forEach(script => script.remove());

    // Create inline pixel base code
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${this.pixelId}');
      fbq('track', 'PageView');
    `;
    
    // Insert after GA4 but before other scripts
    const head = document.head;
    const gaScripts = head.querySelectorAll('script[src*="googletagmanager.com"]');
    const insertAfter = gaScripts.length > 0 ? gaScripts[gaScripts.length - 1] : head.firstChild;
    
    if (insertAfter && insertAfter.nextSibling) {
      head.insertBefore(script, insertAfter.nextSibling);
    } else {
      head.appendChild(script);
    }

    // Add noscript fallback
    this.addNoscriptFallback();
  }

  /**
   * Add noscript fallback for Meta Pixel
   */
  private addNoscriptFallback(): void {
    if (!this.pixelId) return;

    // Remove existing noscript
    const existingNoscript = document.querySelector('noscript img[src*="facebook.com/tr"]');
    existingNoscript?.remove();

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
           src="https://www.facebook.com/tr?id=${this.pixelId}&ev=PageView&noscript=1" />
    `;
    
    document.body.appendChild(noscript);
  }

  /**
   * Configure Meta Pixel for enhanced tracking
   */
  private configurePixel(): void {
    // Initialize fbq if not already present
    if (!window.fbq) {
      const fbqFunction: any = function(...args: any[]) {
        fbqFunction.queue = fbqFunction.queue || [];
        fbqFunction.queue.push(args);
      };
      fbqFunction.queue = [] as any[];
      window.fbq = fbqFunction;
    }
  }

  /**
   * Track custom event
   */
  trackEvent(eventName: string, parameters?: Record<string, any>): void {
    if (!this.isInitialized || !window.fbq) {
      console.warn('Meta Pixel: Not initialized, skipping event:', eventName);
      return;
    }

    try {
      // Convert event name to Meta Pixel standard format
      const standardEventName = this.standardizeEventName(eventName);
      
      if (parameters) {
        window.fbq('track', standardEventName, parameters);
      } else {
        window.fbq('track', standardEventName);
      }
      
      console.log('Meta Pixel: Event tracked:', standardEventName, parameters);
    } catch (error) {
      console.error('Meta Pixel: Event tracking failed:', error);
    }
  }

  /**
   * Track page view (for SPA navigation)
   */
  trackPageView(path?: string): void {
    if (!this.isInitialized || !window.fbq) return;

    try {
      window.fbq('track', 'PageView', {
        page_path: path || window.location.pathname,
        page_url: window.location.href
      });
      
      console.log('Meta Pixel: PageView tracked for path:', path || window.location.pathname);
    } catch (error) {
      console.error('Meta Pixel: PageView tracking failed:', error);
    }
  }

  /**
   * Track custom conversion
   */
  trackCustomEvent(eventName: string, parameters?: Record<string, any>): void {
    if (!this.isInitialized || !window.fbq) return;

    try {
      window.fbq('trackCustom', eventName, parameters);
      console.log('Meta Pixel: Custom event tracked:', eventName, parameters);
    } catch (error) {
      console.error('Meta Pixel: Custom event tracking failed:', error);
    }
  }

  /**
   * Standardize event names to Meta Pixel format
   */
  private standardizeEventName(eventName: string): string {
    const eventMap: Record<string, string> = {
      'page_view': 'PageView',
      'add_to_cart': 'AddToCart',
      'purchase': 'Purchase',
      'contact_form': 'Contact',
      'download': 'Download',
      'search': 'Search',
      'view_content': 'ViewContent',
      'lead': 'Lead',
      'complete_registration': 'CompleteRegistration'
    };

    return eventMap[eventName] || eventName;
  }

  /**
   * Clean up and remove scripts
   */
  destroy(): void {
    const scripts = document.querySelectorAll('script[src*="connect.facebook.net"], noscript img[src*="facebook.com/tr"]');
    scripts.forEach(script => script.remove());
    
    this.isInitialized = false;
    this.pixelId = null;
    
    // Clear fbq
    if (window.fbq) {
      (window as any).fbq = undefined;
    }
    
    console.log('Meta Pixel: Service destroyed');
  }
}

// Export singleton instance
export const metaPixel = new MetaPixelService(); 