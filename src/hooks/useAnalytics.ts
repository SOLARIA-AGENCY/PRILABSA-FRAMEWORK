/**
 * useAnalytics Hook
 * Solaria.agency - 2024
 * 
 * Custom hook for analytics tracking in React components
 */

import { useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { tagManager } from '../services/analytics/TagManager';

export interface UseAnalyticsOptions {
  appName: string;
  enableConsoleLogging?: boolean;
  trackPageViews?: boolean;
}

export interface AnalyticsAPI {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (path?: string, title?: string) => void;
  trackConversion: (conversionType: string, value?: number, currency?: string, parameters?: Record<string, unknown>) => void;
  trackCustomEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  setUserProperties: (properties: Record<string, unknown>) => void;
  isEnabled: boolean;
  currentApp: string | null;
}

export const useAnalytics = (options: UseAnalyticsOptions): AnalyticsAPI => {
  const location = useLocation();
  const isInitializedRef = useRef(false);
  const currentPathRef = useRef<string>('');
  
  const {
    appName,
    enableConsoleLogging = false,
    trackPageViews = true
  } = options;

  // Initialize analytics on mount
  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        await tagManager.initialize({
          appName,
          enableConsoleLogging
        });
        isInitializedRef.current = true;
        
        // Track initial page view
        if (trackPageViews) {
          tagManager.trackPageView(location.pathname, document.title);
          currentPathRef.current = location.pathname;
        }
        
      } catch (error) {
        console.error('useAnalytics: Initialization failed:', error);
      }
    };

    if (!isInitializedRef.current) {
      initializeAnalytics();
    }
  }, [appName, enableConsoleLogging]);

  // Track page changes for SPA navigation
  useEffect(() => {
    if (isInitializedRef.current && trackPageViews && currentPathRef.current !== location.pathname) {
      tagManager.trackPageView(location.pathname, document.title);
      currentPathRef.current = location.pathname;
    }
  }, [location.pathname, trackPageViews]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isInitializedRef.current) {
        tagManager.cleanup();
        isInitializedRef.current = false;
      }
    };
  }, []);

  // Memoized API methods
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    if (isInitializedRef.current) {
      tagManager.trackEvent(eventName, parameters);
    }
  }, []);

  const trackPageView = useCallback((path?: string, title?: string) => {
    if (isInitializedRef.current) {
      tagManager.trackPageView(path, title);
    }
  }, []);

  const trackConversion = useCallback((
    conversionType: string,
    value?: number,
    currency?: string,
    parameters?: Record<string, unknown>
  ) => {
    if (isInitializedRef.current) {
      tagManager.trackConversion(conversionType, value, currency, parameters);
    }
  }, []);

  const trackCustomEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    if (isInitializedRef.current) {
      tagManager.trackCustomEvent(eventName, parameters);
    }
  }, []);

  const setUserProperties = useCallback((properties: Record<string, unknown>) => {
    if (isInitializedRef.current) {
      tagManager.setUserProperties(properties);
    }
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackCustomEvent,
    setUserProperties,
    isEnabled: tagManager.isTrackingEnabled(),
    currentApp: tagManager.getCurrentApp()
  };
}; 