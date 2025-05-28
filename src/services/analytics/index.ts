/**
 * Analytics Services Export
 * Solaria.agency - 2024
 */

export { GoogleAnalyticsService, googleAnalytics } from './GoogleAnalytics';
export { MetaPixelService, metaPixel } from './MetaPixel';
export { TagManagerService, tagManager, type TagManagerOptions } from './TagManager';

// Re-export analytics configuration
export { 
  analyticsConfig, 
  getAnalyticsConfig, 
  type AppAnalyticsConfig, 
  type AnalyticsEvent 
} from '../../config/analytics'; 