import type { FrameworkConfig } from '../types';

/**
 * PRILABSA Framework Configuration
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */
export const frameworkConfig: FrameworkConfig = {
  // Framework Information
  appName: 'PRILABSA Framework',
  version: '1.0.0',
  environment: import.meta.env.VITE_NODE_ENV || 'development',
  buildDate: new Date().toISOString(),
  
  // Developer/Agency Information
  developer: {
    name: 'Solaria Agency',
    website: 'https://solaria.agency',
    email: 'hello@solaria.agency',
    year: 2025,
    description: 'Professional web development solutions for modern businesses',
    tagline: 'Transforming digital experiences since 2025',
  },

  // API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
    retries: Number(import.meta.env.VITE_API_RETRIES) || 3,
    version: 'v1',
  },

  // CMS Configuration
  cms: {
    provider: import.meta.env.VITE_CMS_PROVIDER || 'contentful',
    apiKey: import.meta.env.VITE_CMS_API_KEY || '',
    spaceId: import.meta.env.VITE_CMS_SPACE_ID || '',
    environment: import.meta.env.VITE_CMS_ENVIRONMENT || 'master',
  },

  // Feature Flags
  features: {
    i18n: import.meta.env.VITE_ENABLE_I18N === 'true',
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    seo: import.meta.env.VITE_ENABLE_SEO !== 'false',
    pwa: import.meta.env.VITE_ENABLE_PWA === 'true',
    darkMode: import.meta.env.VITE_ENABLE_DARK_MODE !== 'false',
    debugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
  },

  // SEO Configuration
  seo: {
    defaultTitle: 'PRILABSA Framework - Solaria Agency',
    titleTemplate: '%s | PRILABSA Framework',
    defaultDescription: 'Modern, modular web framework for multi-client applications. Developed by Solaria Agency.',
    defaultKeywords: [
      'web framework',
      'react',
      'typescript',
      'tailwindcss',
      'solaria agency',
      'modular architecture',
      'subdomain deployment',
    ],
    author: 'Solaria Agency',
    copyright: `© 2025 Solaria Agency. All rights reserved.`,
    generator: 'PRILABSA Framework by Solaria Agency',
  },

  // Theme Configuration
  theme: {
    colors: {
      // Framework color (Solaria Agency official)
      primary: '#f6921d',
      // Client colors (customizable)
      secondary: '#4f46e5',
      accent: '#06b6d4',
      neutral: '#64748b',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    fonts: {
      // Framework typography (Solaria Agency branding)
      framework: ['IBM Plex Mono', 'monospace'],
      // Client typography options
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  },

  // Performance Configuration
  performance: {
    enableLazyLoading: true,
    enableCodeSplitting: true,
    enableImageOptimization: true,
    enableBundleAnalysis: import.meta.env.VITE_ANALYZE_BUNDLE === 'true',
    cacheStrategy: 'stale-while-revalidate',
  },

  // Contact Information
  contact: {
    email: 'hello@solaria.agency',
    website: 'https://solaria.agency',
    support: 'support@solaria.agency',
    sales: 'sales@solaria.agency',
  },

  // Legal Information
  legal: {
    companyName: 'Solaria Agency',
    website: 'https://solaria.agency',
    copyright: `© 2025 Solaria Agency. All rights reserved.`,
    privacyPolicy: 'https://solaria.agency/privacy',
    termsOfService: 'https://solaria.agency/terms',
  },

  // Social Media
  social: {
    twitter: '@solariaagency',
    linkedin: 'company/solaria-agency',
    github: 'solariaagency',
    instagram: '@solariaagency',
  },
};

/**
 * Application-specific configurations
 */
export const appConfigs = {
  corporate: {
    name: 'Corporate Site',
    description: 'Professional corporate website solution',
    path: '/',
    subdomain: '',
  },
  blog: {
    name: 'Blog Platform',
    description: 'Modern blog platform with CMS integration',
    path: '/blog',
    subdomain: 'blog',
  },
  catalog: {
    name: 'Product Catalog',
    description: 'E-commerce catalog with advanced filtering',
    path: '/catalog',
    subdomain: 'shop',
  },
};

/**
 * Deployment configurations for different environments
 */
export const deploymentConfig = {
  development: {
    baseUrl: 'http://localhost:5173',
    apiUrl: 'http://localhost:3000/api',
  },
  staging: {
    baseUrl: 'https://staging.solaria.agency',
    apiUrl: 'https://api-staging.solaria.agency',
  },
  production: {
    baseUrl: 'https://prilabsa.solaria.agency',
    apiUrl: 'https://api.solaria.agency',
  },
};

export default frameworkConfig; 