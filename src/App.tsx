import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { frameworkConfig } from './config/framework.config';
import { TrackingPage } from './apps/tracking/TrackingPage';
import { TechnicalPage } from './apps/technical/TechnicalPage';
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
    <QueryClientProvider client={queryClient}>
      <Router>
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
                  <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium font-framework transition-colors">
                    Home
                  </Link>
                  <Link to="/blog" className="text-gray-600 hover:text-gray-900 font-medium font-framework transition-colors">
                    Blog
                  </Link>
                  <Link to="/catalog" className="text-gray-600 hover:text-gray-900 font-medium font-framework transition-colors">
                    Catalog
                  </Link>
                  <Link to="/tracking" className="text-gray-600 hover:text-gray-900 font-medium font-framework transition-colors">
                    Tracking
                  </Link>
                  <Link to="/technical" className="text-gray-600 hover:text-gray-900 font-medium font-framework transition-colors">
                    Technical
                  </Link>
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
              <Route path="/tracking" element={<TrackingPage />} />
              <Route path="/technical" element={<TechnicalPage />} />
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
                    <li><Link to="/" className="hover:text-white transition-colors">Corporate Site</Link></li>
                    <li><Link to="/blog" className="hover:text-white transition-colors">Blog Platform</Link></li>
                    <li><Link to="/catalog" className="hover:text-white transition-colors">Product Catalog</Link></li>
                    <li><Link to="/tracking" className="hover:text-white transition-colors">Tracking Management</Link></li>
                    <li><Link to="/technical" className="hover:text-white transition-colors">Technical Dashboard</Link></li>
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">🏢</span>
          </div>
          <h3 className="text-lg font-semibold mb-3">Corporate Site</h3>
          <p className="text-gray-600 mb-4 text-sm">Professional business presence with modern design and SEO optimization</p>
          <Link to="/" className="text-brand-primary hover:text-orange-700 font-medium text-sm">
            Explore Corporate →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">📝</span>
          </div>
          <h3 className="text-lg font-semibold mb-3">Blog Platform</h3>
          <p className="text-gray-600 mb-4 text-sm">Content management system with headless CMS integration and social sharing</p>
          <Link to="/blog" className="text-brand-primary hover:text-orange-700 font-medium text-sm">
            Visit Blog →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">🛍️</span>
          </div>
          <h3 className="text-lg font-semibold mb-3">Product Catalog</h3>
          <p className="text-gray-600 mb-4 text-sm">E-commerce showcase with advanced filtering and shopping cart integration</p>
          <Link to="/catalog" className="text-brand-primary hover:text-orange-700 font-medium text-sm">
            Browse Catalog →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-lg font-semibold mb-3">Tracking</h3>
          <p className="text-gray-600 mb-4 text-sm">Analytics codes management, tracking pixels, and third-party integrations</p>
          <Link to="/tracking" className="text-brand-primary hover:text-orange-700 font-medium text-sm">
            Manage Tracking →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">⚙️</span>
          </div>
          <h3 className="text-lg font-semibold mb-3">Technical</h3>
          <p className="text-gray-600 mb-4 text-sm">Framework info, dependencies, testing metrics, and technical dashboard</p>
          <Link to="/technical" className="text-brand-primary hover:text-orange-700 font-medium text-sm">
            View Dashboard →
          </Link>
        </div>
      </div>
      
      {/* Technical Stack Information */}
      <div className="bg-white rounded-2xl p-8 mb-12 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center font-framework">
          Built with Modern Technology
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.563-.465-.468-.92-.99-1.36-1.563z"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-900">React 19</p>
            <p className="text-xs text-gray-500">Latest</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5z"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-900">TypeScript</p>
            <p className="text-xs text-gray-500">5.6.3</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.459 5.636a.75.75 0 0 1 .75.75v11.228a.75.75 0 0 1-.75.75H9.541a.75.75 0 0 1-.75-.75V6.386a.75.75 0 0 1 .75-.75h4.918z"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-900">Vite</p>
            <p className="text-xs text-gray-500">6.3.5</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-900">Tailwind</p>
            <p className="text-xs text-gray-500">3.4.17</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm6.131 13.2L12 17.4 5.869 13.2V6.8L12 10.8l6.131-4z"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-900">Jest</p>
            <p className="text-xs text-gray-500">29.7.0</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <p className="text-sm font-semibold text-gray-900">100% Coverage</p>
            <p className="text-xs text-gray-500">95 Tests</p>
          </div>
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
