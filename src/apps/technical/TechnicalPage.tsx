/**
 * PRILABSA Framework - Technical Dashboard
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */

import React from 'react';
import { DependencyMatrix } from './components/DependencyMatrix/DependencyMatrix';
import { TestingDashboard } from './components/TestingDashboard/TestingDashboard';
import { SystemHealth } from './components/SystemHealth/SystemHealth';
import { Helmet } from 'react-helmet-async';

export const TechnicalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Technical Dashboard - PRILABSA Framework</title>
        <meta name="description" content="Technical information, dependencies, and system metrics" />
      </Helmet>
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Technical Dashboard</h1>
                <p className="mt-2 text-gray-600">
                  Monitor system health, dependencies, and development metrics
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-500">
                  PRILABSA Framework v1.1.2
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" title="System Online"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* System Health Overview */}
          <SystemHealth />

          {/* Testing and Dependencies Row */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <TestingDashboard />
            <DependencyMatrix />
          </div>

          {/* Framework Information */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Framework Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Technology Stack</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• React 19.1.0</li>
                  <li>• TypeScript 5.7.2</li>
                  <li>• Vite 6.3.5</li>
                  <li>• TailwindCSS 3.4.17</li>
                  <li>• Jest + Testing Library</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Architecture</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Atomic Design System</li>
                  <li>• Multi-App Structure</li>
                  <li>• Dynamic Analytics</li>
                  <li>• Modular Configuration</li>
                  <li>• Type-Safe Development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Applications</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Corporate Website</li>
                  <li>• Blog Platform</li>
                  <li>• Product Catalog</li>
                  <li>• Technical Dashboard</li>
                  <li>• Analytics Tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Tools */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🔧</div>
                <div className="font-medium text-gray-900">Vite Dev Server</div>
                <div className="text-sm text-gray-600">Hot Module Replacement</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <div className="font-medium text-gray-900">Jest Testing</div>
                <div className="text-sm text-gray-600">Unit & Integration Tests</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-medium text-gray-900">TailwindCSS</div>
                <div className="text-sm text-gray-600">Utility-First Styling</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium text-gray-900">Analytics</div>
                <div className="text-sm text-gray-600">GA4 & Meta Pixel</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              © 2024 Solaria Agency. PRILABSA Framework - Internal Technical Dashboard
            </div>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechnicalPage; 