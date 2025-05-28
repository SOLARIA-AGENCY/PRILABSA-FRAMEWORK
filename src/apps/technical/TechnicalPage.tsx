/**
 * PRILABSA Framework - Technical Dashboard
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */

import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/atoms/Button/Button';

export const TechnicalPage = () => {
  // Mock data - In real implementation, this would come from APIs/package.json
  const frameworkInfo = {
    name: "PRILABSA Framework",
    version: "1.1.2",
    buildDate: new Date().toISOString().split('T')[0],
    nodeVersion: "18.19.0",
    environment: "development"
  };

  const dependencies = [
    { name: "react", version: "19.1.0", type: "core", status: "latest" },
    { name: "typescript", version: "5.6.3", type: "core", status: "latest" },
    { name: "vite", version: "6.3.5", type: "build", status: "latest" },
    { name: "tailwindcss", version: "3.4.17", type: "styling", status: "latest" },
    { name: "react-router-dom", version: "7.1.1", type: "routing", status: "latest" },
    { name: "@tanstack/react-query", version: "5.67.1", type: "data", status: "latest" },
    { name: "react-helmet-async", version: "2.0.5", type: "seo", status: "latest" },
    { name: "jest", version: "29.7.0", type: "testing", status: "latest" }
  ];

  const testMetrics = {
    totalTests: 95,
    passing: 95,
    failing: 0,
    coverage: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    },
    lastRun: new Date().toLocaleString()
  };

  const buildMetrics = {
    bundleSize: "275.53 kB",
    buildTime: "1.32s",
    chunks: 3,
    assetsOptimized: true
  };

  return (
    <>
      <Helmet>
        <title>Technical Dashboard - PRILABSA Framework</title>
        <meta name="description" content="Technical information, dependencies, and system metrics" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-framework mb-2">
            Technical Dashboard
          </h1>
          <p className="text-gray-600 font-framework">
            Framework information, dependencies, testing metrics, and system status
          </p>
        </div>

        {/* Framework Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Framework Version</p>
                <p className="text-lg font-semibold text-gray-900 font-framework">{frameworkInfo.version}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Test Coverage</p>
                <p className="text-lg font-semibold text-green-600 font-framework">{testMetrics.coverage.statements}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Build Time</p>
                <p className="text-lg font-semibold text-gray-900 font-framework">{buildMetrics.buildTime}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Bundle Size</p>
                <p className="text-lg font-semibold text-gray-900 font-framework">{buildMetrics.bundleSize}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dependencies Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 font-framework">Core Dependencies</h3>
              <p className="text-sm text-gray-500">Current package versions and status</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {dependencies.map((dep, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dep.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{dep.version}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          dep.type === 'core' ? 'bg-blue-100 text-blue-800' :
                          dep.type === 'build' ? 'bg-purple-100 text-purple-800' :
                          dep.type === 'styling' ? 'bg-pink-100 text-pink-800' :
                          dep.type === 'testing' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {dep.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {dep.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Test Metrics */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 font-framework mb-4">Test Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Tests</span>
                  <span className="text-sm font-semibold text-gray-900">{testMetrics.totalTests}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Passing</span>
                  <span className="text-sm font-semibold text-green-600">{testMetrics.passing}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Failing</span>
                  <span className="text-sm font-semibold text-red-600">{testMetrics.failing}</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">Coverage Breakdown</p>
                  <div className="space-y-2">
                    {Object.entries(testMetrics.coverage).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 capitalize">{key}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full" 
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-semibold text-green-600">{value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Last run: {testMetrics.lastRun}</p>
                </div>
              </div>
            </div>

            {/* Build Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 font-framework mb-4">Build Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Bundle Size</span>
                  <span className="text-sm font-semibold text-gray-900">{buildMetrics.bundleSize}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Build Time</span>
                  <span className="text-sm font-semibold text-gray-900">{buildMetrics.buildTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Chunks</span>
                  <span className="text-sm font-semibold text-gray-900">{buildMetrics.chunks}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Assets Optimized</span>
                  <span className={`text-sm font-semibold ${buildMetrics.assetsOptimized ? 'text-green-600' : 'text-red-600'}`}>
                    {buildMetrics.assetsOptimized ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 font-framework mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" size="sm" className="justify-center">
              Run Tests
            </Button>
            <Button variant="outline" size="sm" className="justify-center">
              Build Production
            </Button>
            <Button variant="outline" size="sm" className="justify-center">
              Check Updates
            </Button>
            <Button variant="outline" size="sm" className="justify-center">
              Generate Report
            </Button>
          </div>
        </div>

        {/* System Information */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 font-framework mb-4">System Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500">Framework</p>
              <p className="text-lg font-semibold text-gray-900 font-framework">{frameworkInfo.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Node.js Version</p>
              <p className="text-lg font-semibold text-gray-900 font-mono">{frameworkInfo.nodeVersion}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Environment</p>
              <span className={`inline-flex px-2 py-1 text-sm font-semibold rounded-full ${
                frameworkInfo.environment === 'production' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {frameworkInfo.environment}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalPage; 