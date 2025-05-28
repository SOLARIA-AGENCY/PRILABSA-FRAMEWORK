/**
 * PRILABSA Framework - Tracking Management Page
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */

import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/atoms/Button/Button';

export const TrackingPage = () => {
  return (
    <>
      <Helmet>
        <title>Tracking Management - PRILABSA Framework</title>
        <meta name="description" content="Manage analytics codes and tracking integrations" />
      </Helmet>
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-framework mb-2">
            Tracking Management
          </h1>
          <p className="text-gray-600 font-framework">
            Manage analytics codes, tracking pixels, and third-party integrations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Google Analytics */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 font-framework">Google Analytics</h3>
                <p className="text-sm text-gray-500">GA4 Tracking Code</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Measurement ID</label>
                <input 
                  type="text" 
                  placeholder="G-XXXXXXXXXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <Button size="sm" className="w-full">Save Google Analytics</Button>
            </div>
          </div>

          {/* Google Tag Manager */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm6.131 13.2L12 17.4 5.869 13.2V6.8L12 10.8l6.131-4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 font-framework">Google Tag Manager</h3>
                <p className="text-sm text-gray-500">GTM Container</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Container ID</label>
                <input 
                  type="text" 
                  placeholder="GTM-XXXXXXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <Button size="sm" variant="secondary" className="w-full">Save GTM Container</Button>
            </div>
          </div>

          {/* Facebook Pixel */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 font-framework">Facebook Pixel</h3>
                <p className="text-sm text-gray-500">Meta Conversion Tracking</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pixel ID</label>
                <input 
                  type="text" 
                  placeholder="123456789012345"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <Button size="sm" variant="outline" className="w-full">Save Facebook Pixel</Button>
            </div>
          </div>

          {/* Hotjar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13.5c0 3.314-2.686 6-6 6s-6-2.686-6-6V7.5c0-.828.672-1.5 1.5-1.5S9 6.672 9 7.5v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6c0-.828.672-1.5 1.5-1.5S18 6.672 18 7.5v6z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 font-framework">Hotjar</h3>
                <p className="text-sm text-gray-500">Heatmaps & Session Recording</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Site ID</label>
                <input 
                  type="text" 
                  placeholder="1234567"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <Button size="sm" variant="ghost" className="w-full">Save Hotjar</Button>
            </div>
          </div>
        </div>

        {/* Current Tracking Status */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 font-framework mb-4">Active Tracking Codes</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
              <span className="text-sm text-gray-600">Google Analytics GA4</span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Not Configured</span>
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
              <span className="text-sm text-gray-600">Google Tag Manager</span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Not Configured</span>
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
              <span className="text-sm text-gray-600">Facebook Pixel</span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Not Configured</span>
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
              <span className="text-sm text-gray-600">Hotjar</span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Not Configured</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-blue-900 mb-1">GDPR Compliance Notice</h4>
                <p className="text-sm text-blue-800">
                  Remember to implement proper cookie consent banners and privacy policies when using tracking codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingPage; 