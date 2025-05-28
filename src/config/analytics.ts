/**
 * Analytics Configuration for PRILABSA Framework
 * Solaria.agency - 2024
 * 
 * Defines tracking settings per application
 */

export interface AnalyticsEvent {
  name: string;
  parameters?: Record<string, unknown>;
}

export interface AppAnalyticsConfig {
  googleAnalytics?: string;
  metaPixel?: string;
  enabled: boolean;
  events: string[];
  customDimensions?: Record<string, string>;
}

export const analyticsConfig: Record<string, AppAnalyticsConfig> = {
  corporate: {
    googleAnalytics: import.meta.env.VITE_GA_CORPORATE_ID,
    metaPixel: import.meta.env.VITE_META_PIXEL_CORPORATE_ID,
    enabled: true,
    events: ['page_view', 'contact_form', 'download', 'service_inquiry'],
    customDimensions: {
      app_version: '1.1.2',
      app_type: 'corporate'
    }
  },
  blog: {
    googleAnalytics: import.meta.env.VITE_GA_BLOG_ID,
    metaPixel: import.meta.env.VITE_META_PIXEL_BLOG_ID,
    enabled: true,
    events: ['page_view', 'article_read', 'share', 'comment', 'newsletter_signup'],
    customDimensions: {
      app_version: '1.1.2',
      app_type: 'blog'
    }
  },
  catalog: {
    googleAnalytics: import.meta.env.VITE_GA_CATALOG_ID,
    metaPixel: import.meta.env.VITE_META_PIXEL_CATALOG_ID,
    enabled: true,
    events: ['page_view', 'product_view', 'add_to_cart', 'purchase', 'search'],
    customDimensions: {
      app_version: '1.1.2',
      app_type: 'catalog'
    }
  },
  technical: {
    enabled: false, // No tracking for technical dashboard
    events: []
  },
  tracking: {
    enabled: false, // Internal tracking app
    events: []
  }
};

export const getAnalyticsConfig = (appName: string): AppAnalyticsConfig => {
  return analyticsConfig[appName] || { enabled: false, events: [] };
}; 