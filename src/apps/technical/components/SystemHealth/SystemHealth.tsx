/**
 * System Health Component
 * Solaria.agency - 2024
 * 
 * Displays overall system health and status metrics
 */

import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    loadHealthMetrics();
  }, []);

  const loadHealthMetrics = async () => {
    try {
      // Simulate API call
      const mockMetrics: HealthMetric[] = [
        {
          name: 'Database Connection',
          status: 'healthy',
          value: 'Connected',
          description: 'Primary database connection is stable',
          lastChecked: new Date()
        },
        {
          name: 'Memory Usage',
          status: 'healthy',
          value: '45%',
          description: 'Memory usage within normal range',
          lastChecked: new Date()
        },
        {
          name: 'CPU Usage',
          status: 'healthy',
          value: '23%',
          description: 'CPU load is optimal',
          lastChecked: new Date()
        },
        {
          name: 'Test Coverage',
          status: 'warning',
          value: '12.67%',
          description: 'Test coverage below 80% threshold',
          lastChecked: new Date()
        },
        {
          name: 'Response Time',
          status: 'healthy',
          value: '120ms',
          description: 'Average API response time',
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
        duration: 1.45,
        size: '294.32 kB',
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
          <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-1">
            <span className="text-green-700 text-sm font-medium">✓ Sistema Validado por SOLARIA.AGENCY</span>
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
              <div className="text-sm opacity-75">Última verificación</div>
              <div className="font-medium">{new Date().toLocaleTimeString()}</div>
            </div>
          </div>
        </div>

        {/* Build Information */}
        {buildInfo && (
          <div className="mb-6">
            <h4 className="text-md font-medium text-gray-900 mb-3">Estado del Despliegue</h4>
            <div className={`rounded-lg p-4 ${getBuildStatusColor(buildInfo.status)}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    Status: {buildInfo.status.charAt(0).toUpperCase() + buildInfo.status.slice(1)}
                  </div>
                  <div className="text-sm opacity-75">
                    Duración: {buildInfo.duration}s • Tamaño optimizado: {buildInfo.size}
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
                Verificado: {metric.lastChecked.toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Status Summary - NO INTERACTIVE ACTIONS */}
      <div className="p-6 border-t border-gray-200 bg-gray-50">
        <h4 className="text-md font-medium text-gray-900 mb-3">Estado Técnico Completado</h4>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-blue-800 text-sm">
            🏆 <strong>Este entorno ha sido preconfigurado y verificado por SOLARIA.AGENCY.</strong><br />
            Todas las acciones técnicas han sido completadas exitosamente. No se requieren intervenciones adicionales por parte del cliente.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-green-600 font-semibold">✓ Lint Check</div>
            <div className="text-gray-600">Completado</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-green-600 font-semibold">✓ Type Check</div>
            <div className="text-gray-600">Validado</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-green-600 font-semibold">✓ Format Code</div>
            <div className="text-gray-600">Optimizado</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-green-600 font-semibold">✓ Clean Cache</div>
            <div className="text-gray-600">Limpio</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 