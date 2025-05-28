/**
 * System Health Component
 * Solaria.agency - 2024
 * 
 * Displays overall system health and status metrics
 */

import React, { useState, useEffect } from 'react';
import { Button } from '../../../../components/atoms/Button/Button';

interface HealthMetric {
  name: string;
  status: 'healthy' | 'warning' | 'critical' | 'unknown';
  value: string | number;
  description: string;
  lastChecked: Date;
}

interface BuildInfo {
  status: 'success' | 'failed' | 'building' | 'unknown';
  duration: number;
  size: string;
  timestamp: Date;
  errors: string[];
  warnings: string[];
}

interface SystemHealthProps {
  className?: string;
}

export const SystemHealth: React.FC<SystemHealthProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<HealthMetric[]>([]);
  const [buildInfo, setBuildInfo] = useState<BuildInfo | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    loadHealthMetrics();
  }, []);

  const loadHealthMetrics = async () => {
    try {
      // Simulate health metrics (in real implementation, this would check actual system status)
      const mockMetrics: HealthMetric[] = [
        {
          name: 'TypeScript Compilation',
          status: 'healthy',
          value: 'No errors',
          description: 'TypeScript compilation successful',
          lastChecked: new Date()
        },
        {
          name: 'ESLint',
          status: 'healthy',
          value: '0 errors, 0 warnings',
          description: 'Code quality checks passed',
          lastChecked: new Date()
        },
        {
          name: 'Bundle Size',
          status: 'healthy',
          value: '275.53 kB',
          description: 'Production bundle size within limits',
          lastChecked: new Date()
        },
        {
          name: 'Dependencies',
          status: 'healthy',
          value: '0 vulnerabilities',
          description: 'All dependencies are secure and up-to-date',
          lastChecked: new Date()
        },
        {
          name: 'Test Coverage',
          status: 'healthy',
          value: '94.8%',
          description: 'Test coverage above 80% threshold',
          lastChecked: new Date()
        },
        {
          name: 'Performance Score',
          status: 'healthy',
          value: '98/100',
          description: 'Lighthouse performance score',
          lastChecked: new Date()
        }
      ];

      const mockBuildInfo: BuildInfo = {
        status: 'success',
        duration: 1.32,
        size: '275.53 kB',
        timestamp: new Date(),
        errors: [],
        warnings: []
      };

      setMetrics(mockMetrics);
      setBuildInfo(mockBuildInfo);
    } catch (error) {
      console.error('Failed to load health metrics:', error);
    }
  };

  const handleHealthCheck = async () => {
    setIsChecking(true);
    try {
      console.log('Running health check...');
      // Simulate health check
      await new Promise(resolve => setTimeout(resolve, 2000));
      await loadHealthMetrics();
    } catch (error) {
      console.error('Health check failed:', error);
    } finally {
      setIsChecking(false);
    }
  };

  const handleBuild = async () => {
    setIsChecking(true);
    try {
      console.log('Building project...');
      // Simulate build process
      setBuildInfo(prev => prev ? { ...prev, status: 'building' } : null);
      await new Promise(resolve => setTimeout(resolve, 3000));
      await loadHealthMetrics();
    } catch (error) {
      console.error('Build failed:', error);
    } finally {
      setIsChecking(false);
    }
  };

  const getStatusColor = (status: HealthMetric['status']) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'unknown': return 'text-gray-600 bg-gray-50 border-gray-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: HealthMetric['status']) => {
    switch (status) {
      case 'healthy': return '✅';
      case 'warning': return '⚠️';
      case 'critical': return '🔴';
      case 'unknown': return '❓';
      default: return '❓';
    }
  };

  const getBuildStatusColor = (status: BuildInfo['status']) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'failed': return 'text-red-600 bg-red-50';
      case 'building': return 'text-blue-600 bg-blue-50';
      case 'unknown': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const healthyCount = metrics.filter(m => m.status === 'healthy').length;
  const warningCount = metrics.filter(m => m.status === 'warning').length;
  const criticalCount = metrics.filter(m => m.status === 'critical').length;
  const overallHealth = criticalCount > 0 ? 'critical' : warningCount > 0 ? 'warning' : 'healthy';

  return (
    <div className={`bg-white rounded-lg shadow-sm border ${className}`}>
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">System Health</h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBuild}
              disabled={isChecking}
            >
              {isChecking ? 'Building...' : 'Build Project'}
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleHealthCheck}
              disabled={isChecking}
            >
              {isChecking ? 'Checking...' : 'Health Check'}
            </Button>
          </div>
        </div>

        {/* Overall Status */}
        <div className={`rounded-lg border-2 p-4 mb-6 ${getStatusColor(overallHealth)}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{getStatusIcon(overallHealth)}</span>
              <div>
                <h4 className="font-semibold text-lg">
                  System Status: {overallHealth.charAt(0).toUpperCase() + overallHealth.slice(1)}
                </h4>
                <p className="text-sm opacity-75">
                  {healthyCount} healthy, {warningCount} warnings, {criticalCount} critical
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-75">Last checked</div>
              <div className="font-medium">{new Date().toLocaleTimeString()}</div>
            </div>
          </div>
        </div>

        {/* Build Information */}
        {buildInfo && (
          <div className="mb-6">
            <h4 className="text-md font-medium text-gray-900 mb-3">Latest Build</h4>
            <div className={`rounded-lg p-4 ${getBuildStatusColor(buildInfo.status)}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    Status: {buildInfo.status.charAt(0).toUpperCase() + buildInfo.status.slice(1)}
                  </div>
                  <div className="text-sm opacity-75">
                    Duration: {buildInfo.duration}s • Size: {buildInfo.size}
                  </div>
                </div>
                <div className="text-right text-sm opacity-75">
                  {buildInfo.timestamp.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Health Metrics Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.name}
              className={`rounded-lg border p-4 ${getStatusColor(metric.status)}`}
            >
              <div className="flex items-start justify-between mb-2">
                <h5 className="font-medium text-sm">{metric.name}</h5>
                <span className="text-lg">{getStatusIcon(metric.status)}</span>
              </div>
              <div className="font-semibold text-lg mb-1">{metric.value}</div>
              <div className="text-xs opacity-75 mb-2">{metric.description}</div>
              <div className="text-xs opacity-60">
                Checked: {metric.lastChecked.toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6 border-t border-gray-200 bg-gray-50">
        <h4 className="text-md font-medium text-gray-900 mb-3">Quick Actions</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => console.log('Lint check')}>
            Lint Check
          </Button>
          <Button variant="outline" size="sm" onClick={() => console.log('Type check')}>
            Type Check
          </Button>
          <Button variant="outline" size="sm" onClick={() => console.log('Format code')}>
            Format Code
          </Button>
          <Button variant="outline" size="sm" onClick={() => console.log('Clean cache')}>
            Clean Cache
          </Button>
        </div>
      </div>
    </div>
  );
}; 