// Global Types
export interface FrameworkConfig {
  appName: string;
  version: string;
  environment: 'development' | 'staging' | 'production';
  buildDate?: string;
  
  // Developer/Agency Information
  developer: {
    name: string;
    website: string;
    email: string;
    year: number;
    description: string;
    tagline: string;
  };

  // API Configuration
  api: {
    baseUrl: string;
    timeout: number;
    retries: number;
    version: string;
  };

  // CMS Configuration
  cms: {
    provider: 'contentful' | 'strapi' | 'sanity';
    apiKey: string;
    spaceId?: string;
    endpoint?: string;
    environment?: string;
  };

  // Feature Flags
  features: {
    i18n: boolean;
    analytics: boolean;
    seo: boolean;
    pwa: boolean;
    darkMode: boolean;
    debugMode: boolean;
  };

  // SEO Configuration
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    defaultKeywords: string[];
    author: string;
    copyright: string;
    generator: string;
  };

  // Theme Configuration
  theme: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      neutral: string;
      success: string;
      warning: string;
      error: string;
    };
    fonts: {
      sans: string[];
      serif: string[];
      mono: string[];
    };
  };

  // Performance Configuration
  performance: {
    enableLazyLoading: boolean;
    enableCodeSplitting: boolean;
    enableImageOptimization: boolean;
    enableBundleAnalysis: boolean;
    cacheStrategy: string;
  };

  // Contact Information
  contact: {
    email: string;
    website: string;
    support: string;
    sales: string;
  };

  // Legal Information
  legal: {
    companyName: string;
    website: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
  };

  // Social Media
  social: {
    twitter: string;
    linkedin: string;
    github: string;
    instagram: string;
  };
}

// Component Base Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  testId?: string;
  ariaLabel?: string;
}

// Navigation Types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
  isExternal?: boolean;
}

// Content Types
export interface ContentBase {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  status: 'draft' | 'published' | 'archived';
  meta: {
    seoTitle?: string;
    seoDescription?: string;
    ogImage?: string;
    keywords?: string[];
  };
}

export interface BlogPost extends ContentBase {
  content: string;
  excerpt: string;
  author: Author;
  categories: Category[];
  tags: Tag[];
  featuredImage?: MediaAsset;
  readingTime: number;
}

export interface Product extends ContentBase {
  description: string;
  price: number;
  currency: string;
  sku: string;
  images: MediaAsset[];
  categories: Category[];
  features: string[];
  specifications: Record<string, string>;
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
}

export interface Page extends ContentBase {
  content: string;
  template: string;
  components: PageComponent[];
}

// Supporting Types
export interface Author {
  id: string;
  name: string;
  bio?: string;
  avatar?: MediaAsset;
  social?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parent?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface MediaAsset {
  id: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
  format: string;
  size: number;
  title?: string;
}

export interface PageComponent {
  id: string;
  type: string;
  props: Record<string, any>;
  order: number;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
  error?: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, any>;
  };
}

export interface QueryParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  filters?: Record<string, any>;
  populate?: string[];
  locale?: string;
}

// Theme Types
export interface ThemeConfig {
  colors: {
    brand: {
      primary: string;
      secondary: string;
      accent: string;
      neutral: string;
    };
    semantic: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
  };
  typography: {
    fontFamily: {
      sans: string[];
      serif: string[];
      mono: string[];
    };
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
  breakpoints: Record<string, string>;
}

// Form Types
export interface FormField {
  name: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file';
  label: string;
  placeholder?: string;
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    custom?: (value: any) => boolean | string;
  };
  options?: Array<{ label: string; value: string }>;
}

export interface FormConfig {
  fields: FormField[];
  submitUrl: string;
  method: 'POST' | 'PUT' | 'PATCH';
  successMessage?: string;
  errorMessage?: string;
  redirectUrl?: string;
}

// Analytics Types
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
}

// Error Types
export interface FrameworkError {
  code: string;
  message: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  context?: Record<string, any>;
  timestamp: string;
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>; 