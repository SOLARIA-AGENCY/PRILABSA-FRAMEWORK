import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { frameworkConfig } from './config/framework.config';
import solariaLogo from './assets/framework/logos/solaria-logo.svg';
import solariaIsotipo from './assets/framework/logos/solaria-isotipo.png';
import './index.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Helmet>
            <title>{frameworkConfig.seo.defaultTitle}</title>
            <meta name="description" content={frameworkConfig.seo.defaultDescription} />
            <meta name="keywords" content={frameworkConfig.seo.defaultKeywords.join(', ')} />
            <meta name="author" content={frameworkConfig.seo.author} />
            <meta name="generator" content={frameworkConfig.seo.generator} />
            <meta name="copyright" content={frameworkConfig.seo.copyright} />
            
            {/* Open Graph */}
            <meta property="og:title" content={frameworkConfig.seo.defaultTitle} />
            <meta property="og:description" content={frameworkConfig.seo.defaultDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={frameworkConfig.developer.website} />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={frameworkConfig.seo.defaultTitle} />
            <meta name="twitter:description" content={frameworkConfig.seo.defaultDescription} />
          </Helmet>
          
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white shadow-sm border-b border-gray-200">
              <div className="container-fluid">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={solariaIsotipo} 
                      alt="Solaria Agency" 
                      className="h-8 w-8"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-lg font-semibold text-gray-900 font-framework">
                        {frameworkConfig.appName}
                      </h1>
                      <span className="text-xs text-gray-500 font-framework hidden md:inline">
                        by {frameworkConfig.developer.name}
                      </span>
                    </div>
                  </div>
                  <nav className="flex items-center space-x-6">
                    <a href="/" className="text-gray-600 hover:text-gray-900 font-medium font-framework transition-colors">
                      Home
                    </a>
                    <a href="/blog" className="text-gray-600 hover:text-gray-900 font-medium font-framework transition-colors">
                      Blog
                    </a>
                    <a href="/catalog" className="text-gray-600 hover:text-gray-900 font-medium font-framework transition-colors">
                      Catalog
                    </a>
                    <a 
                      href={frameworkConfig.developer.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-medium font-framework hover:bg-orange-600 transition-colors"
                    >
                      Contact Agency
                    </a>
                  </nav>
                </div>
              </div>
            </header>

            <main className="flex-1 container-fluid py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog/*" element={<BlogApp />} />
                <Route path="/catalog/*" element={<CatalogApp />} />
              </Routes>
            </main>

            <footer className="bg-gray-900 text-white py-12">
              <div className="container-fluid">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <img 
                        src={solariaLogo} 
                        alt="Solaria Agency" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-4 font-framework">{frameworkConfig.appName}</h3>
                    <p className="text-gray-300 mb-4 max-w-md">
                      {frameworkConfig.seo.defaultDescription}
                    </p>
                    <p className="text-sm text-gray-400 font-framework">
                      {frameworkConfig.developer.tagline}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-semibold mb-3 font-framework">Framework</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li><a href="/" className="hover:text-white transition-colors">Corporate Site</a></li>
                      <li><a href="/blog" className="hover:text-white transition-colors">Blog Platform</a></li>
                      <li><a href="/catalog" className="hover:text-white transition-colors">Product Catalog</a></li>
                    </ul>
                  </div>
                  
      <div>
                    <h4 className="text-md font-semibold mb-3 font-framework">Solaria Agency</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>
                        <a 
                          href={frameworkConfig.developer.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                        >
                          Visit Website
                        </a>
                      </li>
                      <li>
                        <a 
                          href={`mailto:${frameworkConfig.developer.email}`}
                          className="hover:text-white transition-colors"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a 
                          href={`mailto:${frameworkConfig.contact.support}`}
                          className="hover:text-white transition-colors"
                        >
                          Get Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-gray-400 mb-4 md:mb-0 font-framework">
                    {frameworkConfig.legal.copyright}
                  </p>
                  <div className="flex space-x-6 text-sm text-gray-400">
                    <a 
                      href={frameworkConfig.legal.privacyPolicy}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <a 
                      href={frameworkConfig.legal.termsOfService}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Terms of Service
                    </a>
                    <span className="font-framework">
                      Built with ❤️ by{' '}
                      <a 
                        href={frameworkConfig.developer.website}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-primary hover:text-orange-700 font-semibold"
                      >
                        {frameworkConfig.developer.name}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

// Placeholder components for apps
const HomePage = () => (
  <div className="text-center">
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
        <img 
          src={solariaLogo} 
          alt="Solaria Agency" 
          className="h-16 w-auto"
        />
      </div>
      
      <h1 className="text-5xl font-bold text-gray-900 mb-6 font-framework">
        Welcome to PRILABSA Framework
      </h1>
      <p className="text-xl text-gray-600 mb-4">
        A modern, modular web framework for multi-client applications
      </p>
      <p className="text-lg text-gray-500 mb-12 font-framework">
        Developed by{' '}
        <a 
          href={frameworkConfig.developer.website}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-primary hover:text-orange-700 font-semibold"
        >
          {frameworkConfig.developer.name}
        </a>
        {' '}• May {frameworkConfig.developer.year}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">🏢</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Corporate Site</h3>
          <p className="text-gray-600 mb-4">Professional business presence with modern design and SEO optimization</p>
          <a href="/" className="text-brand-primary hover:text-orange-700 font-medium">
            Explore Corporate →
          </a>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">📝</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Blog Platform</h3>
          <p className="text-gray-600 mb-4">Content management system with headless CMS integration and social sharing</p>
          <a href="/blog" className="text-brand-primary hover:text-orange-700 font-medium">
            Visit Blog →
          </a>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">🛍️</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Product Catalog</h3>
          <p className="text-gray-600 mb-4">E-commerce showcase with advanced filtering and shopping cart integration</p>
          <a href="/catalog" className="text-brand-primary hover:text-orange-700 font-medium">
            Browse Catalog →
          </a>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-framework">
          Ready to build your next project?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Get professional web development services from {frameworkConfig.developer.name}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={frameworkConfig.developer.website}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold font-framework hover:bg-orange-700 transition-colors"
          >
            Visit Solaria Agency
          </a>
          <a 
            href={`mailto:${frameworkConfig.contact.sales}`}
            className="bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold font-framework border-2 border-brand-primary hover:bg-blue-50 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </div>
);

const BlogApp = () => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 font-framework">Blog Platform</h1>
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
      <p className="text-gray-600 mb-6">
        The blog module is under development. It will feature:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
        <li>Article listing with pagination</li>
        <li>Category and tag filtering</li>
        <li>Search functionality</li>
        <li>SEO optimization</li>
        <li>Social sharing</li>
        <li>Headless CMS integration</li>
      </ul>
      <p className="text-sm text-gray-500 font-framework">
        Developed by{' '}
        <a 
          href={frameworkConfig.developer.website}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-primary hover:text-orange-700"
        >
          {frameworkConfig.developer.name}
        </a>
        {' '}• May {frameworkConfig.developer.year}
      </p>
    </div>
  </div>
);

const CatalogApp = () => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 font-framework">Product Catalog</h1>
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
      <p className="text-gray-600 mb-6">
        The catalog module is under development. It will feature:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
        <li>Product listing with advanced filtering</li>
        <li>Product detail pages</li>
        <li>Search and sorting capabilities</li>
        <li>Wishlist functionality</li>
        <li>Shopping cart integration</li>
        <li>Payment gateway support</li>
      </ul>
      <p className="text-sm text-gray-500 font-framework">
        Developed by{' '}
        <a 
          href={frameworkConfig.developer.website}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-primary hover:text-orange-700"
        >
          {frameworkConfig.developer.name}
        </a>
        {' '}• May {frameworkConfig.developer.year}
      </p>
    </div>
  </div>
);

export default App;
