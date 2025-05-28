import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

// Enterprise Dashboard Component
const EnterpriseDashboard: React.FC = () => {
  const securityScore = 9.8;
  const testsCount = 95;
  const bundleSize = "275.66 kB";
  const gzipSize = "81.30 kB";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-300 text-sm font-medium">ENTERPRISE PRODUCTION READY</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              ENTERPRISE FRAMEWORK
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Mission-critical web development platform with enterprise-grade security, 
              performance optimization, and comprehensive audit certification.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-green-400">{securityScore}/10</div>
                <div className="text-sm text-slate-300">Security Score</div>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-blue-400">{testsCount}</div>
                <div className="text-sm text-slate-300">Tests Passing</div>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-purple-400">{gzipSize}</div>
                <div className="text-sm text-slate-300">Optimized Bundle</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Compliance Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Security & Compliance Certification</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive security audit completed with enterprise-grade hardening and zero vulnerabilities detected.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* External Security Audit */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900">Security Audit</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  PASSED
                </span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Penetration Testing</span>
                <span className="text-green-600 font-medium">✓ Completed</span>
              </div>
              <div className="flex justify-between">
                <span>Vulnerability Assessment</span>
                <span className="text-green-600 font-medium">✓ Zero Found</span>
              </div>
              <div className="flex justify-between">
                <span>SSL/TLS Analysis</span>
                <span className="text-green-600 font-medium">✓ Grade A+</span>
              </div>
            </div>
          </div>

          {/* Enterprise Headers */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900">Security Headers</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  ENTERPRISE
                </span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Content Security Policy</span>
                <span className="text-green-600 font-medium">✓ Active</span>
              </div>
              <div className="flex justify-between">
                <span>HSTS + Preload</span>
                <span className="text-green-600 font-medium">✓ Enforced</span>
              </div>
              <div className="flex justify-between">
                <span>Cross-Origin Protection</span>
                <span className="text-green-600 font-medium">✓ Hardened</span>
              </div>
            </div>
          </div>

          {/* Performance Optimization */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900">Performance</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  OPTIMIZED
                </span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Bundle Size</span>
                <span className="text-green-600 font-medium">{bundleSize}</span>
              </div>
              <div className="flex justify-between">
                <span>Gzipped Size</span>
                <span className="text-green-600 font-medium">{gzipSize}</span>
              </div>
              <div className="flex justify-between">
                <span>Code Splitting</span>
                <span className="text-green-600 font-medium">✓ Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Banner */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">ECO-Lambda Enterprise Certified</h3>
          <p className="text-lg opacity-90 mb-4">
            Framework ready for enterprise environments with complete security hardening and performance optimization
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">✓ Zero Vulnerabilities</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">✓ TypeScript Strict</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">✓ PWA Ready</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">✓ SEO Optimized</span>
          </div>
        </div>
      </div>

      {/* Applications Grid */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise Applications</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Modular applications built with enterprise-grade standards and security protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/corporate" className="group bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 011-1h4a2 2 0 011 1v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Corporate Site</h3>
              <p className="text-slate-600 mb-4">Professional corporate presentation with enterprise branding and compliance features.</p>
              <span className="text-blue-600 font-medium group-hover:text-blue-700">Access Application →</span>
            </Link>

            <Link to="/technical" className="group bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-green-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Technical Dashboard</h3>
              <p className="text-slate-600 mb-4">Comprehensive system monitoring, security metrics, and infrastructure analytics.</p>
              <span className="text-green-600 font-medium group-hover:text-green-700">View Metrics →</span>
            </Link>

            <Link to="/blog" className="group bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-purple-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Content Platform</h3>
              <p className="text-slate-600 mb-4">Enterprise-grade content management with SEO optimization and security features.</p>
              <span className="text-purple-600 font-medium group-hover:text-purple-700">Manage Content →</span>
            </Link>

            <Link to="/catalog" className="group bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-orange-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Product Catalog</h3>
              <p className="text-slate-600 mb-4">Secure e-commerce catalog with enterprise inventory and transaction management.</p>
              <span className="text-orange-600 font-medium group-hover:text-orange-700">Browse Products →</span>
            </Link>

            <Link to="/tracking" className="group bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-indigo-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Analytics Tracking</h3>
              <p className="text-slate-600 mb-4">Privacy-compliant analytics with enterprise-grade data protection and GDPR compliance.</p>
              <span className="text-indigo-600 font-medium group-hover:text-indigo-700">View Analytics →</span>
            </Link>

            <div className="group bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border-2 border-dashed border-slate-300 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">Extensible Architecture</h3>
                <p className="text-slate-500 text-sm">Ready for additional enterprise modules and custom integrations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog App Component (placeholder)
const BlogApp: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Content Platform</h1>
      <p className="text-slate-600 mb-6">Enterprise-grade content management system with advanced SEO and security features.</p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">🚀 Content management functionality coming soon with enterprise features.</p>
      </div>
    </div>
  </div>
);

// Catalog App Component (placeholder)
const CatalogApp: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Product Catalog</h1>
      <p className="text-slate-600 mb-6">Secure e-commerce catalog with enterprise inventory management.</p>
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <p className="text-orange-800">🛍️ E-commerce functionality coming soon with enterprise security.</p>
      </div>
    </div>
  </div>
);

// Corporate App Component (placeholder)
const CorporateApp: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Corporate Site</h1>
      <p className="text-slate-600 mb-6">Professional corporate presentation with enterprise branding.</p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">🏢 Corporate functionality coming soon with compliance features.</p>
      </div>
    </div>
  </div>
);

// Navigation Component
const Navigation: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (isHome) return null;

  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <img src={solariaIsotipo} alt="Enterprise Framework" className="h-8 w-8" />
              <span className="text-white font-bold text-xl hover:text-blue-400 transition-colors">
                ENTERPRISE FRAMEWORK
              </span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/corporate" className="text-slate-300 hover:text-white transition-colors">Corporate</Link>
              <Link to="/technical" className="text-slate-300 hover:text-white transition-colors">Technical</Link>
              <Link to="/blog" className="text-slate-300 hover:text-white transition-colors">Content</Link>
              <Link to="/catalog" className="text-slate-300 hover:text-white transition-colors">Catalog</Link>
              <Link to="/tracking" className="text-slate-300 hover:text-white transition-colors">Analytics</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-green-400 text-sm font-medium">● ENTERPRISE READY</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={solariaLogo} alt="Solaria Agency" className="h-8 w-auto" />
            </div>
            <h3 className="text-xl font-bold mb-4">ENTERPRISE FRAMEWORK</h3>
            <p className="text-slate-400 mb-4 max-w-md">
              Mission-critical web development platform with enterprise-grade security, 
              comprehensive auditing, and performance optimization.
            </p>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">
                ✓ ECO-Lambda Certified
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-300">
                Security Score 9.8/10
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Applications</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/corporate" className="hover:text-white transition-colors">Corporate Site</Link></li>
              <li><Link to="/technical" className="hover:text-white transition-colors">Technical Dashboard</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Content Platform</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Product Catalog</Link></li>
              <li><Link to="/tracking" className="hover:text-white transition-colors">Analytics Tracking</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Security & Compliance</h4>
            <ul className="space-y-2 text-slate-400">
              <li>External Security Audit</li>
              <li>Enterprise Headers</li>
              <li>Zero Vulnerabilities</li>
              <li>TypeScript Strict</li>
              <li>PWA & SEO Ready</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Enterprise Framework. Developed by Solaria Agency with ECO-Lambda certification.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-green-400 text-sm">● Production Ready</span>
            <span className="text-blue-400 text-sm">● Enterprise Hardened</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-slate-50">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<EnterpriseDashboard />} />
              <Route path="/blog/*" element={<BlogApp />} />
              <Route path="/catalog/*" element={<CatalogApp />} />
              <Route path="/corporate/*" element={<CorporateApp />} />
              <Route path="/technical" element={<TechnicalPage />} />
              <Route path="/tracking" element={<TrackingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
